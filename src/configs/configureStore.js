import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import rootReducer from "../reducers";
import { fetchPlacesEpic, fetchMarkersEpic } from "../epics";

const rootEpic = combineEpics(fetchPlacesEpic, fetchMarkersEpic);
const epicMiddleware = createEpicMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: [epicMiddleware],
});
epicMiddleware.run(rootEpic);

export default store;
