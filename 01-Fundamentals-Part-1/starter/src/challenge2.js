const { bmi } = require('./challenge1');

exports.format_bmis = (p1, p2) => {
    let p1_bmi = bmi(p1.mass, p1.height);
    let p2_bmi = bmi(p2.mass, p2.height);
    
    let lower_name;
    let higher_name;
    if (p1_bmi > p2_bmi) {
        lower_name = p2.name;
        higher_name = p1.name;
    } else {
        lower_name = p1.name;
        higher_name = p2.name;
    }

    return `${higher_name}'s BMI is higher or equal to ${lower_name}'s.`;
}