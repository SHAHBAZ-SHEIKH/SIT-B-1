

const arr = ["Shahbaz","Faraz","Faiq","Owais"]

//For Each Loop

// arr.forEach((item,index,arr)=>{
//     console.log(`userName is ${item} and index is ${index}`)
    

// })


// const userFullname = arr.map(((item)=>{
//     return item + " Khan"
// }))


// const userProfession = [
//     {
//         name:"Shahbaz",age:23,profession:"Web Developer",
//         id:1
//     },
//         {

//             name:"Faraz",age:23,profession:"Web Developer",
//             id:1
//         },
        
//         {
//             name:"Faiq",age:18,profession:"Web Developer",
//             id:1
//         }
        
    
// ]


// const filterValue = userProfession.find((item)=>{
//     return item.id == 1
// })

// console.log("Filtervalue====>",filterValue)


//console.log(userFullname)




document.addEventListener("DOMContentLoaded",loadtask)

function loadtask(){

    const tasks = JSON.parse(localStorage.getItem("usertasks") )|| []

    console.log(tasks)
    tasks.forEach(item =>renderTask(item))
}


function saveItem(task){
    localStorage.setItem("usertasks",JSON.stringify(task))

}



const addTask = ()=>{

    const userInput = document.getElementById("userInput").value
    console.log(userInput)

    const tasks = JSON.parse(localStorage.getItem("usertasks") )|| []

    

    const taskValue = {id:Date.now(),task:userInput}

    renderTask(taskValue)

    tasks.push(taskValue)
    saveItem(tasks)

    
}


function renderTask(item){
    console.log(item)
    const li = document.createElement("li")

    li.innerHTML = `
    <span>${item.task}</span>
            <button onclick="editTask()">edit</button>
            <button onclick="deleteTask()">delete</button>
    `

    document.querySelector(".listItem").appendChild(li)
}