function validateEmail(email) {
   var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   return emailRegex.test(email); // Assuming email has a text attribute
}

function isEmail(email) {	
	var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;	

    return regex.test(String(email).toLowerCase());
}

console.log(validateEmail("banlygmail.com"));
console.log(validateEmail("123@ourearth.com"));
console.log(validateEmail("myemail@gmailcom"));

console.log(isEmail("banlygmail.com"));
console.log(isEmail("12343@ouearth.com"));
console.log(isEmail("myemail@gmailcom"));