function gottaGetThatMoney(amount){
    let result = ""
    if(isNaN(amount)){
        return "Sorry, not a number"
    }
    for(let i = 0; i < amount; i++){
        result += "💸";
    }
    return result;
}

module.exports = { gottaGetThatMoney };