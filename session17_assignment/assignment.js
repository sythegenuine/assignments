let includeBlank = document.querySelector('.includeBlank')
let withoutBlank = document.querySelector('.withoutBlank')
let input = document.querySelector('input')
const body = document.querySelector('body')
const checkIncludeBlank = (text) => {
    return text.length
}
const checkWithoutBlank = (text) => {
    return text.replace(/(\s*)/g, "").length
}
const init = () => {
    const text = input.value
    includeBlank.innerText = checkIncludeBlank(text)
    withoutBlank.innerText = checkWithoutBlank(text)
}

input.addEventListener('keydown', (event) => {
    init();
})

