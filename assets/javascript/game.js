$( document ).ready(function(){
  //Random number generated should be between 19 * 120
  var randomNum=Math.floor(Math.random()*101+19)
  
  
  $('#randomNumber').text(randomNum);
  // each variable will be created number between 1 - 12
  var num1= Math.floor(Math.random()*11+1)
  var num2= Math.floor(Math.random()*11+1)
  var num3= Math.floor(Math.random()*11+1)
  var num4= Math.floor(Math.random()*11+1)
  
  
  var total= 0; 
  var win= 0;
  var loss = 0;
  
$('#win').text(win);
$('#loss').text(loss);
//reset function
function reset(){
      randomNum=Math.floor(Math.random()*101+19);
      console.log(randomNum)
      $('#randomNumber').text(randomNum);
      num1= Math.floor(Math.random()*11+1);
      num2= Math.floor(Math.random()*11+1);
      num3= Math.floor(Math.random()*11+1);
      num4= Math.floor(Math.random()*11+1);
      total= 0;
      $('#totalScore').text(usertotal);
      } 

function win(){
alert("You got it!");
  win++; 
  $('#win').text(win);
  reset();
}

function lose(){
alert ("Nah.. You Failed.....");
  loss++;
  $('#loss').text(loss);
  reset()
}

  $('#blue').on ('click', function(){
    total = total + num1;
    console.log("New total= " + total);
    $('#totalScore').text(total); 
          //sets win/lose conditions
        if (total == randomNum){
          win();
        }
        else if ( total > randomNum){
          lose();
        }   
  })  
  $('#red').on ('click', function(){
    total = total + num2;
    console.log("New total= " + total);
    $('#totalScore').text(total); 
        if (total == randomNum){
          win();
        }
        else if ( total > randomNum){
          lose();
        } 
  })  
  $('#green').on ('click', function(){
    total = total + num3;
    console.log("New total= " + total);
    $('#totalScore').text(total);
//sets win/lose conditions
          if (total == randomNum){
          win();
        }
        else if ( total > randomNum){
          lose();
        } 
  })  
  $('#yellow').on ('click', function(){
    total = total + num4;
    console.log("New total= " + total);
    $('#totalScore').text(total); 
      
          if (total == randomNum){
          win();
        }
        else if ( total > randomNum){
          lose();
        }
  });   
}); 