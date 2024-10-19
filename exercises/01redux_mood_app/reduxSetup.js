
const INITIAL_STATE = {mood : "¯\_(ツ)_/¯"}

function moodReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "ALL GOOD":
            return {...state, mood: "(^_^)" }
        case "HAPPY":
            return {...state, mood: "(*^‿^*)" }
        case "AWW MAN":
            return {...state, mood: "(>_<)" }
        case "UGH":
            return { ...state, mood: "(¬_¬)" }
        case "RESET":
            return {...state, mood: "¯\_(ツ)_/¯"}
        default:
            return state; 
    }
}
const store = Redux.createStore(moodReducer); 