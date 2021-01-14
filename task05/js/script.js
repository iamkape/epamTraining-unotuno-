let strLine = document.querySelector('p');//getting a string for result
let arr = [];//create new array for pushing results.
////////add number func

	function calc(num){
		strLine.innerHTML+=num;
		console.log(num);
		}

	////////remove number func

	function del(){
		let b = document.querySelector('p').textContent;	
		strLine.innerHTML=b.slice(0,-1);
		}

	////////func to calculate

	function equal(){
		let c = document.querySelector('p').textContent;
			if (!c=='') {		//if result string is empty...
				strLine.innerHTML=eval(c);
				}
			else {
				arr.push("empty result");
			  alert("i can't count the emptiness");//...this.
				}
 			arr.push(eval(c));//add results.
 		}

 			
 	 ////////////function of adding priorities of calculations

 	function showPriority(){
    let b = document.querySelectorAll(".brackets");
		let a = document.querySelector("#priority");
		console.log(a);
			for(i=0; i<b.length; i++){
				if (a.checked) {
							b[i].classList.remove ("brackets");
					}
				}
			}


		/////////// adds a dot to the calculator line

	function addDot (dot){
			strLine.textContent+=dot;
		}

		////////// adds a brackets to the calculator line

	function addBracket(bra){
				strLine.textContent+=bra;
				}

		/////////// function of adding dot 

	function showDot(){
				let dtl = document.querySelector('.dotHtml');
  			let point = document.querySelector('#dot');
  			if(point.checked){
  				dtl.style.display='grid';
  			}
  		else{
  				dtl.style.display='none';
  			}
			}
		////// function to show array with results

					let btn = document.querySelector('button').onclick=()=>{
					alert(`Результаты Ваших вычеслений: ${arr} `);
				}
				

 	