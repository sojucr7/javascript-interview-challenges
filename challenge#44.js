
function getHour(seconds){
	return Math.floor(seconds/3600)
}

function getMinutes(seconds){
	return Math.floor((seconds/60 ) %60)
}

function getSeconds(seconds){
	return Math.floor(seconds % 60)
}

function format(number){
	if(number.toString().length<2) return `0${number}`
	return number
}

function convertSecondsToHMS(seconds){
	let hour= format(getHour(seconds))
	let min= format(getMinutes(seconds))
	let sec= format(getSeconds(seconds))
	return `${hour}:${min}:${sec}`
}

let seconds=0
setInterval(()=>{
	console.log(convertSecondsToHMS(seconds++))
},1000)

convertSecondsToHMS(7600)
