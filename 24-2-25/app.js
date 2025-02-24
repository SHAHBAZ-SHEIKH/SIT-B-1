

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