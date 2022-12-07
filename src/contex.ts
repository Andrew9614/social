import React from "react";
import {Store} from "redux"
import { RootState, store } from "./redux/reduxStore";
import { DispatchAction } from "./redux/type";

export const StoreContext= React.createContext(store.getState())
