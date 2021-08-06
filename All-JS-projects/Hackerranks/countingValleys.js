/* function countingValleys(steps, path) {
  // Write your code here
  let arr = path.split("")
  let valley=0, mountain=0, sea=0, up=0, down=0;
  for(let i=0;i<=steps;i++){
    if(arr[i]==="U"){
      up++;
    }else if(arr[i]==="D"){
      down++;
    }
    if(up===0 && down===0){
      sea++;
    }
		else if(up>0 && down===0){
      valley++;
    }
		else if(up===0 && down>0){
      mountain++;
    }
  }return valley;
}

console.log(countingValleys(12,'DDUUDDUDUUUD')); */
function countingValleys(steps, path) {
	let arr = path.split('')
	let valley=0, mountain=0, sea=0, step=0;
	for (let i = 0; i < steps; i++) {
		step = arr[i]
		if (step === 'D'){
			if (sea === 0) {
				valley++;
			}
			sea--; // decrease sea because of the valley
		}

		else if (step === 'U') {
			if (sea === 0) {
				mountain++;
			}
			sea++; // increase sea because of the mountain
		}
	}
	return valley;
}
console.log(countingValleys(12,'DDUUDDUDUUUD'));