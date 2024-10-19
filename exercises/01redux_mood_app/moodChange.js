const h1 = document.querySelector("h1"); 
const allGood = document.querySelector("#allGood"); 
const happy = document.querySelector("#happy");
const awwMan = document.querySelector("#awwMan");
const ugh = document.querySelector("#ugh");
const reset = document.querySelector("#reset"); 

store.subscribe(() => {
    const state = store.getState(); 
    h1.innerText = state.mood; 
})

allGood.addEventListener("click", () => {
    store.dispatch({ type: "ALL GOOD" });
})

happy.addEventListener("click", () => {
    store.dispatch({ type: "HAPPY" });
})

awwMan.addEventListener("click", () => {
    store.dispatch({ type: "AWW MAN" });
})

ugh.addEventListener("click", () => {
    store.dispatch({ type: "UGH" });
})

reset.addEventListener("click", () => {
    store.dispatch({ type: "RESET" });
})