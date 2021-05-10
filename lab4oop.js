const prompt = require("prompt-sync")();

function view(counter) {
    return counter;
}

function update(msg,counter){
    if (msg === "+") return counter + 1;
    else if (msg === "-" ) return counter - 1;
    else return counter;
}

function app(counter) {
    while (true) {
    const currentView = view(counter);
    console.clear()
    console.log("(+)   (-)")
    console.log("Count: " + currentView);
    let msg = prompt("What do you want to do?: ");
    counter = update(msg,counter);
    }
}
app(0)