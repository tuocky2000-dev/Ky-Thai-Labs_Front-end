let contentDiv= document.getElementById("content")

contentDiv.innerHTML = "<p>Hello from Javascript</p>"

let fruit = prompt("Would you like an apple or banana")

if (fruit=="apple"){
    contentDiv.innerText+= "You chose apple"
}else if (fruit=="banana"){
    contentDiv.innerText += "It's banana time!"
}else{
    contentDiv.innerText += `${fruit} it is.`
}

let countDiv= document.getElementById("output")
let message=""
for(let i=1; i<=5; i++){
    message += `<p>Counting ${i}...</p>`
}
countDiv.innerHTML = message
