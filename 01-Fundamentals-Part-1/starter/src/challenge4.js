const tip = (amount) => 50 <= amount && amount <= 300 ? amount * 0.15 : amount * 0.2;

const tipMsg = (amount) => {
    let tipAmount = tip(amount);
    return `The bill was ${amount}, the tip was ${tipAmount}, and the total value ${amount + tipAmount}`;
};

module.exports = {
    tip,
    tipMsg
};