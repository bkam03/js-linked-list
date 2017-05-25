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

  function addValue(value) {
    var newNode = {
      value : value,
      nextNode : null
    };
    if( _listHead === null ) {// if list is empty, make this the head
      _setListHead(newNode);
    } else {              //otherwise append to tail node
      _listTail.nextNode = newNode;
    }
    _setListTail(newNode);

  }

  return {
    getHead,
    addValue
  };
}