import AppDispatcher from "../dispatcher/AppDispatcher";
import ItemConstants from "../constants/ItemConstants";
import assign from "object-assign";
import { EventEmitter } from "events";
import ItemActions from "../actions/ItemActions";


var CHANGE_EVENT = 'change';
var _store = {
  item:  {
  }
};


function setItem(obj) {
  assign(_store.item, obj)
}


const ItemStore = assign({}, EventEmitter.prototype, {


  getItem: function() {
    return _store.item;
  },


  emitChange: function() {
    console.log('emit change');
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

// Register callback to handle all updates
AppDispatcher.register(function(action) {

  switch(action.actionType) {

    case ItemConstants.ADD_ITEM:
      ItemStore.emitChange();
      break;

    case ItemConstants.API_ADD_ITEM:
      ItemStore.emitChange();
      break;

    default:
      // no op
  }

});

export default ItemStore;
