let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById("button");
let clean = document.getElementById("clean");

button.addEventListener("click", () => {
    let out = new Array();
    text = input.value.split("\n");
    text.forEach(element => {
        if(Number.isNaN(parseInt(element)))
            out.push(element.replaceAll(" ", "").replaceAll("␣", " "));
    });
    output.innerHTML = out;
})

clean.addEventListener("click", () => {
    input.value = "";
    output.innerHTML = "El codigo limpio";
});