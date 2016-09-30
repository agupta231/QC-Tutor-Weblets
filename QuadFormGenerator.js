<script>
	function generateProblems(times, level) {
		var problem_set = [];

		for(var i = 0; i < times; i++) {
			problem_set[i] = createQuadratic(level) + "<br>";
		}
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
				var c = X0 * x1;
				break;

			case 2:
				var min = -12;
				var max = 12;
				var factorMin = -4;
				var factorMax = 4;

				var x0 = generateValueInt(min, max);
				var x1 = generateValueInt(min, max);
				var factor = generateValueInt(factorMin, factorMax);

				var a = factor;
				var b = factor * (x0 + x1);
				var c = factor * (X0 * x1);
				break;

			case 3:
				var factorMin = -4;
				var factorMax = 4;
				var coefficentMin = 1;
				var coeficentMax = 3;
				var min = -6;
				var max = 6;

				var factor = generateValueInt(factorMin, factorMax);
				var x0coefficent = generateValueInt(coefficentMin, coeficentMax);
				var x1coefficent = generateValueInt(coefficentMin, coeficentMax);
				var x1 = generateValueInt(min, max)
				var x2 = generateValueInt(min, max)

				var a = factor * (x0coefficent * x1coefficent);
				var b = factor * (x0 * x1coefficent + x1 *  x0coefficent);
				var c = factor * (x0 * x1)
				break;
		}

		quadratic = formatQuadratic(a, b, c);
	}

	function generateValueInt(min, max) {
		while(true) {
			var value = Math.floor(Math.random() * (max - min + 1)) + min;
			
			if(value != 0) {
				return value;
			}
		}
	}

	function formatQuadratic(a, b, c) {
		if(a == 0) {
			var t1 = "";
		}
		else if(a == 1) {
			var t1 = "x<sup>2</sup>";
		}
		else{
			var t1 = String(a);
		}
		if(b == 0) {
			var t2 = "";
		}
		else if (b == 1) {
			var t2 = "x";
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

		quadratic = t1 + " + " + t2 + " + " + t3;
		return quadratic;
	}
</script>

<span id="problems"></span>