// function faraz(){
//     for(var i = 0; i < 10; i++){
//         document.write("Faraz<br>");
//         return "faiq"
//     }
// }

// console.log(faraz()) // Faiq // Calling the function


function setNumber(num){
    console.log(num);
    var result = document.getElementById("result")
    var lastValue = result.value.slice(result.value.length -1)

    var arr = ["+", "-", "*", "/","%"]

    if(arr.indexOf(lastValue) != -1 && arr.indexOf(num) !=-1){
        result.value = result.value.slice(0,-1) + num
    }
    else{
        result.value += num
    }

    

}


function getResult(){
    var result = document.getElementById("result")

    result.value = eval(result.value)
}

// var str = "5+5+"
// var last = str[str.length -1 ]

// //console.log("Last", last)
// var newInput = "8"
// var arr = ["+", "-", "*", "/"]


// //console.log(arr.indexOf(""))

// if(arr.indexOf(last) != -1){
//     str = str.slice(0,-1) + newInput
// }



// console.log("Last", str)


function clearResult(){
    var result = document.getElementById("result")
    result.value = ""
}



function delItem(){
    var result = document.getElementById("result")
    result.value = result.value.slice(0,-1)
}


function checkPalindrome(){
    var userInput = document.getElementById("userInput")
    var checkValue = document.getElementById("checkValue")
    var userValue = userInput.value
    console.log("userValue", userValue)

    var reverseWord = ""

for(var i=userValue.length -1; i>=0; i--){
    reverseWord += userValue[i]


}


if(userValue == reverseWord){
    console.log("Palindrome", userInput)
    checkValue.innerHTML ="Its is Palindrome"
}
else{
    console.log("Not Palindrome")
    checkValue.innerHTML ="Its is not Palindrome"
}

console.log("Reverse Word", reverseWord)

}
