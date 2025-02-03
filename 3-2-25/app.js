

// var heading =  document.querySelector('h2')

// console.log(heading.parentElement.parentElement.parentElement)


// var allChlidren = result.childNodes
// console.log(allChlidren)
//  console.log(result)

//  var firstChild = result.firstChild
//  console.log(firstChild)
//  console.log(result.lastChild)

//  console.log(document)


// function removeElement(event){
//     var result = document.querySelector('.result')
//     console.log(event.target.parentElement.childNodes[1])
//     event.target.parentElement.childNodes[1].remove()

    
// }


// var first = document.querySelector('#first')

// var second = first.nextSibling.previousSibling.childNodes[3].nextSibling.nextSibling

// console.log(second)

// var result = document.querySelector('.result')
// var idValue = result.getAttribute('id')
// console.log(idValue)

// var link = document.getElementById("link")

// var hrefValue = link.nextElementSibling
// hrefValue.setAttribute("class","result")
// console.log(hrefValue)
// console.log(link.getAttribute("href"))

 var cricketCount = [
    {
        name:"virat",
        designation:"batsman",
        imgUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG276J99WMZdlsHfn17ZukWcAHXgSATWaU_Q&s",
        description:"Its is a Good Player"
    },
    {
        name:"Ab de Villiers",
        designation:"batsman",
        imgUrl :"https://wallpapersok.com/images/thumbnail/ab-de-villiers-playing-with-bat-e0nzrug3cdwjf4lp.webp",
        description:"Its is a Good Player"
    },
    {
        name:"Maxwell",
        designation:"Allrounder",
        imgUrl :"https://institute.careerguide.com/wp-content/uploads/2024/04/Maxwell.webp",
        description:"Its is a Good Player"
    },
    {
        name:"Fakhar Zaman",
        designation:"Batsman",
        imgUrl :"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOQ_8r01VUkPJOTAZZRI3Po8irx-XcSrcxrg&s",
        description:"Its is a Good Player"
    },

 ]

 console.log(cricketCount.length)

 var count = 0

 function previousHandler(){
    if(count <=0){
        count = cricketCount.length -1
        console.log("If wala Count ho",count)
        var heading = document.getElementById("heading")
        var designation = document.getElementById("designation")
        var desc = document.getElementById("desc")
        var img = document.getElementById("img")

        heading.innerHTML = cricketCount[count].name
        designation.innerHTML = cricketCount[count].designation
        desc.innerHTML = cricketCount[count].description
        img.src = cricketCount[count].imgUrl

        

    }
    else{
        count --;
        console.log("else wala Count ho",count)
        var heading = document.getElementById("heading")
        var designation = document.getElementById("designation")
        var desc = document.getElementById("desc")
        var img = document.getElementById("img")

        heading.innerHTML = cricketCount[count].name
        designation.innerHTML = cricketCount[count].designation
        desc.innerHTML = cricketCount[count].description
        img.src = cricketCount[count].imgUrl
    }
    
 }



 function nextHandler(){
    console.log("chal raha ho mai")

    if(count == cricketCount.length -1){
        count = 0

        var heading = document.getElementById("heading")
        var designation = document.getElementById("designation")
        var desc = document.getElementById("desc")
        var img = document.getElementById("img")

        heading.innerHTML = cricketCount[count].name
        designation.innerHTML = cricketCount[count].designation
        desc.innerHTML = cricketCount[count].description
        img.src = cricketCount[count].imgUrl

    }

    else{
        count ++;
        var heading = document.getElementById("heading")
        var designation = document.getElementById("designation")
        var desc = document.getElementById("desc")
        var img = document.getElementById("img")

        heading.innerHTML = cricketCount[count].name
        designation.innerHTML = cricketCount[count].designation
        desc.innerHTML = cricketCount[count].description
        img.src = cricketCount[count].imgUrl


    }
 }