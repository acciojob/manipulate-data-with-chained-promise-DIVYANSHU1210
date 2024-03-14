//your JS code here. If required
function myPromise (numbers) {
	new Promise((resolve, reject)=>{
	setTimeOut(()=>{
		const filteredArray = numbers.filter((num) => num%2 === 0);
		resolve(filteredArray)
	}, 2000)).then((filteredArray) => {
		new Promise((resolve, reject)=>{
			const resultArray = numbers.map((num)=> num*2);
			resolve(resultArray)
		}, 1000)
	})
} 

const inputArray = [1, 2, 3, 4];

const outputDiv = document.getElementById("output");

const myPromise(inputArray)
	.then(result=>outputDiv.innerText = `${result.join(', ')}`)
	.catch(err => console.log(err))



