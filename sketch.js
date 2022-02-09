var input,heading;


function setup() 
{
  createCanvas(400, 400);
  background(178,255,102);
 input=createInput();
 input.position(5,75);
  heading=createElement("h3","Enter Any Alphabet:");
  heading.position(5,30)
  textAlign(CENTER);
  textSize(50);
}

function draw() {
var value=input.value();
switch (value) { 
  case 'a': 
  console.log("Vowel"); 
  break;
  case 'e': 
  console.log("Vowel"); 
  break; 
  case 'i': 
  console.log("Vowel"); 
  break; 
  case 'o': 
  console.log("Vowel"); 
  break; 
  case 'u': 
  console.log("Vowel"); 
  break; 
  default: 
  console.log("Please enter any character");
}

}

