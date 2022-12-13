//This will remove screen value to zero
function resetScreenValue(){
  //  window.location.reload()
  document.getElementById('screen').value = "0";
}

//This will remove 1element one by one each time clicked of screen value
function backspace() {
    var screenvalue = document.getElementById('screen').value;
    document.getElementById('screen').value = screenvalue.substr(0, screenvalue.length - 1);
}

//This will display name of user in screen as it is assigned to screenvalue when clicked
function showName(){
    document.getElementById('screen').value = "Bhabishya Ghimire";
}

//Random formula generator
function showFormula(){
	var formulalist = ["(a+b)^2 = a^2+2ab+b^2","(a-b)^2 = a^2-2ab+b^2","Area of square = l^2"];
	var formula =formulalist[ Math.floor(Math.random()*(3-0))+0];
    document.getElementById('screen').value = formula;
}

//This function will change darkmode and whitemode of calculator
//with on/off toggle message in console
const toggleButton  = document.querySelector("#mode");
const toaddclass = document.querySelector(".container");
const toaddclass2 = document.querySelector(".screen");


toggleButton.onclick = () => {
  if (toggleButton.type === "button") {
     toggleButton.type = ' ';
    toaddclass.classList.add("cont");
    toaddclass2.classList.add("scrn");
    console.log('on')
  } else {
    toggleButton.type = 'button';
    toaddclass.classList.remove("cont");
    toaddclass2.classList.remove("scrn");
    console.log('off')
  }
}



//IMPORTANT
//Note that: screenvalue save its data i.e value as string 
           //but eval() is actually taking screenvalue as arguement and performing operation
           //here eval() is built in function of javascript that directly evalauate operation