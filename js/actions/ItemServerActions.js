import AppDispatcher from "../dispatcher/AppDispatcher";
import ItemConstants from "../constants/ItemConstants";

class ItemServerActions {

  receiveAddItemResult(result) {
    console.log(result);
    AppDispatcher.dispatch({
      actionType: ItemConstants.API_ADD_ITEM,
      result: result
    });
  }

}

export default new ItemServerActions;
