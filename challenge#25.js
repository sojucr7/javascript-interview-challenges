
const user10 = { name: 'Piyush Agarwal!', logMessage() { console.log(this.name);  } }; 

setTimeout(user10.logMessage, 1000) //undefined