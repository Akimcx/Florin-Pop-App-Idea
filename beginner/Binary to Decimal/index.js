const binary = document.getElementById("binary")
const decimal = document.getElementById("decimal")
const binaryValue = ["1","0"]

let prev

binary.addEventListener("input", e => {
    const data = e.data || "0"

    /*
    * When you type a letter, binary.value 
    * return an empty string so, i use prev 
    * to get it's previous value
    */
    if(isLetter(data)) binary.value = prev
    const value = binary.value

    if(binaryValue.indexOf(data) === -1){
        binary.value = value.replace(data, "")
        alert("Only 1's and 0's can be inserted")
    }
    decimal.value = Number.parseInt(value,2)
    prev = binary.value
})

function isLetter(character){
    return /[a-zA-Z]/.test(character)
}

window.onload = ()=> {
    binary.value = ""
    decimal.value = ""
}