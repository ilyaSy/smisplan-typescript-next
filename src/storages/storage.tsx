import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { apiMiddleware } from "./middleware/apiMiddleware";
import reducers from "./reducers";
import { IChildren } from "../types/IChildren";

export const storage = createStore(reducers, composeWithDevTools(applyMiddleware(thunk, apiMiddleware)));

export const StorageProvider = ({ children }: IChildren) => {
  return (
    <Provider store={storage}>
      {children}
    </Provider>
  );
}
