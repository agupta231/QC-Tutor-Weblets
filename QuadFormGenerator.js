<p>Quadratic difficulty (1 - 3)</p>

<input type="radio" name="difficulty" value="1" checked>Level 1
<input type="radio" name="difficulty" value="2" >Level 2
<input type="radio" name="difficulty" value="2" >Level 3

<br><br>

<button onclick="generateProblem()">Generate Quadratic</button><br>
<p id="quadratic"></p><br>

<input type="number" id="factor" style="width: 30px">(<input type="number" id="x0c" style="width: 30px">x + <input type="number" id="x0m" style="width: 30px">)(<input type="number" id="x1c" style="width: 30px">x + <input type="number" id="x1m" style="width: 30px">)

<br><br>

<button onclick="checkSolution()">Check solution</button>
<button onclick="giveUp()">Give Up</button>

<p id="answer"></p>

<script>
	var factor_m = null;
	var roots = new Array(2);

	function generateProblem() {
		document.getElementById("answer").innerHTML = " ";

		var radios = document.getElementsByName("difficulty");
    
	    for(var i = 0; i < radios.length; i++) {
	    	if(radios[i].checked) {
	      	var level = i + 1;
	      }
	    }
    
	    var data_raw = createQuadratic(level);
	    var formattedQuadratic = data_raw[0];
	    var solution = data_raw[1];
	    
	    factor_m = solution[0]
	    roots[0] = solution[1] * solution[2];
	    roots[1] = solution[3] * solution[4];
	    
	    document.getElementById("quadratic").innerHTML = formattedQuadratic;
	}

	function checkSolution() {
 		factor_m_local = _userInput(document.getElementById("factor").value);	
 		x0_m_local = _userInput(document.getElementById("x0m").value);
 		x0_c_local = _userInput(document.getElementById("x0c").value);
 		x1_m_local = _userInput(document.getElementById("x1m").value);
 		x1_c_local = _userInput(document.getElementById("x1c").value);

    	if(factor_m == factor_m_local) {
			userSolution0 = x0_m_local * x0_c_local;
			userSolution1 = x1_m_local * x1_c_local;

 			if(roots.indexOf(userSolution0) != -1 && roots.indexOf(userSolution1) != -1) {
 				document.getElementById("answer").innerHTML = "true";
 			}
 			else {
 				document.getElementById("answer").innerHTML = "false";	
 			}
 		}
 		else {
 			document.getElementById("answer").innerHTML = "false";
 		}
  	}
	
  	function giveUp() {
  		document.getElementById("answer").innerHTML = coefficient(factor_m) + "(" + coefficient(x0_c) + "x" + sepereator(x0_m) + x0_m + ")(" + coefficient(x1_c) + "x" + sepereator(x1_m) + x1_m + ")";
  	}

	function _userInput(value) {
	  	if(value == "") {
	    	return 1;
	    }
	    else if(value == -1) {
	    	return -1;
	    }
	    else {
	    	return value;
	    }
	  }
	  
	function createQuadratic(level) {
		switch (level) {
			case 1:
				var min = -12;
				var max = 12;

				var x0 = generateValueInt(min, max);
				var x1 = generateValueInt(min, max);
		        var factor = 1;
		        var x0coefficent = 1;
		        var x1coefficent = 1;

				var a = 1;
				var b = x0 + x1;
				var c = x0 * x1;
				break;

			case 2:
				var min = -12;
				var max = 12;
				var factorMin = -4;
				var factorMax = 4;

				var x0 = generateValueInt(min, max);
				var x1 = generateValueInt(min, max);
				var factor = generateValueInt(factorMin, factorMax, true);
		        var x0coefficent = 1;
		        var x1coefficent = 1;

				var a = factor;
				var b = factor * (x0 + x1);
				var c = factor * (x0 * x1);
				break;

			case 3:
				var factorMin = -4;
				var factorMax = 4;
				var coefficentMin = 1;
				var coeficentMax = 3;
				var min = -6;
				var max = 6;

				var factor = generateValueInt(factorMin, factorMax, true);
				var x0coefficent = generateValueInt(coefficentMin, coeficentMax);
				var x1coefficent = generateValueInt(coefficentMin, coeficentMax);
				var x0 = generateValueInt(min, max);
				var x1 = generateValueInt(min, max);

				var a = factor * (x0coefficent * x1coefficent);
				var b = factor * (x0 * x1coefficent + x1 *  x0coefficent);
				var c = factor * (x0 * x1);
				break;
		}

		quadratic = formatQuadratic(a, b, c);
    	solution = [factor, x0coefficent, x0, x1coefficent, x1];
    	document.getElementById("quadratic").innerHTML = quadratic;
    
    	return [quadratic, solution];
	}

	function generateValueInt(min, max, factor=false) {
		while(true) {
			var value = Math.floor(Math.random() * (max - min + 1)) + min;
			
		      if(factor) {
		      	if(value != 1 && value != 0) {
		        	return value;
		        }
		      }
	     	else {
		    	if(value != 0) {
					return value;
				}
      		}
		}
	}

	function formatQuadratic(a, b, c) {
		if(a == 0) {
			var t1 = "";
		}
		else if(a == 1) {
			var t1 = "";
		}
	    else if (a == -1) {
	    	var t1 = "-";
	    }
		else{
			var t1 = String(a);
		}

		if(b == 0) {
			var t2 = "0";
		}
		else if (b == 1) {
			var t2 = "";
		}
	    else if(b == -1) {
	    	var t2 = "-";
	    }
		else {
			var t2 = String(b);
		}

		if(c == 0) {
			var t3 = ""
		}
		else {
			var t3 = String(c);
		}

		quadratic = t1 + "x<sup>2</sup>" + sepereator(b) + t2 + "x" + sepereator(c) + t3;
		return quadratic;
	}
  
	function sepereator(value) {
		if(value < 0) {
			return " ";
		}
		else {
			return " + ";
		}
	}

	function coefficient(value) {
		if(value == -1) {
			return "-";
		}
		else if(value == 1){
			return "";
		}
		else {
			return value;
		}
	}
</script>