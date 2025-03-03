

const signupHandler = ()=>{

    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;
    var userConfirmPassword = document.getElementById("cpassword").value;

    var getUser  = JSON.parse(localStorage.getItem("users")) || [];

    if(!userName || !userEmail || !userPassword || !userConfirmPassword){
        alert("Please all Fields  are required");
        return;

    }
    if(userPassword.length <6){
        alert("Password should be atleast 6 characters");
        return;
    }

    if(userPassword !== userConfirmPassword){
        alert("Password do not match");
        return;
    }
    


    console.log(getUser)

    var usersValue = {
        userName: userName,
        userEmail: userEmail,
        userPassword: userPassword
    }


        getUser.push(usersValue)

    localStorage.setItem("users",JSON.stringify(getUser));




    console.log(userName, userEmail, userPassword);


    console.log("signupHandler");
}



const loginHandler = ()=>{
    //console.log("loginHandler");

    const userEmail = document.getElementById("loginemail").value;
    const userPassword = document.getElementById("loginpassword").value;


    console.log(userEmail, userPassword);
    let regex = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/"

    

    var isValid = false

    // if(regex.test(userEmail)){
    //     console.log("Email is valid")
    //     return
    // }

    // else{
    //     alert("Invalid Email")
    //     return
    // }


    // if(userEmail.includes("@")){
    //     console.log("Email is valid")
    //     return
    // }
    // else{
    //     alert("Invalid Email")
    //     return
    // }

    if(!userEmail || !userPassword  ){
        alert("Please fill all fields")
        return
    }




    const getUser = localStorage.getItem("users") || [];
    const parseUser = JSON.parse(getUser)

    console.log(parseUser)

    for(var i=0 ; i<=parseUser.length -1; i++){
        if(parseUser[i].userEmail === userEmail && parseUser[i].userPassword === userPassword){
            isValid = true
            break
        }
        
    }

   if(isValid){
    //    alert("Login Successfull")
       Swal.fire({
        title: "Success!",
        text: `Login Successfully ${parseUser[i].userName}!`,
        icon: "success"
      });

      setTimeout(() => {
          window.location.href = "./home.html"
          
      },3000)
      return
   }

   else{
    Swal.fire({
        title: "OOps!",
        text: "Invalid Email or Password!",
        icon: "error"
      });
//          alert("Invalid Email or Password")
 }
    
    
}