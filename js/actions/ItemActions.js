import AppDispatcher from "../dispatcher/AppDispatcher";
import ItemConstants from "../constants/ItemConstants";
import ItemAPI from "../apis/ItemAPI";

class ItemActions {
  addItem(item) {
    AppDispatcher.dispatch({
      actionType: ItemConstants.ADD_ITEM,
      item: item
    });
    ItemAPI.addItem(item);
  }
}

export default new ItemActions;
