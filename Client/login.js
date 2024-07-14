

const [email,password,loginform,alert1]= [document.getElementById('email'),document.getElementById('password'),document.getElementById('loginform'),document.getElementById('alert')]




 loginform.addEventListener("submit",(e)=>{
    const logindata = {
        email:email.value,
        password:  password.value
    }



    e.preventDefault();





    fetch("https://royalty-ltl5.onrender.com/login",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(logindata)
     }).then(response=>{
        return response.json();
     }).then(response=>{
         
        if(response.success){
             location.href = `https://royalty-ltl5.onrender.com/`;
        }else if(response.success == false){
           alert1.innerHTML = `<div class="flex w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
           <div class="flex items-center justify-center w-12 bg-red-500">
               <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                   <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
               </svg>
           </div>
       
           <div class="px-4 py-2 -mx-3">
               <div class="mx-3">
                   <span class="font-semibold text-red-500 dark:text-red-400">Error</span>
                   <p class="text-sm text-gray-600 dark:text-gray-200">
                      Please Check your email and password and try again
                   </p>
               </div>
           </div>
       </div>`
        }


         setTimeout(() => {
             alert1.innerHTML =``;
         }, 6000);

              

         
     })
 })
