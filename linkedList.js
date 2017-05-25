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
    }  //returns false, or found node

    if( currentNode !== false ) { //if the node exists
      if( previousNode === null ) {
        _setListHead( currentNode.next );
      } else if( currentNode.next === null ) {
        _setListTail(previousNode);
        previousNode.next = null;
      } else {
        previousNode.next = currentNode.next;
      }
    } else {
      return false;
    }

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
    //console.log("iam getting" + currentNode.value );
    return currentNode;  //return node, or false
  }

  function insert(value, index) {
    console.log("value " + value + " index " + index);
    displayList();
    var newNode = {
      value : value,
      next : null
    };

    var position = 0;
    var currentNode = _listHead;
    var previousNode = null;

    //if list is empty set head and tail to it
    if( _listHead === null ) {
      _setListHead(newNode);
      _setListTail(newNode);
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
      if( previousNode === null ) {
        console.log("head");
        newNode.next = _listHead;
        _listHead = newNode;
      } else if( index === position ) {

        if( currentNode.next === null ) {
          console.log("tail");
          previousNode.next = newNode;
          newNode.next = currentNode;
        } else {
          console.log("middle");
          console.log("currentNode", currentNode);
          newNode.next = previousNode.next;
          previousNode.next = newNode;
        }
      }

    displayList();
  }

  function displayList() {
    var currentNode = _listHead;
    while( currentNode.next !== null ) {
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