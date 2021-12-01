function chooseTurn() {
    var approved = [];
    var actions = [];
    var effects = [];


    for (var n = 0; n < 64; n++) {
        if ("prnbqk".indexOf(values[n]) >= 0) {
            var scopes = checkWhite(n, values) || [];
            for (var x = 0; x < scopes.length; x++) {
                var tmp = [] //values.join(',').split(',');
                for (var xx = 0; xx < 64; xx++) {
                    tmp[xx] = values[xx]
                }
                var effect = 0;
                var action = Math.random() * 3;
                //Action value
                var actionValue = tmp[scopes[x]];
                if (actionValue === "l") {
                    action = 100 + Math.random() * 3;
                } else if (actionValue === "w") {
                    action = 50 + Math.random() * 3;
                } else if (actionValue === "v") {
                    action = 30 + Math.random() * 3;
                } else if (actionValue === "m") {
                    action = 30 + Math.random() * 3;
                } else if (actionValue === "t") {
                    action = 30 + Math.random() * 3;
                } else if (actionValue === "o") {
                    action = 15 + Math.random() * 3;
                }

                //Effect value
                tmp[scopes[x]] = tmp[n];
                tmp[n] = 0;
                for (var y = 0; y < 64; y++) {
                    if ("otmvlw".indexOf(values[y]) >= 0) {
                        var tmpScp = checkBlack(y, tmp) || [];
                        for (var z = 0; z < tmpScp.length; z++) {
                            var effectValue = tmp[tmpScp[z]];
                            if (effectValue == "k") {
                                if (effect < 100) {
                                    effect = 100;
                                }
                            } else if (effectValue == "q") {
                                if (effect < 50) {
                                    effect = 50;
                                }
                            } else if (effectValue == "b") {
                                if (effect < 30) {
                                    effect = 30;
                                }
                            } else if (effectValue == "n") {
                                if (effect < 30) {
                                    effect = 30;
                                }
                            } else if (effectValue == "r") {
                                if (effect < 30) {
                                    effect = 30;
                                }
                            } else if (effectValue == "p") {
                                if (effect < 15) {
                                    effect = 15;
                                }
                            }
                        }
                    }
                }




                actions.push(action);
                effects.push(effect);
                approved.push(n + "-" + scopes[x]);
            }
        }
    }

    //alert(actions);

    var bestEffect = Math.min.apply(null, effects);
    //alert(bestEffect);
    if (bestEffect >= 100) {
        alert("You Win");
        setTimeout(function() {
            values = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 't', 'm', 'v', 'w', 'l', 'v', 'm', 't'];
        }, 100);
    }

    var tmpA = [];
    var tmpB = [];
    var tmpC = [];
    var bestMove = "";

    for (var n = 0; n < effects.length; n++) {
        if (effects[n] === bestEffect) {
            tmpA.push(actions[n]);
            tmpB.push(approved[n]);
            tmpC.push(effects[n]);
        }
    }
    bestMove = tmpB[tmpA.indexOf(Math.max.apply(null, tmpA))];
    //    alert(effects)
    //alert(bestMove);


    if (bestMove) {
        values[Number(bestMove.split("-")[1])] = values[Number(bestMove.split("-")[0])];
        values[Number(bestMove.split("-")[0])] = 0;
        if (values[Number(bestMove.split("-")[1])] === "p" && Number(bestMove.split("-")[1]) >= 56) {
            values[Number(bestMove.split("-")[1])] = "q";
        }

        sqs[bestMove.split("-")[1]].style.background = '#aaf';
        sqs[bestMove.split("-")[0]].style.background = '#aaf';

        for (var x = 0; x < 64; x++) {
            //sqs[x].style.background = "#afa"//classList.add("scope");
            sqs[x].innerHTML = fonts[values[x]];
            if (values[x] === 0) {
                sqs[x].innerHTML = "";
            }
        }
        myTurn = true;
    } else {
        //alert('You Win');
    }
}