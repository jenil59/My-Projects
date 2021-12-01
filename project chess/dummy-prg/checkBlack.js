function checkBlack(n, values) {
    var target = values[n];
    var scopes = [];
    var x = n;

    if (target === "o") {
        x -= 8;
        if ("prnbkq".indexOf(values[x - 1]) >= 0 && x % 8 != 0) {
            scopes.push(x - 1);
        } //*
        if ("prnbkq".indexOf(values[x + 1]) >= 0 && x % 8 != 7) {
            scopes.push(x + 1);
        } //*

        if (x >= 0 && values[x] === 0) {
            scopes.push(x);
            if (x >= 40) {
                if (x - 8 >= 0 && values[x - 8] === 0) {
                    scopes.push(x - 8);
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
    } else if (target === "v") {
        x = n;
        x -= 9;
        while (x >= 0 && x % 8 !== 7) {
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
        while (x < 64 && x % 8 !== 7) {
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
        while (x % 8 != 0) {
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
        x = n;
        x -= 9;
        while (x >= 0 && x % 8 !== 7) {
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
        while (x < 64 && x % 8 !== 7) {
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
        while (x % 8 != 0) {
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
            x = n;
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
            if (("prnbqk".indexOf(values[x]) >= 0 || values[x] === 0) && x < 64 && x >= 0) {
                scopes.push(x);
            }
        }
        x = n;
        if (x % 8 < 7) {
            x = n;
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
                //    cl = false;
                if (values[n + 1] === 0 && values[n + 2] === 0 && values[n + 3] === "t") {
                    scopes.push(x + 2);
                    cl = true;
                }
            }
            if (!cr1) {
                //    cl = false;
                if (values[n - 1] === 0 && values[n - 2] === 0 && values[n - 3] === 0 && values[n - 4] === "t") {
                    scopes.push(x - 2);
                    cl = true;
                }
            }
        }
    }
    if (scopes.length) return scopes;

}