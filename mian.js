let inp = document.querySelector(".continer .gen");
let span = document.querySelector(".continer .get");

span.onclick = function() {
    generate();
}

function generate() {
    let chars = "abcdefghjklmnopqrstexyzABCDEFGHJKLMONOPQRSRTXYZ1234567890!@#$%^&*()_+{}/";
    let passlength = 8;
    let result = ''

    for (let i = 0; i < passlength; i++) {
        const random = Math.floor(Math.random() * chars.length);
        result += chars.slice(random, random + 1);
    }

    inp.value = result;
}