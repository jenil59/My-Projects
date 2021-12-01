function check() {
    if (myTurn) {
        var n = Number(this.classList[1].slice(1));
        var target = values[n];

        var scopes = checkBlack(n, values) || [];

        var x = n;

        if (!moveable) {
            if (scopes.length > 0) {
                moveable = true;
                moveTarget = n;
                moveScopes = scopes.join(",").split(",");
            } else {

            }
        } else {
            if (moveScopes.indexOf(String(n)) >= 0) {
                var checkArr = [];
                var saveKing = false;
                for (var z = 0; z < 64; z++) {
                    checkArr[z] = values[z];
                }

                checkArr[n] = checkArr[moveTarget];
                checkArr[moveTarget] = 0;

                for (var y = 0; y < 64; y++) {
                    if ("prnbkq".indexOf(checkArr[y]) >= 0) {
                        var checkScp = checkWhite(y, checkArr) || [];
                        for (var z = 0; z < checkScp.length; z++) {
                            if (checkArr[checkScp[z]] === 'l') {
                                if (!saveKing) {
                                    alert('Save Your King');
                                    saveKing = true;
                                }
                            }
                        }
                    }
                }

                if (!saveKing) {
                    values[n] = values[moveTarget];
                    values[moveTarget] = 0;
                    if (cl) {
                        if (n === 62 && moveTarget === 60) {
                            values[63] = 0;
                            values[61] = "t";
                        } else if (n === 58 && moveTarget === 60) {
                            values[59] = "t";
                            values[56] = 0;
                        }
                    }
                    if (moveTarget === 60) {
                        ck = true;
                    } else if (moveTarget === 63) {
                        cr2 = true;
                    } else if (moveTarget === 56) {
                        cr1 = true;
                    }
                    if (values[n] === "o" && n < 8) {
                        values[n] = "w";
                    }
                    moveable = false;
                    scopes = [];
                    myTurn = false;
                    setTimeout(chooseTurn, 1000);
                }
            } else {
                moveScopes = [];
                moveable = false;
            }
        }

        updateSquarecolor();

        for (var x = 0; x < 64; x++) {
            sqs[x].innerHTML = fonts[values[x]];
            if (values[x] === 0) {
                sqs[x].innerHTML = "";
            }
        }

        for (var x = 0; x < scopes.length; x++) {
            sqs[scopes[x]].style.background = "#f15"; //.classList.add("scope");
            //    alert(scopes)
        }
    }
}