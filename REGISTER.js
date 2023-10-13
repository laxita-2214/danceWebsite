function validation(){
	var fname = document.getElementById("fname").value;
	var mname = document.getElementById("mname").value;
	var lname = document.getElementById("lname").value;
	var dob = document.getElementById("dob").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var errormes = document.getElementById("error_message");
	var text;

	error_mes.style.padding="10px";

	if(fname.length <1){
		text="Enter First Name";
		error_mes.innerHTML = text;
		return false;
	}

	if(fname.length <1){
		text="Enter Middle Name";
		error_mes.innerHTML = text;
		return false;
	}

	if(lname.length <1){
		text="Enter Last Name";
		error_mes.innerHTML = text;
		return false;
	}

	if(isNaN(phone)|| phone.length !=10){
		text="Enter A Valid Phone Number";
		error_mes.innerHTML = text;
		return false;
	}

	if(email.indexOf("@")== -1 || email.length <6){
		text="Enter A Valid Email";
		error_mes.innerHTML = text;
		return false;
	}

	
	alert("	REGISTRATION SUCCESSFULL")
	return false;

}