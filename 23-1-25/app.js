// function abc(){
//     var name = "Shahbaz"
//     console.log(name)
//     if(true){
//         let userName = "Faraz"
//         console.log(userName)
//     }
// }

// var myFunction = abc()

// console.log(myFunction)


// function faraz(){
//     console.log("Good Morning Faraz")
// }


// function shahbaz(eduction,cb){
//     console.log("Good Morning Shahbaz",eduction)
//     cb()

// }

// shahbaz("BSCS",faraz)



// function greet(name,cb){
//     console.log("Good Morning",name)
//     cb(name)
// }

// function bob(userName){
//     var name = "John"
//     console.log(`Good Morning ${name} and ${userName}`)
// }

// greet("Faraz",bob)

// const userName = function (){
//     console.log("Good Morning Faraz")
// }


// userName()


// function abc(){
//     console.log("Outer Function")
//     return function(){
//         console.log("Inner Inner Function")
//     }
// }

// var myFunction = abc()

// console.log(myFunction)


// const userName = () =>{
//     console.log("Good Morning Faraz")
// }
// userName()

// const CalculateNum = () =>{
//     console.log("Good Morning Faraz")
// }

// console.log(CalculateNum())



// function abc(userName,xyz){
//     console.log("I am Not Free ")
//     xyz(userName)
// }

// function xyz(user){
//     console.log("If you Free Than Call me",user)

// }

// abc("Faraz",xyz)


// function xyz(userName){
//     console.log("Good Morning Faraz")
// }



// xyz("Raif")

function xyz(){
    console.log("App 5 Second ke badd Chalo gy")
}


// setTimeout(()=>{
//     xyz()

// },2000)

let count = 0

const myInterval = setInterval(()=>{
    count++
    console.log("The Count is",count)
    if(count === 5){
        clearInterval(myInterval)
        console.log("End")
    }

    
},2000)




