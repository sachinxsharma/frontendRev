const buttonEl = document.getElementById("roll-button");
const diceEl = document.getElementById("dice");
const historyEl = document.getElementById("roll-history");

function rollDice(){
    const rollResult = Math.floor(Math.random() * 6) + 1; 
    const diceFace = getDiceFace(rollResult);
    diceEl.innerHTML = diceFace;
    historyList.push(rollResult)
    updateRollHistory();
}
function updateRollHistory(){
    historyEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li"); // adding an element from here 
        listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(historyList[i])}</span>`;
        historyEl.appendChild(listItem);
    }
}

let historyList = [];

function getDiceFace(rollResult){
    switch(rollResult){
            case 1:
                return "&#9856;";
                case 2:
                    return "&#9857;";
                    case 3:
                        return "&#9858;";
                        case 4:
                            return "&#9859;";
                            case 5:
                                return "&#9860;";
                                case 6:
                                    return "&#9861;";
                                    default:
                                        return "&#9856;"; // Default to 1 if something goes wrong
    }

}

buttonEl.addEventListener("click", ()=>{
    diceEl.classList.add("roll-animation");
   setTimeout(() => {
       diceEl.classList.remove("roll-animation");
       rollDice()
   },1000)
})