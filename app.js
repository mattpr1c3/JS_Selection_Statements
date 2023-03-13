console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

let number = 34

let answer = window.prompt("What is your favorite number?")

if (answer < number) {
  console.log("too low")
}
else if (answer > number) {
  console.log("too high")
}
else if (answer == number) {
  console.log("Congratulations!!!")
}
else {
  console.log("Make sure you input a number")
  window.alert("Make sure you input a number")
}

birthMonth = window.prompt("What is your birth month?")

switch (birthMonth) {
  case "December":
  case "January":
  case "February":
    window.alert("you were born during Winter")
    break;
  case "March":
  case "April":
  case "May":
    window.alert("you were born during Spring")
    break;
  case "June":
  case "July":
  case "August":
    window.alert("you were born during Summer")
    break;
  case "September":
  case "October":
  case "November":
    window.alert("you were burn during Autumn")
    break;
  default:
    window.alert("Please enter a month")
}



let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case ("01"):
    type = "Tank top";
  case ("02"):
    type = "T-Shirt";
  case ("03"):
    type = "Long Sleeve";
  case ("04"): 
    type = "Sweat Shirt";
  default: 
    type = "Other";
}

switch (colorId) {
  case ("BL"):
    color = "Black";
  case ("BL"):
    color = "Blue";
  case ("RD"):
    color = "Red";
  case ("PU"): 
    color = "Purple";
  default: 
    color = "White";
}

switch (sizeId) {
  case ("S"):
    size = "Small";
  case ("M"): 
    size = "Medium";
  case ("L"): 
    size = "Large";
  case ("XL"): 
    size = "Extra Large";
  default: 
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
