function validate() {
  var n1 = document.getElementById("num1");
  
  //console.log(typeof(+n1.value));
  
 // 1 variant 
 /* if(n1.value != "" && n1.value == parseInt(n1.value)) {
	  alert("Yes!!!");
      return true;
    
  }
 */ 
 
 // 2 variant
  if(!isNaN(parseFloat(n1.value)) && isFinite(n1.value)) {
	  alert("Yes!!!");
      return true;
    
  }
  
  
  
  alert("No((");
  return false;
}