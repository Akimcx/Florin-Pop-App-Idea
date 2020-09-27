const inputElts = document.querySelectorAll("input[type=number]")
const ranges = document.querySelectorAll("range")
const allBorder = document.getElementById("all-border")
const abNumber = document.getElementById("ab-number")



allBorder.addEventListener("input", e => {
    changeAll(e.target.value)
})

abNumber.addEventListener("input", e => {
    changeAll(e.target.value)
})




let prev

inputElts.forEach(input => {
    input.addEventListener("input", e => {
        changeOne(e.data, input)
        
    })
})

function changeOne(data, input) {
    if(!data) return

    if(isLetter(data)) {
        input.value = prev
        return
    }


    updateCss(input.id, input.value)

    prev = input.value 
}

function changeAll(value) {
    abNumber.value = value

    const box = document.getElementById("box")

    box.style.setProperty(`--topLeft`, `${value}px`)
    box.style.setProperty(`--topRight`, `${value}px`)
    box.style.setProperty(`--bottomLeft`, `${value}px`)
    box.style.setProperty(`--bottomRight`, `${value}px`)
}

function updateCss(variable,value){
    const box = document.getElementById("box")

    box.style.setProperty(`--${variable}`, `${value}px`)
}

function isLetter(character){
    return /[a-zA-Z]/.test(character)
}

window.onload = ()=> {
    inputElts.forEach(input => {
        input.value = ""
    })

    ranges.forEach(range => {
        range.value = 0
    })

    allBorder.value = 0
}