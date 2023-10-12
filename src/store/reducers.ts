import { combineReducers } from "redux";

import Graph from "./graph/reducer";

const rootReducer = combineReducers({
  Graph,
});

export default rootReducer;
