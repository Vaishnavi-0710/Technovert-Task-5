document.getElementById("clear").addEventListener("click", (e)=>{
  e.preventDefault();
  let element=document.getElementsByTagName("input");
  for(let i= 0;i<element.length;i++){
    element[i].value="";
  }
});

function promo(){
  let val=document.getElementById("state").value;
  if(val){
    document.getElementById("promocode").value= val+" - PROMO";
  }
  else{
    document.getElementById("promocode").value="";
  }
}

function genderAlert(msg){
  alert("Hello "+ msg);
}

function validateName(){
  let name=document.getElementById('name').value;
  if(name!=""){
    document.getElementById('nameError').innerHTML="";
    return true;
  }
  else{
    document.getElementById('nameError').innerHTML="Name is required";
    return(false);
  }
}

function validateEmail(){
  let email=document.getElementById("email").value;
  const validMail=/^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9.]{2,}$/;
  if(email.match(validMail) || email==""){
    if(email==""){
      document.getElementById('emailError').innerHTML="Email is required";
      return false;
    }
    else{
      document.getElementById("emailError").innerHTML="";
      return true;
    }
  }
  else{
    document.getElementById("emailError").innerHTML="Enter valid Email";
    return false;
  }
}

function validateOrgName(){
  let org=document.getElementById("orgName").value;
  if(org!=""){
    document.getElementById("orgNameError").innerHTML="";
    return true;
  }
  else{
    document.getElementById("orgNameError").innerHTML="Organisation Name is required";
    return false;
  }
}

document.getElementById("submit").addEventListener("click", (e)=>{
  e.preventDefault();
  let name=validateName();
  let email=validateEmail();
  let orgname=validateOrgName();
  if (name && email && orgname){
    alert("Successfully submitted");
    document.getElementById("details").reset();
    document.getElementById("update").innerHTML="";
  }
  else{
    document.getElementById("update").innerHTML="Please fill all the required fileds below";
  }
});