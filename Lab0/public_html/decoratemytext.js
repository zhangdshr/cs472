var timer = null;

window.onload = function() {
	var btn = document.getElementById("btn");
	btn.onclick = function () {
		if(timer === null)
			timer = setInterval(biggerFont,500);
		else {
			clearInterval(timer);
			timer = null;
		}
	};
	document.getElementById("btnPigLatin").onclick = function () {
		var str = document.getElementById("txt").value;
		var lines = str.split("\n");
		console.log(lines.length);
		var newStr="";

		for (var l = 0; l<lines.length; l++) {
			var arr = lines[l].split(" ");
			var newLine="";
			console.log(lines[l]);
			for(let i=0;i<arr.length;i++){
				newLine = newLine + " " + firstLetterUpperCase(translatePigLatin(arr[i]));
			}
			newStr = newStr + "\n" + newLine.substr(1);
		}

		console.log(newStr.substr(1));
		document.getElementById("txt").value = newStr.substr(1);
	}

	document.getElementById("btnMalkovitch").onclick = function () {
		var str = document.getElementById("txt").value;
		var lines = str.split("\n");
		console.log(lines.length);
		var newStr="";

		for (var l = 0; l<lines.length; l++) {
			var arr = lines[l].split(" ");
			var newLine="";
			console.log(lines[l]);
			for(let i=0;i<arr.length;i++){
				if (arr[i].length>=5)
					newLine = newLine + " " + "Malkovich";
				else
					newLine = newLine + " " + arr[i];
			}
			newStr = newStr + "\n" + newLine.substr(1);
		}

		console.log(newStr.substr(1));
		document.getElementById("txt").value = newStr.substr(1);
	}

	document.getElementsByName("chk")[0].onchange = function(){
		//alert("Hello, world!"); 
		var txt = document.getElementById("txt");
		if (this.checked) {
			txt.style.fontWeight = "bold";
			txt.style.color = "green";
			txt.style.textDecoration = "underline";
			document.getElementsByTagName("body")[0].style.backgroundImage = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')"
		} else {
			txt.style.fontWeight = "normal";
			txt.style.color = "black";
			txt.style.textDecoration = "none";
			document.getElementsByTagName("body")[0].style.backgroundImage = ""
		}
	}
}

function biggerFont() { 
		//alert("Hello, world!"); 
//		document.getElementById("txt").style.fontSize = "24pt";
		var txt = document.getElementById("txt");
		var size = parseInt(txt.style.fontSize)?parseInt(txt.style.fontSize):12;
		console.log("size:"+size);
		txt.style.fontSize = size + 2 + "pt";

		//var theCSSprop = window.getComputedStyle(txt, null).getPropertyValue("font-size");
		//alert(theCSSprop);
	}

function translatePigLatin(str) {
  // Create variables to be used
  var pigLatin = '';
  var regex = /[aeiou]/gi;

  // Check if the first character is a vowel
  if (str[0].match(regex)) {
    pigLatin = str + 'ay';

  } else if(str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + 'ay';
  } else {

    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0]);

    // Take the string from the first vowel to the last char
    // then add the consonants that were previously omitted and add the ending.
    pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + 'ay';
  }

  return pigLatin;
}
//
function firstLetterUpperCase(str) {
	return str[0].toUpperCase()+str.substr(1).toLowerCase();
}

