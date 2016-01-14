const fetch = require('node-fetch');


document.querySelector(".setup").addEventListener("click", master); // simulate incoming signal


function master() {
  let lang = document.querySelector(".set-master").value; // stores master language to variable

  // triggers function
  sendData(lang)
		.then(function(json) {
      console.log( 'master: ', lang );
		});
}


// fetch example
function geo( data ) {
  console.log('data output:', data);
}

function sendData() {
	return fetch('http://api.open-notify.org/iss-now.json') // API Link
		.then(res => res.json()) // fetch result to json
		.then(json => geo(json)); // send json to another function
}
