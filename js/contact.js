$(document).ready(function(){
  $("#clear").click(function(e){
    e.preventDefault();
    $("#details").trigger("reset");
  });

  $("#state").change(function(){
    let val=$('#state').val();
    if(val){
      $('#promocode').val(val+ " - PROMO");
    }
    else{
      $('#promocode').val("");
    }
  });

  $(".gender").click(function(){
    let val=$("input[type='radio']:checked").val();
    alert("Hello " + val);
  });

  $("#submit").click(function(e){
    e.preventDefault();
    let name=validateName();
    let email=validateEmail();
    let orgname=validateOrgName();
    if (name && email && orgname){
      alert("Successfully submitted");
      $("#details").trigger("reset");
      $("#update").text("");
    }
    else{
      $("#update").text("Please fill all the required fields below");
    }
  });
});

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

function validateOrgName(){
  let org=$("#orgName").val();
  if(org!=""){
    $('#orgNameError').text("");
    return true;
  }
  else{
    $('#orgNameError').text("Organisation Name is required");
    return false;
  }
};