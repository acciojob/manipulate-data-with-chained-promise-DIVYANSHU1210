//your JS code here. If required
function myPromise (numbers) {
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			const filteredArray = numbers.filter((num) => num%2 === 0);
			resolve(filteredArray)
		}, 1000);
	}).then((filteredArray) => {
		return new Promise((resolve, reject)=>{
			setTimeout(()=>{
				const resultArray = filteredArray.map((num)=> num*2);
				resolve(resultArray)
			}, 2000)
		});
	});
} 

const inputArray = [1, 2, 3, 4];

const outputDiv = document.getElementById("output");
outputDiv.innerText = `initial Array-> [${inputArray.join(', ')}]`;

myPromise(inputArray)
	.then(result=>outputDiv.innerText += `\nfiltered arrays - [${result.join(', ')}]`)
	.catch(err => console.log(err))



