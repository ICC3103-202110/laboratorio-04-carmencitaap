function view(counter) {
    return counter;
}

function update(msg,counter){
    if (msg === "+") return counter + 1;
    else if (msg === "-" ) return counter - 1;
    else return counter;
}

