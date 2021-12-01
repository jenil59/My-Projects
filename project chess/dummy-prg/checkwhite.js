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