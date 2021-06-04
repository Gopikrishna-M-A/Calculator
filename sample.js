
 var PreviousNumber
 var CurrentNumber
 var Operation
 var DotNumber = 0
 var total

function ButtonClicked(num) {

     if(num=='+'||num=='-'){
       DotNumber=0
       if(num=='+'){
        Operation=0
       }else{
        Operation=1
       }
       PreviousNumber=document.getElementById('display').value
       document.getElementById('displayTwo').value = PreviousNumber
       document.getElementById('display').value = " "     
     }else if(num==='.'){
       if(DotNumber==0){
         PreviousNumber = document.getElementById('display').value
         document.getElementById('display').value = PreviousNumber+num
         DotNumber=1
       }

       
     }else if(num==='='){
  
       PreviousNumber = document.getElementById('displayTwo').value
       CurrentNumber = document.getElementById('display').value
      numOne = parseFloat(PreviousNumber)
      numTwo = parseFloat(CurrentNumber)
      if(Operation==0){
        total = numOne+numTwo
      }else{
        total = numOne-numTwo
      }
      document.getElementById('displayTwo').value = " "
      document.getElementById('display').value = total

     }else if(num===' '){
       DotNumber=0
       document.getElementById('displayTwo').value = " "
      document.getElementById('display').value = " "
     }else{
      PreviousNumber = document.getElementById('display').value
      document.getElementById('display').value = PreviousNumber+num  
     }

        
    
    
  } 

