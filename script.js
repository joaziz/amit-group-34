let mainDiv = document.getElementById("mainDiv");

let divs = []

let styles = {background: "red", width: "200px", height: "200px",};

for (let i = 0; i < 3; i++) {
    divs.push(document.createElement("div"))
    mainDiv.appendChild(divs[i])
}

for (let key in styles) {
    divs[0].style[key] = styles[key]
    divs[1].style[key] = styles[key]
}

divs[0].onclick = () => alert("welcome")
divs[1].onmouseover = () => divs[2].innerText = "mouse over";
divs[1].onmouseleave = () => divs[2].innerText = ""

