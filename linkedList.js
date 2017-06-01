/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator(){
//private Var
  var _listHead = null;
  var _listTail = null;

  //private Methods
  function _createNode(value) {
    return {
      value : value,
      next : null
    };
  }

  function findNode(index) {
    var position = 0;
    var searchResult = {
      currentNode : null,
      previousNode : null,
      found : false    };

    if( _getHead() !== null ) {  //is list empty?
      searchResult.currentNode = _getHead();
      if( position === index ) { //loop doesnt check if first position is the right one
        searchResult.found = true;
      }

      while( position < index ) {  //loop until index is found, or list runs out
        searchResult.previousNode = searchResult.currentNode;
        searchResult.currentNode = searchResult.currentNode.next;
        position++;

        if( index == position ) {  //mark if index is found
          searchResult.found = true;
        }
        if( searchResult.currentNode.next === null ) { //if list runs out
          break;
        }
      }
    }

    return searchResult;
  }

  //public var


  //public methods
  function _displayList() {
    var currentNode = _listHead;
    while( currentNode !== null ) {
      console.log(currentNode.value);
      currentNode = currentNode.next;
    }
  }

  function _getHead() {
    return _listHead;
  }

  function _getTail() {
    return _listTail;
  }

  function _add(value) {
    var newNode = _createNode(value);
    if( _getHead() === null ) {
      _listHead = newNode;
    } else {
      _getTail().next = newNode;
    }
      _listTail = newNode;

    return newNode;
  }

  function _remove(index) {

    var searchResult = findNode(index);
    if( searchResult.found === true ) {
      if( searchResult.previousNode === null ) {
        _listHead = searchResult.currentNode.next;
      } else if( searchResult.currentNode.next === null ) {
        _listTail = searchResult.previousNode;
        searchResult.previousNode.next = null;
      } else {
        searchResult.previousNode.next = searchResult.currentNode.next;
      }

    } else {
      return false;
    }
  }

  function _get(index) {
    var firstNode = _listHead;
    function findNode(number, currentNode) {
      if( number === 0 ) {
        return currentNode;
      } else if( currentNode.next === null ) {
        //not in index
        return false;
      } else {
        //contnuing on
        return findNode( --number, currentNode.next );
      }
    }
    return findNode(index, firstNode);
    /*var searchResult = findNode(index);
    if( searchResult.found === true ) {
      return searchResult.currentNode;
    } else {
      return false;
    }*/
  }

  function _insert(value, index) {
    var newNode = _createNode(value);
    var searchResult = findNode(index);

    if( _getHead() !== null && searchResult.found === true ) {
      if( searchResult.previousNode === null ) {
        newNode.next = _getHead();
        _listHead = newNode;
      } else {
        searchResult.previousNode.next = newNode;
        newNode.next = searchResult.currentNode;

      }
    } else { //if list is empty
      return false;
    }
  }

  return {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    remove : _remove,
    get : _get,
    insert : _insert
  };
}
