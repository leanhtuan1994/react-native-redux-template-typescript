import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./rootSaga";
import rootReducer from "./rootReducer";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ["setting"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware = [
  ...getDefaultMiddleware({ thunk: false, serializableCheck: false }),
  sagaMiddleware,
];

const store = configureStore({
  reducer: persistedReducer,
  middleware,
});

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;

export default store;
