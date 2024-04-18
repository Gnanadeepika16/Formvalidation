
// function validateForm(event) {
//      event.preventDefault(); 
  
//     let name = document.getElementById('name').value;
//     let password = document.getElementById('password').value;
//     let confirmPassword = document.getElementById('confirmPassword').value;
//     let mobileNumber = document.getElementById('mobileNumber').value;
//     let button=document.getElementById('button').value
     
//     if (name == "") {
//       alert('Name cannot be empty,Please enter your name.');
//       // return;
//     }
  

//     if (password.length < 5) {
//       alert('Password should be at least 5 characters long.');
//       //password.style.outline = '1px solid red'
//       // return;
//     }
  
//     if (password !== confirmPassword) {
//       alert('Passwords do not match.');
//      }
//       // return;
    
  
//       if(mobileNumber.length > 10 || mobileNumber < 10){
//       alert('Please enter a valid 10-digit mobile number.');
//       // return;
//     }
  
//     alert('Form submitted successfully!');
    
//   }


var a = [1,2,3,4,6]
for(i=1;i<a.length;i++)
{
  if(a.indexOf(i)===-1)
  {
    console.log(i)
  }
}