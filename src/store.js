import {createStore} from "redux";
import rootReducer from "./redux/reducer/rootReducer.js";

const store = createStore(rootReducer);

export default store;