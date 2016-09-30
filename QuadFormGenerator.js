<p>Quadratic difficulty (1 - 3)</p>
<input type="radio" name="difficulty" value="1" checked>Level 1
<input type="radio" name="difficulty" value="2">Level 2
<input type="radio" name="difficulty" value="2">Level 3
<br>
<br>
<button onclick="generateProblems()">
Generate Quadratic
</button>
<br>
<p id="test"></p>
<br>
<input type="number" name="factor" style="width: 30px">(<input type="number" name="x0c" style="width: 30px">x + <input type="number" name="x0m" style="width: 30px">)(<input type="number" name="x1c" style="width: 30px">x + <input type="number" name="x1m" style="width: 30px">)
<br>
<br>
<button>
Check solution
</button>

<script>
var factor = null;
var x0_m = null;
var x1_m = null;
var x0 = null;
var x1 = null;

	function generateProblem() {
		var radios = document.getElementsByName("difficulty");
    
    for(var i = 0; i < radios.length; i++) {
    	if(radios[i].checked) {
      	var level = i + 1;
      }
    }
    
    var data_raw = createQuadratic(level);
    var formattedQuadratic = data_raw[0];
    var solution = data_raw[1];
    
    
    
    document.getElementById("test").innerHTML = formattedQuadratic;
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
    document.getElementById("test").innerHTML = quadratic;
    
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
			var t2 = "";
		}
		else if (b == 1) {
			var t2 = "";
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
</script>
<p id="debug"></p>