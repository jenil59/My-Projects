window.onload = function() {


    //alert("i am in");
    var deadwhite = [];
    var deadblack = [];
    var w = window.innerWidth || 360;
    var h = window.innerHeight || 500;
    //alert("actual width and height is" + window.innerWidth + window.innerHeight + "width is :" + w + "height is " + h);

    var tsw = (w > h) ? h : w;
    var sw = (tsw - 16) / 8;
    var container = document.getElementById("container");
    for (var i = 0; i < 64; i++) {
        // alert(i);
        var square = document.createElement("div");
        square.classList.add("square");
        square.classList.add("s" + i);
        var cssblock = {
                height: sw + "px",
                width: sw + "px",
                top: 7 + (h - tsw) / 2 + sw * (Math.floor(i / 8)) + "px",
                left: 7 + (w - tsw) / 2 + sw * (Math.floor(i % 8)) + "px",
                fontSize: sw * 3 / 4 + "px",
                // padding: 10 + "px"


            }
            //  alert(cssblock.height)
        square.style.height = cssblock.height;
        square.style.width = cssblock.width;
        square.style.top = cssblock.top;
        square.style.left = cssblock.left;
        square.style.fontSize = cssblock.fontSize;
        //square.style.padding = cssblock.padding;
        container.appendChild(square);

    }

    var fonts = {
        'k': '&#9818;',
        'q': '&#9819;',
        'r': '&#9820',
        'b': '&#9821',
        'n': '&#9822',
        'p': '&#9823',
        'l': '&#9812;',
        'w': '&#9813;',
        't': '&#9814',
        'v': '&#9815',
        'm': '&#9816',
        'o': '&#9817',

    }
    var values = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 't', 'm', 'v', 'w', 'l', 'v', 'm', 't']
    var ck = false;
    var cr1 = false;
    var cr2 = false;
    var cl;
    var sqs = document.getElementsByClassName("square");
    for (var i = 0; i < 64; i++) {
        if (values[i] != 0) {
            sqs[i].innerHTML = fonts[values[i]];

        }
        sqs[i].addEventListener("click", check);
    }

    function upsquarecolor() {
        for (var n = 0; n < 64; n++) {
            /* if (i % 2 == 0) {
                 sqs[i].style.background = '#fff';
             } else {
                 sqs[i].style.background = '#838383';
             }*/
            if (Math.floor(n / 8) % 2 === 0) {
                if (n % 2 === 0) {
                    sqs[n].style.background = '#fff';
                } else {
                    sqs[n].style.background = '#838383';
                }
            } else {
                if (n % 2 === 1) {
                    sqs[n].style.background = '#fff';
                } else {
                    sqs[n].style.background = '#838383';
                }
            }
        }
    }

    upsquarecolor();

    var moveable = false;
    var moveTarget = "";
    var moveScopes = [];

    function checkBlack(n, values) {
        var target = values[n];
        var scopes = [];
        var x = n;

        if (target === "o") {
            x -= 8;
            if ("prnbkq".indexOf(values[x - 1]) >= 0 && x % 8 != 0) {
                scopes.push(x - 1);

            }
            if ("prnbkq".indexOf(values[x + 1]) >= 0 && x % 8 != 7) {
                scopes.push(x + 1);

            }
            //document.write("x=" + x + "values" + values[x]);
            if (x >= 0 && values[x] === 0) {

                // alert("hi");
                //alert("1 scope in checkbalck" + scopes)
                scopes.push(x);
                if (x >= 40) {
                    if (x - 8 >= 0 && values[x - 8] === 0) {
                        scopes.push(x - 8);
                        //alert(" 2 scope in checkbalck" + scopes)
                    }
                }
            }

        } else if (target === "t") {
            x = n;
            x -= 8;

            while (x >= 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }

                x -= 8;
            }

            x = n;
            x += 8;

            while (x < 64) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 8;

            }

            x = n;
            x++;
            while (x % 8 != 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }

                x++;

            }

            x = n;
            x--;
            while (x % 8 != 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }

                x--;
            }


        } else if (target === "m") {
            //alert("m")
            x = n;
            if (x % 8 > 1 && x % 8 < 6) {
                x -= 17;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x -= 15;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }

                x = n;
                x -= 10;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x -= 6;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 6;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 10;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 15;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 17;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
            } else {
                x = n;
                if (x % 8 <= 1) {
                    x = n;
                    x -= 15;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 6;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 10;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
                x = n;
                if (x % 8 === 1) {
                    x -= 17;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
                if (x % 8 >= 6) {
                    x = n;
                    x -= 17;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 10;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 6;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
                x = n;
                if (x % 8 === 6) {
                    x = n;
                    x -= 15;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
            }
            // alert(scopes);
        } else if (target === "v") {
            x = n;
            x -= 9;

            while (x >= 0 && x % 8 != 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 9;

            }
            x = n;
            x += 7;

            while (x < 64 && x % 8 != 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 7;

            }
            x = n;
            x += 9;

            while (x % 8 != 0 && x % 8 !== 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 9;

            }
            x = n;
            x -= 7;

            while (x % 8 !== 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 7;

            }


        } else if (target === "w") {
            x = n;
            x -= 8;
            while (x >= 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }

                x -= 8;

            }
            x = n;
            x += 8;
            while (x < 64) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }

                x += 8;

            }
            x = n;
            x++;
            while (x % 8 != 0 && x < 64) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    //sqs[x].style.background = "#a11";
                    break;
                } else {
                    break;
                }

                x += 1;

            }
            x = n;
            x--;
            while (x % 8 !== 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    // sqs[x].style.background = "#a11";
                    break;
                } else {
                    break;
                }

                x -= 1;

            }
            x = n;
            x -= 9;

            while (x >= 0 && x % 8 != 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 9;

            }
            x = n;
            x += 7;

            while (x < 64 && x % 8 != 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 7;

            }
            x = n;
            x += 9;

            while (x % 8 != 0 && x % 8 !== 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 9;

            }
            x = n;
            x -= 7;

            while (x % 8 !== 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("prnbqk".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 7;

            }



        } else if (target === "l") {
            x = n;
            x += 8;
            if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                scopes.push(x);

            }
            x = n;
            x -= 8;
            if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                scopes.push(x);

            }
            x = n;
            if (x % 8 > 0) {
                x -= 1;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x -= 9;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);

                }
                x = n;
                x += 7;
                if (("prnbqk".indexOf(values[x] >= 0 || values[x] === 0)) && x < 64 && x >= 0) {
                    scopes.push(x);

                }


            }
            x = n;
            if (x % 8 < 7) {
                x += 1;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 9;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);

                }
                x = n;
                x -= 7;
                if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);

                }


            }

            x = n;
            if (!ck) {
                cl = false;
                if (!cr2) {
                    if (values[x + 1] === 0 && values[x + 2] === 0 && values[x + 3] === "t") {
                        scopes.push(x + 2);
                        cl = true;
                    }

                }
                if (!cr1) {
                    if (values[x - 1] === 0 && values[x - 2] === 0 && values[x - 3] === 0 && values[x - 4] === "t") {
                        scopes.push(x - 2);
                        cl = true;
                    }

                }


            }
        }



        //  alert("scope in checkbalck" + scopes)

        if (scopes.length) return scopes;

    }

    function checkWhite(n, values) {
        var target = values[n];
        var scopes = [];
        var x = n;
        if (target === "p") {
            x += 8;
            if ("otmvlw".indexOf(values[x - 1]) >= 0 && x % 8 != 0) {
                scopes.push(x - 1);
            }
            if ("otmvlw".indexOf(values[x + 1]) >= 0 && x % 8 != 7) {
                scopes.push(x + 1);
            }
            if (x < 64 && values[x] === 0) {
                scopes.push(x);
                if (x <= 23) {
                    if (x + 8 >= 0 && values[x + 8] === 0) {
                        scopes.push(x + 8);
                    }
                }
            }
        } else if (target === "r") {
            x = n;
            x -= 8;
            while (x >= 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while (x < 64) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while (x % 8 != 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while (x % 8 != 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x--;
            }
        } else if (target === "n") {
            x = n;
            if (x % 8 > 1 && x % 8 < 6) {
                x -= 17;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x -= 15;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }

                x = n;
                x -= 10;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x -= 6;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 6;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 10;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 15;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 17;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
            } else {
                x = n;
                if (x % 8 <= 1) {
                    x = n;
                    x -= 15;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 6;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 10;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
                x = n;
                if (x % 8 === 1) {
                    x -= 17;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
                if (x % 8 >= 6) {
                    x = n;
                    x -= 17;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x -= 10;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 6;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 15;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
                x = n;
                if (x % 8 === 6) {
                    x = n;
                    x -= 15;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                    x = n;
                    x += 17;
                    if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                        scopes.push(x);
                    }
                }
            }
        } else if (target === "b") {
            x = n;
            x -= 9;
            while (x >= 0 && x % 8 !== 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while (x < 64 && x % 8 !== 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while (x % 8 != 0 && x % 8 !== 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while (x % 8 != 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 7;
            }
        } else if (target === "q") {
            x = n;
            x -= 8;
            while (x >= 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 8;
            }
            x = n;
            x += 8;
            while (x < 64) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 8;
            }
            x = n;
            x++;
            while (x % 8 != 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x++;
            }
            x = n;
            x--;
            while (x % 8 != 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x--;
            }
            x = n;
            x -= 9;
            while (x >= 0 && x % 8 !== 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 9;
            }
            x = n;
            x += 7;
            while (x < 64 && x % 8 !== 7) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 7;
            }
            x = n;
            x += 9;
            while (x % 8 != 0 && x % 8 !== 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x += 9;
            }
            x = n;
            x -= 7;
            while (x % 8 != 0) {
                if (values[x] === 0) {
                    scopes.push(x);
                } else if ("otmvlw".indexOf(values[x]) >= 0) {
                    scopes.push(x);
                    break;
                } else {
                    break;
                }
                x -= 7;
            }
        } else if (target === "k") {
            x = n;
            x += 8;
            if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                scopes.push(x);
            }
            x = n;
            x -= 8;
            if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                scopes.push(x);
            }
            x = n;
            if (x % 8 > 0) {
                x = n;
                x -= 1;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x -= 9;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }

                x = n;
                x += 7;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
            }
            x = n;
            if (x % 8 < 7) {
                x = n;
                x += 1;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x += 9;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
                x = n;
                x -= 7;
                if (("otmvlw".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                    scopes.push(x);
                }
            }
        }
        if (scopes.length) return scopes;
    }


    var myturn = true;

    function check() {
        //alert("i am in check")

        if (myturn) {

            var n = Number(this.classList[1].slice(1));
            // alert("classList: ' " + this.classList + " ' and a slice value is ,the thing is:" + n);
            var target = values[n];
            var scopes = checkBlack(n, values) || []; // first

            // console.log(scopes);
            var x = n;
            if (!moveable) {
                if (scopes.length > 0) {
                    moveable = true;
                    moveTarget = n;
                    moveScopes = scopes.join(",").split(",");
                    // alert("mscopes" + moveScopes)
                }
            } else {
                //alert("this is the else part of the thing");
                if (moveScopes.indexOf(String(n)) >= 0) {
                    var checkArr = [];
                    var saveKing = false;
                    for (var i = 0; i < 64; i++) {
                        checkArr[i] = values[i];

                    }
                    adddead(checkArr[n]);
                    checkArr[n] = checkArr[moveTarget];
                    checkArr[moveTarget] = 0;

                    for (var y = 0; y < 64; y++) {
                        if ("prnbqk".indexOf(checkArr[y]) >= 0) {
                            var checkScp = checkWhite(y, checkArr) || [];
                            for (var z = 0; z < checkScp.length; z++) {
                                if (checkArr[checkScp[z]] === "l") {
                                    if (!saveKing) {
                                        alert("save your king");
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
                            } else if (n == 58 && moveTarget === 60) {
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
                        // new kukru
                        if (values[n] === "o" && n < 8) {
                            values[n] = "w";
                        }

                        moveable = false;
                        scopes = [];
                        myturn = false;
                        setTimeout(chooseTurn, 1000);



                    }

                } else {
                    moveScopes = [];
                    moveable = false;

                }

            }

            upsquarecolor();
            for (var x = 0; x < 64; x++) {
                sqs[x].innerHTML = fonts[values[x]];
                if (values[x] === 0) {
                    sqs[x].innerHTML = "";
                }
            }
            //alert("scopes" + scopes)
            for (var x = 0; x < scopes.length; x++) {
                //  alert("hi");
                sqs[scopes[x]].style.background = "#f45";

            }
        }

        document.getElementsByClassName("deadwhite")[0].innerHTML = deadwhite;
        document.getElementsByClassName("deadblack")[0].innerHTML = deadblack;


    }

    var arr = [];

    function chooseTurn() {

        var approved = [];
        var actions = [];
        var effects = [];

        for (i = 0; i < 64; i++) {
            if ("prnbqk".indexOf(values[i]) >= 0) {
                var scopes = checkWhite(i, values) || [];
                for (j = 0; j < scopes.length; j++) {
                    var tmp = [];
                    for (var k = 0; k < 64; k++) {
                        tmp[k] = values[k];
                    }
                    var effect = 0;
                    var action = Math.random() * 3;

                    var actionValue = tmp[scopes[j]];

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

                    tmp[scopes[j]] = tmp[i];
                    tmp[i] = 0;
                    // in this portion we check the king and the other players of white such that we knows which will move first
                    for (var m = 0; m < 64; m++) {
                        if ("otmvlw".indexOf(values[m]) >= 0) {
                            var tmpScp = checkBlack(m, tmp) || [];
                            for (var z = 0; z < tmpScp.length; z++) {
                                var effectValue = tmp[tmpScp[z]];
                                if (effectValue === "k") {
                                    if (effect < 100) {
                                        effect = 100;
                                    }
                                } else if (effectValue === "q") {
                                    if (effect < 50) {
                                        effect = 50;
                                    }
                                } else if (effectValue === "b") {
                                    if (effect < 30) {
                                        effect = 30;
                                    }
                                } else if (effectValue === "n") {
                                    if (effect < 30) {
                                        effect = 30;
                                    }
                                } else if (effectValue === "r") {
                                    if (effect < 30) {
                                        effect = 30;
                                    }
                                } else if (effectValue === "p") {
                                    if (effect < 15) {
                                        effect = 15;
                                    }
                                }
                            }
                        }
                    }

                    actions.push(action);
                    // document.getElementsByClassName("action")[0].innerHTML = action + ",";
                    effects.push(effect);
                    //document.getElementsByClassName("effects")[0].innerHTML = effect + ",";
                    approved.push(i + "-" + scopes[j]);
                    // document.getElementsByClassName("approved")[0].innerHTML = i + "-" + scopes[j] + " " + ",";



                }
            }

            document.getElementsByClassName("action")[0].innerHTML = actions;


            document.getElementsByClassName("effects")[0].innerHTML = effects;
            document.getElementsByClassName("approved")[0].innerHTML = approved;



        }

        var bestEffect = Math.min.apply(null, effects);
        if (bestEffect >= 100) {
            alert("congratulation! you win");
            setTimeout(function() {

                values = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 't', 'm', 'v', 'w', 'l', 'v', 'm', 't'];
                // values = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'o', 'o', 'o', 'o', 'o', 'o', 'o', 'o', 't', 'm', 'v', 'w', 'l', 'v', 'm', 't'];
                dead = [];
            }, 100);
        }


        var tmpA = [];
        var tmpB = [];
        var tmpC = [];
        bestmove = "";

        for (var n = 0; n < effects.length; n++) {
            if (effects[n] === bestEffect) {
                tmpA.push(actions[n]);
                tmpB.push(approved[n]);
                tmpC.push(effects[n]);
            }
        }
        // alert("A" + tmpA + alert("b" + tmpB) + alert("c" + tmpC))
        // alert("max-tempA" + Math.max.apply(null, tmpA));
        bestmove = tmpB[tmpA.indexOf(Math.max.apply(null, tmpA))];
        // alert(tmpA.indexOf(Math.max.apply(null, tmpA)))
        // alert("the-bestmove" + bestmove);
        //alert("the best move iv " + bestmove)
        if (bestmove) {
            //place the final move
            adddead(values[Number(bestmove.split("-")[1])]);
            values[Number(bestmove.split("-")[1])] = values[Number(bestmove.split("-")[0])];
            values[Number(bestmove.split("-")[0])] = 0;

            if (values[Number(bestmove.split("-")[1])] === "p" && Number(bestmove.split("-")[1]) >= 56) {
                //dead.push();
                values[Number(bestmove.split("-")[1])] = "q";
            }
            //alert(bestmove.split("-"))
            sqs[bestmove.split("-")[1]].style.background = '#aaf';
            sqs[bestmove.split("-")[0]].style.background = '#aaf';

            for (var x = 0; x < 64; x++) {
                sqs[x].innerHTML = fonts[values[x]];
                if (values[x] === 0) {
                    sqs[x].innerHTML = "";
                }
            }
            myturn = true;
        }

        document.getElementsByClassName("deadwhite")[0].innerHTML = deadwhite;
        document.getElementsByClassName("deadblack")[0].innerHTML = deadblack;
    }

    function adddead(x) {
        if (x != 0) {

            if ("pnrbqk".indexOf(x) >= 0) {
                deadblack.push(fonts[x]);
            }
            if ("otmvlw".indexOf(x) >= 0) {
                deadwhite.push(fonts[x]);
            }
            //dead.push(x);
        }

    }

}