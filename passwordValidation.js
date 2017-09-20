var pass1
var pass2
function getPass(){
  pass1 = window.prompt("enter your password")
  pass2 = window.prompt("enter your password again")
}
function validatePass(){
	if (pass1 != pass2){
		window.alert("error! passwords do not match")
		getPass()
	}
	else if (pass1.length > 8 || pass2.length > 8 ){
		window.alert("error passwors are more than 8 characters")
		getPass()
	}
	else
		window.alert("succes youve entered a valid password")
}
