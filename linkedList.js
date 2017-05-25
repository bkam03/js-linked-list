/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
  //private var
  var list = {};
  var _listHead = null;
  var _listTail = null;


  //private methods
  function _setListHead(newHeadNode) {
    _listHead = newHeadNode;

  }
  function _setListTail(newTailNode) {
    _listTail = newTailNode;
  }


  //publ var



  //publ methods
  function getHead() {
    return _listHead;
  }

  function getTail() {
    return _listTail;
  }

  function add(value) {
    var newNode = {
      value : value,
      next : null
    };
    if( _listHead === null ) {// if list is empty, make this the head
      _setListHead(newNode);
    } else {              //otherwise append to tail node
      _listTail.next = newNode;
    }
    _setListTail(newNode);

    return newNode;
  }

  function remove( index ) {
    displayList();
    var position = 0;
    var currentNode = _listHead;
    var previousNode = null;
    if( currentNode === null ) { //for empty lists
      currentNode = false;
    } else {
      while( position < index ) {  //search until index is found
        if( currentNode.next === null ) { // return false if index is larger than list
          currentNode = false;
          break;
        }
        position++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
    }
    //at this point currentNode is false or has the target node
    //if has target Node
    if( currentNode !== false ) {
      if( previousNode === null ) {
        _setListHead( currentNode.next );
      } else if( currentNode.next === null ) {
        _setListTail(previousNode);
        previousNode.next = null;
      } else {
        previousNode.next = currentNode.next;
      }

      //currentNode = previousNode;


      //point previous node's next to the target Node's next
    } else {
      return false;
    }
    displayList();
    //return currentNode;
  }

  function get(index) {
    var position = 0;
    var currentNode = _listHead;
    if( currentNode === null ) { //for empty lists
      console.log( "getError list is empty" );
      currentNode = false;
    } else {
      while( position < index ) {  //search until index is found
        if( currentNode.next === null ) { // return false if index is larger than list
          console.log("getError end of list");
          currentNode = false;
          break;
        }
        position++;
        currentNode = currentNode.next;
      }
    }
    console.log("iam getting" + currentNode.value );
    return currentNode;  //return node, or false
  }

  function insert() {

  }

  function displayList() {
    var currentNode = _listHead;
    while( currentNode.next != null ) {
      console.log( currentNode.value );
      currentNode = currentNode.next;
    }
    console.log("@@@@@");
  }


  return {
    getHead,
    getTail,
    add,
    remove,
    get,
    insert
  };
}