const fetch = require('node-fetch');


document.querySelector(".setup").addEventListener("click", master); // simulate incoming signal


function master() {
  let lang = document.querySelector(".set-master").value; // stores master language to variable

  // triggers function
  sendData(lang);
}


// fetch example
function geo( data, language ) {
  console.log('data output:', data);
  console.log('master set to: ', language);
}

function sendData(lang) {
	return fetch('http://api.open-notify.org/iss-now.json') // API Link
		.then(res => res.json()) // fetch result to json
		.then(json => geo(json, lang)); // send json to another function
}
