
    // Add event listener to the signup button
    document.getElementById("SignupBtn").addEventListener('click', function(){
        let userName = document.getElementById("username").value;
        let email = document.getElementById("useremail").value;
        let password = document.getElementById("userpwd").value;
        let cmPassword = document.getElementById("confirmPassword").value;

        localStorage.setItem("name", userName)
        localStorage.setItem("email", email)
        localStorage.setItem("password", password)

            if(!userName || !email || !password || !cmPassword){
                alert("fill all the details");
                return;
            }
            else if(password !== cmPassword){
                alert("Passwords do not match");
                return;
            }
            else{
                alert(`${userName} Registered Successfully`);

            }
            
         // Hide the signup form
        document.getElementById("signupContainer").style.display = "none";

         // Show the login form
        document.getElementById("loginContainer").style.display = "block";
     

    });

       
    

    function loginBtn()
    {

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let storedEmail=localStorage.getItem("email")
        let storedPassword=localStorage.getItem("password")


        if (!email || !password ) {
            alert("Please enter both email and password");
            return;
        }

        else if(email !== storedEmail || password !== storedPassword){
            alert("email or password is incorrect");
            return;
        }
        else{
            window.location.href="./home.html";        

        }
    };



    document.getElementById('showLogin').addEventListener("click", function(){
        document.getElementById('signupContainer').style.display='none';
        document.getElementById('loginContainer').style.display='block';
    });

    document.getElementById('showSignup').addEventListener("click", function(){
        document.getElementById('signupContainer').style.display="block";
        document.getElementById('loginContainer').style.display='none';
    });

