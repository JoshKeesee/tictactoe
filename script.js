var color = "red";
var plays = ["", "", "", "", "", "", "", "", ""];
var turns = 0;
var numplayers;
function nextTurn(className) {
    if (plays[JSON.parse(className[3]) - 1] === "") {
        plays[JSON.parse(className[3]) - 1] = color;
        document.querySelector(".box" + className[3]).style.background = color;
    } else {
        return;
    }
    if (plays[0] === color) {
        if (plays[1] === color && plays[2] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[3] === color && plays[6] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[4] === color && plays[8] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[1] === color) {
        if (plays[0] === color && plays[2] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[4] === color && plays[7] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[2] === color) {
        if (plays[0] === color && plays[1] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[5] === color && plays[8] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[4] === color && plays[6] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[3] === color) {
        if (plays[0] === color && plays[6] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[4] === color && plays[5] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[4] === color) {
        if (plays[0] === color && plays[8] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[1] === color && plays[7] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[2] === color && plays[6] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[3] === color && plays[5] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[5] === color) {
        if (plays[2] === color && plays[8] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[4] === color && plays[3] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[6] === color) {
        if (plays[0] === color && plays[3] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[7] === color && plays[8] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[4] === color && plays[2] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[7] === color) {
        if (plays[4] === color && plays[1] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[6] === color && plays[8] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    if (plays[8] === color) {
        if (plays[7] === color && plays[6] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[5] === color && plays[2] === color) {
            setTimeout(win, 500);
            return;
        } else if (plays[4] === color && plays[0] === color) {
            setTimeout(win, 500);
            return;
        }
    }
    var element = document.getElementsByClassName("box");
    if (color === "red") {
        color = "blue";
    } else {
        color = "red";
    }
    for (let i = 0; i < element.length; i++) {
        element[i].style.border = "4px solid " + color;
    }
    for (let i = 0; i < 9; i++) {
        if (plays[i] === "red") {
            element[i].style.border = "4px solid red";
        } else if (plays[i] === "blue") {
            element[i].style.border = "4px solid blue";
        }
    }
    turns++;
    if (turns >= 9) {
        color = "tie";
        setTimeout(win, 1000);
    }
    if (numplayers === 1) {
        if (color === "blue") {
            cpuPlay();
        }
    }
}
function cpuPlay() {
    if (plays[0] === "blue") {
        if (plays[1] === "blue") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[3] === "blue") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[4] === "blue") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[2] === "blue") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[8] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        } else if (plays[6] === "blue") {
            if (plays[3] === "") { 
                nextTurn("box4");
                return;
            }
        }
    }
    if (plays[1] === "blue") {
        if (plays[0] === "blue") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[2] === "blue") {
            if (plays[5] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[4] === "blue") {
            if (plays[7] === "") { 
                nextTurn("box8");
                return;
            }
        } else if (plays[7] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[2] === "blue") {
        if (plays[1] === "blue") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[5] === "blue") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[4] === "blue") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        }  else if (plays[0] === "blue") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[8] === "blue") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[6] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[3] === "blue") {
        if (plays[0] === "blue") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[4] === "blue") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[6] === "blue") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[5] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[4] === "blue") {
        if (plays[0] === "blue") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[1] === "blue") {
            if (plays[7] === "") { 
                nextTurn("box8");
                return;
            }
        } else if (plays[2] === "blue") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[3] === "blue") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[5] === "blue") {
            if (plays[5] === "") { 
                nextTurn("box4");
                return;
            }
        } else if (plays[6] === "blue") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[7] === "blue") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[8] === "blue") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        }
    }
    if (plays[5] === "blue") {
        if (plays[4] === "blue") {
            if (plays[3] === "") { 
                nextTurn("box4");
                return;
            }
        } else if (plays[2] === "blue") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[8] === "blue") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[3] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[6] === "blue") {
        if (plays[3] === "blue") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[7] === "blue") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[4] === "blue") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[0] === "blue") {
            if (plays[3] === "") { 
                nextTurn("box4");
                return;
            }
        } else if (plays[8] === "blue") {
            if (plays[7] === "") { 
                nextTurn("box8");
                return;
            }
        } else if (plays[2] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[7] === "blue") {
        if (plays[6] === "blue") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[8] === "blue") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[4] === "blue") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[1] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[8] === "blue") {
        if (plays[7] === "blue") {
            if (plays[6] === "") {    
                nextTurn("box7");
                return;
            }
        } else if (plays[5] === "blue") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[4] === "blue") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[6] === "blue") {
            if (plays[7] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[0] === "blue") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        } else if (plays[2] === "blue") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        }
    }
    if (plays[0] === "red") {
        if (plays[1] === "red") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[3] === "red") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[4] === "red") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[2] === "red") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[8] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        } else if (plays[6] === "red") {
            if (plays[3] === "") { 
                nextTurn("box4");
                return;
            }
        }
    }
    if (plays[1] === "red") {
        if (plays[0] === "red") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[2] === "red") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[4] === "red") {
            if (plays[7] === "") { 
                nextTurn("box8");
                return;
            }
        } else if (plays[7] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[2] === "red") {
        if (plays[1] === "red") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[5] === "red") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[4] === "red") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        }  else if (plays[0] === "red") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[8] === "red") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[6] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[3] === "red") {
        if (plays[0] === "red") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[4] === "red") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[6] === "red") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[5] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[4] === "red") {
        if (plays[0] === "red") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[1] === "red") {
            if (plays[7] === "") { 
                nextTurn("box8");
                return;
            }
        } else if (plays[2] === "red") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[3] === "red") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[5] === "red") {
            if (plays[5] === "") { 
                nextTurn("box4");
                return;
            }
        } else if (plays[6] === "red") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[7] === "red") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[8] === "red") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        }
    }
    if (plays[5] === "red") {
        if (plays[4] === "red") {
            if (plays[3] === "") { 
                nextTurn("box4");
                return;
            }
        } else if (plays[2] === "red") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[8] === "red") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[3] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[6] === "red") {
        if (plays[3] === "red") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[7] === "red") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[4] === "red") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[0] === "red") {
            if (plays[3] === "") { 
                nextTurn("box4");
                return;
            }
        } else if (plays[8] === "red") {
            if (plays[7] === "") { 
                nextTurn("box8");
                return;
            }
        } else if (plays[2] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[7] === "red") {
        if (plays[6] === "red") {
            if (plays[8] === "") { 
                nextTurn("box9");
                return;
            }
        } else if (plays[8] === "red") {
            if (plays[6] === "") { 
                nextTurn("box7");
                return;
            }
        } else if (plays[4] === "red") {
            if (plays[1] === "") { 
                nextTurn("box2");
                return;
            }
        } else if (plays[1] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        }
    }
    if (plays[8] === "red") {
        if (plays[7] === "red") {
            if (plays[6] === "") {    
                nextTurn("box7");
                return;
            }
        } else if (plays[5] === "red") {
            if (plays[2] === "") { 
                nextTurn("box3");
                return;
            }
        } else if (plays[4] === "red") {
            if (plays[0] === "") { 
                nextTurn("box1");
                return;
            }
        } else if (plays[6] === "red") {
            if (plays[7] === "") { 
                nextTurn("box6");
                return;
            }
        } else if (plays[0] === "red") {
            if (plays[4] === "") { 
                nextTurn("box5");
                return;
            }
        } else if (plays[2] === "red") {
            if (plays[5] === "") { 
                nextTurn("box6");
                return;
            }
        }
    }
    pickRandom();
    nextTurn("box" + JSON.stringify(random));
}
function pickRandom() {
    random = Math.floor(Math.random() * 9) + 1;
    if (plays[random - 1] === "") {
        return;
    } else {
        pickRandom();
    }
}
function win() {
    var element = document.getElementsByClassName("box");
    for (let i = 0; i < element.length; i++) {
        element[i].style.transform = "scale(0)";
        element[i].style.zIndex = "-1";
        element[i].disabled = true;
        element[i].style.cursor = "default";
    }
    plays = ["", "", "", "", "", "", "", "", ""];
    if (color === "tie") {
        document.querySelector(".winner").innerHTML = "Tie <div class='color'></div>";
    } else {
        document.querySelector(".winner").innerHTML = "Winner: <div class='color'></div>";
        document.querySelector(".color").innerHTML = color;
        document.querySelector(".color").style.color = color;
        document.querySelector(".color").style.opacity = "1";
    }
    document.querySelector(".winner").style.opacity = "1";
    document.querySelector(".start").style.opacity = "1";
    document.querySelector(".start").onclick = function() { start() };
    document.querySelector(".start").style.cursor = "pointer";
    document.querySelector(".numplayers").style.opacity = "1";
    document.querySelector(".numplayers").style.zIndex = "3";
    document.querySelector(".select").disabled = false; 
    turns = 0;
}
function start() {
    if (document.querySelector(".select").selectedIndex === 0) {
        numplayers = 1;
    } else {
        numplayers = 2;
    }
    color = "red";
    document.querySelector(".numplayers").style.opacity = "0";
    document.querySelector(".numplayers").style.zIndex = "-1";
    document.querySelector(".select").disabled = true; 
    document.querySelector(".start").onclick = "";  
    document.querySelector(".color").style.opacity = "0";
    document.querySelector(".winner").style.opacity = "0";
    document.querySelector(".start").style.zIndex = "-1";
    document.querySelector(".start").style.opacity = "0";
    var element = document.getElementsByClassName("box");
    for (let i = 0; i < element.length; i++) {
        element[i].style.transform = "";
        element[i].style.background = "white";
        element[i].style.border = "4px solid red";
        element[i].style.opacity = "1";
        element[i].style.zIndex = "1";
        element[i].disabled = false;
        element[i].style.cursor = "pointer";
    }
}