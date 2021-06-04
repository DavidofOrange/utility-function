function gottaGetThatMoney(amount){
    let result = ""
    for(let i = 0; i < amount; i++){
        result += "💸";
    }
    return result;
}

module.exports = { gottaGetThatMoney };