import {ADD_BREADMID} from "../types/BurgerType.js";

const burgerState = {
    burger: {salad: 1, cheese: 1, beef: 1},
    menu: {salad: 10, cheese: 20, beef: 55},
    total: 85
}

const burgerReducer = (state = burgerState, action) => {
    switch (action.type) {
        case ADD_BREADMID:{
            let {name, change} = action;
            let burgerUpdate = {...state.burger};
            if (change) {
                burgerUpdate[name]++;
            } else if (burgerUpdate[name] > 1) {
                burgerUpdate[name]--;
            } else {
                alert('Số lượng tối thiểu là 1\n Ronaldo Number One');
            }

            state.burger = burgerUpdate;
            state.total = burgerUpdate.salad * state.menu.salad + burgerUpdate.cheese * state.menu.cheese + burgerUpdate.beef * state.menu.beef;
            return {...state};
        }

        default:
            return {...state};
    }
}

export default burgerReducer;