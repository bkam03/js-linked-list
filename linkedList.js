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

  function remove() {

  }

  function get(index) {
    var position = 0;
    var currentNode = _listHead;
    if( currentNode === null ) {
      currentNode = false;
    } else {
      while( position < index ) {
        if( currentNode.next === null ) {
          currentNode = false;
          break;
        }
        position++;
        currentNode = currentNode.next;
      }
    }

    return currentNode;
  }

  function insert() {

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