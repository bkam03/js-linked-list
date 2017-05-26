function linkedListGenerator(){
 var _head = null;
  var _tail = null;

  function _createNode(value) {
    var newNode = {
      previousNode : null,
      value : value,
      nextNode : null
    };
    return newNode;
  }

  function _getHead() {
    return _head;
  }

  function _getTail() {
    return _tail;
  }

  function _add(value) {
    var newNode = _createNode(value);
    if( _getHead() !== null ) { //if list is not empty
      var formerEndElement = _getTail();
      formerEndElement.nextNode = newNode;
      newNode.previousNode = formerEndElement;
    } else {  //empty list
      _head = newNode;
    }
    _tail = newNode;

    return newNode;
  } //add new node to end of list.  return new node.

  function _get(index) {

    var firstNode = _head;
    function findNode(number, currentNode) {
      if( number === 0 ) {
        return currentNode;
      } else if( currentNode.nextNode === null ) {
        //not in index
        return false;
      } else {
        //contnuing on
        return findNode( --number, currentNode.nextNode );
      }
    }
    if( index < 0 ) {
      index = 0;
    }
    if( firstNode !== null ) { //return false if list is empty
      return findNode(index, firstNode);
    } else {
      return false;
    }
  } //returns node, or false

  function _remove(index) {
    var nodeToRemove = _get(index);
    if( nodeToRemove !== null && nodeToRemove !== false ) { //only attempt remove if index exists,
      if( nodeToRemove.previousNode === null ) { //removing head of list
        _head = _getHead().nextNode;
        if(_head === null) { //if item is last in list
          _tail = null;
        }
        if(_getHead() !== null ) {
          _getHead().previousNode = null;
        }
      } else if( nodeToRemove.nextNode === null ) { //removing tail of list
        nodeToRemove.previousNode.nextNode = null;
        _tail = nodeToRemove.previousNode;
      }  else { // removing a middle node
        nodeToRemove.previousNode.nextNode = nodeToRemove.nextNode;
        nodeToRemove.nextNode.previousNode = nodeToRemove.previousNode;
      }
    }
  }

  function _insert(value, index) {
    var newNode = _createNode(value);
    var target = _get(index);

    if( target === false || target.nextNode === null ) { //if list is empty, inserting beyond list, or end of list
      _add(value);
    } else if ( target.previousNode === null ) {
      newNode.nextNode = target;
      target.previousNode = newNode;
      _head = newNode;
    } else { //if inserting between nodes
      newNode.nextNode = target;
      newNode.previousNode = target.previousNode;
      target.previousNode.nextNode = newNode;
      target.previousNode = newNode;
    }

    /*
    if list is empty or beyond list (get returns false)
      usea add function to add node
    if at end
      use add function

    if at beginning
      set new next to head
      set head prev to new
      set head to new

    if between nodes
      set newNext to currentNode
      set newPrev to currentNode's previous
      set currentNode prev next to newNode
      set currentNode prev to newNode
      */
  }

  function _displayList() {
    var currentNode = _getHead();
    console.log("-----forward------");
    while( currentNode !== null ) {
      console.log("value: " + currentNode.value );
      currentNode = currentNode.nextNode;
    }
    console.log("-----backward-----");
    currentNode = _getTail();
    while( currentNode !== null ) {
      console.log("value: " + currentNode.value );
      currentNode = currentNode.previousNode;
    }
    console.log("----------");
  }

  return {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert,
    displayList : _displayList

  };
}

var linkedList = linkedListGenerator();
console.log("initialHead " + linkedList.getHead());
console.log("initialTail " + linkedList.getTail());

linkedList.add("first");
linkedList.add("second");
linkedList.add("third");
linkedList.add("fourth");

linkedList.displayList();

console.log("got :" + linkedList.get(-1).value);
console.log("got :" + linkedList.get(0).value);
console.log("got :" + linkedList.get(1).value);
console.log("got :" + linkedList.get(2).value);
console.log("got :" + linkedList.get(3).value);

/*console.log("\nremoving test\n");
linkedList.remove(0);
linkedList.remove(0);
linkedList.remove(0);
linkedList.remove(0);
*/

linkedList.insert("zero", 0);
linkedList.insert("-1", -1);
linkedList.insert("middle", 3);
linkedList.insert("five", 7);
linkedList.insert("4.5", 6);


linkedList.displayList();



console.log("Head " + linkedList.getHead().value);
console.log("Tail " + linkedList.getTail().value);