//updates the html to show which switch the user has used
function keyRange(){
    let userKey = document.getElementById("keyRange").value
    document.getElementById("keyRangeOutput").innerHTML =  userKey + " Switches"
    return userKey
}
const alphabet = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"]
const shiftedAlphabet = []
//creates the alphabet used for the cipher shift
function newAlphabet(){
    let userKey = document.getElementById("keyRange").value
    for(let i = 0; i < alphabet.length; i++){
        let shifted = i + Number(userKey)
        if (shifted > 25){
            shifted = shifted - 26
        } else if (shifted < 0){
            shifted = shifted + 26
        }
        shiftedAlphabet.push(alphabet[shifted])
    }
}
//detects whether message needs to be encoded or decoded
function submitMsg(){
    let encode = document.getElementById("encode1")
    let decode = document.getElementById("decode1")
    if (encode.checked){
        encodeMsg()
    } else if (decode.checked){
        decodeMsg()
    }
}
//encodes the message using the new shifted alphabet and shows it in the output
function encodeMsg(){
    newAlphabet()
    let userMessage = document.getElementById("messageToBeCodedTextArea").value
    let correctMessage = userMessage.toLowerCase()
    let outputMessage = []
    for(let i = 0; i < correctMessage.length; i++){
        let ind = alphabet.indexOf(correctMessage[i])
        if (ind < 0){
            outputMessage.push(correctMessage[i])
        } else outputMessage.push(shiftedAlphabet[ind])
    }
    document.getElementById("outputTextArea").value = outputMessage.join("")
    shiftedAlphabet.length = 0
}
//decodes the message using the shifted alphabet and shows it in the output
function decodeMsg(){
    newAlphabet()
    let userMessage = document.getElementById("messageToBeCodedTextArea").value
    let correctMessage = userMessage.toLowerCase()
    let outputMessage = []
    for(let i = 0; i < correctMessage.length; i++){
        let ind = shiftedAlphabet.indexOf(correctMessage[i])
        if (ind < 0){
            outputMessage.push(correctMessage[i])
        } else outputMessage.push(alphabet[ind])
    }
    document.getElementById("outputTextArea").value = outputMessage.join("")
    shiftedAlphabet.length = 0
}