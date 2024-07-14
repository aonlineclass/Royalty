
const singupform = document.getElementById("signupform");
let alert1 = document.getElementById("alert");
const [name1,email,password,confirmpassword] =[document.getElementById("name"),document.getElementById("email"),document.getElementById("password"),document.getElementById("confirm_password")]
singupform.addEventListener("submit",e=>{
    e.preventDefault();
    const signupdata = {
        name: name1.value,
        email: email.value,
        password:  password.value,
        confirmpassword: confirmpassword.value
    }

 fetch("http://localhost:3000/signup",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(signupdata)
 }).then(response=>{
    return response.json();
 }).then(response=>{
    console.log(response)
    if(response.success == false){
  alert1.innerHTML = `
  <div  class="max-w-sm  w-full bg-white shadow-md rounded-lg p-4 flex items-center">
           
  
  <!-- SVG Icon -->
  <svg class="w-6 h-6 text-red-500 flex-shrink-0 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
  <!-- Alert Text -->
  <div class="text-sm text-gray-700">
      <strong class="block text-red-700">Error:</strong>
      <span>Account with this email it already exixts </span>
  </div>
  </div>
  `;

  
  setTimeout(() => {
    alert1.innerHTML =``;
    
  }, 3000);
    }else{
        location.href= "http://localhost:3000";
    }
   
 }

)
        
})