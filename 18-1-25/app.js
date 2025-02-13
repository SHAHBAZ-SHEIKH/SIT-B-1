function changeColor(){
    var main = document.getElementById("main")
    var color = document.getElementById("color")
    var myColor = ""

    var generateColor = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    for(var i=0; i<6; i++){
        var randomColor = Math.floor(Math.random() * generateColor.length);
        myColor = myColor +  generateColor[randomColor]
        
        console.log("randomColor",randomColor)
        console.log("myColor",myColor)
        
    }
    color.innerText = `#${myColor}`

        main.style.backgroundColor=`#${myColor}`
}




