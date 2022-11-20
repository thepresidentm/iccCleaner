let input = document.getElementById("input");
let output = document.getElementById("output");
let button = document.getElementById("button");
let clean = document.getElementById("clean");

button.addEventListener("click", () => {
    let out = new Array();
    text = input.innerText.split("\n");
    console.log(text);
    text.forEach(element => {
        if(Number.isNaN(parseInt(element)))
            out.push(element.replaceAll(" ", "").replaceAll("␣", " "));
    });
    output.innerText = out.join("\n");
})

clean.addEventListener("click", () => {
    input.innerText = "Introduce tu codigo";
    output.innerText = "El codigo limpio";
});