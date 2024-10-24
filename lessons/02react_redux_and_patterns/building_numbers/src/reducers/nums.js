
import { CHANGE_NUM } from "../actionTypes";

const INITIAL_STATE = { num1: 0, num2: 0 }; 

export default function nums(state = INITIAL_STATE, action) {
    switch (action.type) {
        case CHANGE_NUM:
            return { ...state, [action.num]: action.value }
        default:
            return state; 
    }
}