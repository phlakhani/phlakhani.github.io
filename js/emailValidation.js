sb = document.getElementById('sb')

function controle(mail) {
  if (IsEmail(mail) == true) {
    sb.disabled = false;

  }
  else{

     alert('Please enter valid email address !')
  	 sb.disabled = true;
  }
}

function IsEmail(email) {
  var regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(email)) {
    return false;
  } else {
    return true;
  }
}
