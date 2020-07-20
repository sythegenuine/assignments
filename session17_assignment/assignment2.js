const divs = document.querySelectorAll('div')

const changeColor = (event) => {
    divs.forEach(div => {
        div.classList.remove("childSelected","parentSelected")
    });
        let selectedDiv = event.target
        let parentDiv = selectedDiv.parentNode

        selectedDiv.classList.add("childSelected")
        parentDiv.classList.add("parentSelected")
    
}

const init = () => {
    divs.forEach((div) => {
        div.addEventListener("click", changeColor)
    });
    console.log("am i working?")
}

init();

