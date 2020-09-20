const topLeft = document.getElementById("topLeft")
const topRight = document.getElementById("topRight")
const bottomLeft = document.getElementById("bottomLeft")
const bottomRight = document.getElementById("bottomRight")
const inputElts = document.querySelectorAll("input")

let prev


inputElts.forEach(input => {
    input.addEventListener("input", e => {
        const data = e.data

        if(!data) return

        if(isLetter(data)) {
            input.value = prev
            return
        }

        updateCss(input.id, input.value)

        prev = input.value 
    })
})

function updateCss(variable,value){
    const box = document.getElementById("box")

    box.style.setProperty(`--${variable}`, `${value}px`)
    updateBoxText()
}

function isLetter(character){
    return /[a-zA-Z]/.test(character)
}

window.onload = ()=> {
    inputElts.forEach(input => {
        input.value = ""
    })
}

function updateBoxText() {
    const cssBox = document.getElementById("css-box")

    cssBox.innerText = `
        border-radius: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`
}