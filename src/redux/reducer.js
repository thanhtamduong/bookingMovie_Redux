import { combineReducers } from "redux";
import DatVeReducer from "./reducer/DatVeReducer";
const rootReducer = combineReducers({
  //quản lý các child reducer
  //key: value
  DatVeReducer,
});

export { rootReducer };
