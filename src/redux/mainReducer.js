import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2163554Reducer from '../features/SignIn2163554/redux/reducers'
import SignIn2163525Reducer from '../features/SignIn2163525/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2163554: SignIn2163554Reducer,
SignIn2163525: SignIn2163525Reducer,

});