<p>Quadratic difficulty (1 - 3)</p>
<input type="radio" name="difficulty" value="1" checked>Level 1
<input type="radio" name="difficulty" value="2">Level 2
<input type="radio" name="difficulty" value="2">Level 3
<br>
<button onclick="generateProblems(1)">
Generate Quadratic
</button>

<script>
	function generateProblems(times) {
		var radios = document.getElementsByName("difficulty");
    
    for(var i = 0; i < radios.length; i++) {
    	if(radios[i].checked) {
      	var level = i + 1;
      }
    }
    
    document.getElementById("debug").innerHTML = level;
		var problem_set = [];

		for(var i = 0; i < times; i++) {
			problem_set[i] = createQuadratic(level) + "<br>";
		}
    
    document.getElementById("test").innerHTML = problem_set.join("");
	}

	function createQuadratic(level) {
		switch (level) {
			case 1:
				var min = -12;
				var max = 12;

				var x0 = generateValueInt(min, max);
				var x1 = generateValueInt(min, max);

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
    document.getElementById("test").innerHTML = quadratic;
    
    return quadratic;
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

<p id="test"></p>
<p id="debug"></p>