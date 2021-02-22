var slider = document.getElementById("myRange");
var output = document.getElementById("km");
output.innerHTML = slider.value; 
var output2 = document.getElementById("precio");
output2.innerHTML = slider.value;
var output3 = document.getElementById("total");
output3.innerHTML = slider.value;




// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
  output2.innerHTML = this.value*150;
  output3.innerHTML = this.value*150+12990;
} 

