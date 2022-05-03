exports.avgScore = (score) => {
    let sum = score.reduce(
        (acc, v) => acc + v,
        0
    );

    return sum / score.length;
}

exports.winner = (team1, team2) => {
    let team1_score = this.avgScore(team1.score);
    let team2_score = this.avgScore(team2.score);

    let winners = [];
    if (team1_score >= 100 || team2_score >= 100) {
        if (team1_score > team2_score) {
            winners = [team1];
        } else if (team2_score > team1_score) {
            winners = [team2];
        } else {
            winners = [team1, team2];
        }
    }

    return winners
}