import { combineReducers } from 'redux';
import burgerReducer from "./BurgerReducer.js";

const rootReducer = combineReducers({
    burgerReducer,
});
export default rootReducer;