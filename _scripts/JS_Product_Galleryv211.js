//  Yulia Baranava | ID 7633513

//  Write down to captures the original values for the text and the picture when the page loads
// Image 1: img src="_images/feature1.jpg" | text of the alt attribute:  alt="Rich, Vivid Reproduction"
// Image 2: img src="_images/feature2.jpg" | text of the alt attribute:  alt="Asus ProArt Palette" 
// Image 3: img src="_images/feature3.jpg" | text of the alt attribute:  alt="Rich Connectivity"
// Image 4: img src="_images/feature4.jpg" | text of the alt attribute:  alt="Ergonomic Design"

 
//Use the functions below to write your code

// function to show previews
function loadFeature(element) {
	var showText = element.alt; // stores the image alt text as a variable
	var url = element.src; // stores the image url as a variable
	document.getElementById("stage").innerHTML = showText; // loads the contents of the alt attribute as the text for the page
	document.getElementById("stage").style.backgroundImage = "url(" + url + ")"; // adds the image as background to the section with stage ID
	}

// function to undo (or) restore the original values
var originalText = document.getElementById("stage").innerHTML; // captures original text
var originalImage = document.getElementById("stage").style.backgroundImage; // captures original image
 console.log(originalBackground); // captures original image
 
function restoreProduct() {
	document.getElementById("stage").innerHTML = originalText;  // loads original text
	document.getElementById("stage").style.backgroundImage = originalImage; //loads original image
	}
	
	