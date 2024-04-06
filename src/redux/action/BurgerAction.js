import {ADD_BREADMID} from "../types/BurgerType.js";

const changeBreadMidAction = (name,change) => {
    return {
        type: ADD_BREADMID,
        name,change
    }
}

export default changeBreadMidAction;