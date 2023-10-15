function validateForm() {

    var name = document. forms["myForm"]["username"]. value;
     var email = document.forms["myForm"]["email"].value;
     var password = document.forms["myForm"]["password"].value;
    
     if (username == "") {

        alert("Username must be filled out");
        return false;
     }
        if (email == "") {
        
        alert("Email must be filled out");
        
        return false;
        }   
        
        
        
        if (!validateEmail(email)) { 
            alert("Invalid email address");
             return false;
        }
    }
        function validateEmail (email) {

            var re = /\S+@\S+\.\S+/; return re.test (email);
        }   
            