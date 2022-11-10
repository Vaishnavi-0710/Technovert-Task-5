function validateName(){
    let name=$("#name").val();
    if(name!=""){
        $('#nameError').text("");
        return true;
    }
    else{
        $('#nameError').text("Name is required");
        return false;
    }
};
  
function validateEmail(){
    let email=$("#email").val();
    const mail=/^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
    if(mail.test(email) || email==""){
        if(email==""){
            $('#emailError').text("Email is required");
            return false;
        }
        else{
            $('#emailError').text("");
            return true;
        }
    }
    else{
        $("#emailError").text("Enter Valid Email");
        return false;
    }
}
  
$(document).ready(function(){
    $("#submit").click(function(e){
        e.preventDefault();
        let name=validateName();
        let email=validateEmail();
        if (name && email){
            alert("Successfully submitted");
            $("#details").trigger("reset");
            $("#update").text("");
        }
        else{
            $("#update").text("Please fill all the required fields below");
        }
    });
});