console.log("you are at home js")



 const tweet_post = document.getElementById("tweet_content");
 const textarea_tweet = document.getElementById("textarea-tweet");
 const alert1 = document.getElementById("alert");
  let tweet_showcase = document.getElementById("tweet-showcase")
  let progressbar=  document.getElementById("progressbar")

 tweet_post.addEventListener("submit",(e)=>{
 

  e.preventDefault()
  
    
   fetch(`http://localhost:3000/tweets?tweets_content=${textarea_tweet.value}`).then((response)=>{

          return response.json();

   }).then((response)=>{
    if(response.success){
        alert1.innerHTML= ` <div class="flex items-center justify-center w-12 bg-emerald-500" style="background-color: #0bb84d;">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 3.33331C10.8 3.33331 3.33337 10.8 3.33337 20C3.33337 29.2 10.8 36.6666 20 36.6666C29.2 36.6666 36.6667 29.2 36.6667 20C36.6667 10.8 29.2 3.33331 20 3.33331ZM16.6667 28.3333L8.33337 20L10.6834 17.65L16.6667 23.6166L29.3167 10.9666L31.6667 13.3333L16.6667 28.3333Z" />
          </svg>
      </div>
  
      <div class="px-4 py-2 -mx-3">
          <div class="mx-3">
              <span class="font-semibold  text-black ">Success</span>
              <p class="text-sm text-gray-600 dark:text-gray-200">Your Tweet posted!</p>
          </div>
      </div>`;


      setTimeout(() => {
          alert1.innerHTML=``;
        
      }, 5000);


    }

 

   })
      
 
 }
)

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

 fetch("http://localhost:3000/get-tweets").then((data) => {

    return data.json();

 }).then((res)=>{


     
    res.forEach((element,index) => {

          
         let dateof = new Date(element.created_at);
        let newdateparse = `${dateof.getUTCDate()} ${month[dateof.getMonth()]}  ${dateof.getFullYear()} - ${dateof.getHours()}:${dateof.getMinutes()}`;
       
         
          tweet_showcase.innerHTML+=`
                    
          <div  element-id="${element.tweet_id}"   class=" my-4 bg-transparent p-4 rounded-lg  shadow-lg w-full max-w-full" style="  border: 2px solid  rgba(255, 255, 255, 0.377);; ">

                 <div class="flex justify-between items-start ">
              <!-- Profile Picture -->
              <img class="w-12 h-12 rounded-full" src="./ali-jouyandeh-bodgc6H44FA-unsplash.jpg" alt="Profile Picture">
              
              <div class="flex-1 ml-4">
                <div class="flex justify-between items-center">
                 
                  <div>
                    <span class="font-bold">${element.user_name}</span> @${element.user_name} ${newdateparse}
                    <p class="mt-2 text-white">${element.content}</p>
                  </div>
              
                  <button class="text-black focus:outline-none">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 3v1H4v2h16V4h-5V3H9zm3 3H8v12c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2V6h-4zm-1 10v-8h2v8h-2z"/>
                    </svg>
                  </button>
                </div>
                
                <!-- Tweet Interaction Buttons -->
                <div class="flex justify-between mt-4 text-black">


  <!-- Comment Button -->
  <button  class="flex items-center text-white space-x-1 focus:outline-none hover:text-blue-500">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7.59 10.41L12 14.83l4.41-4.42L18 11.83l-6 6-6-6z"/>
    </svg>
    <span> <a href="#"> Comment </a></span>
    <span class="ml-1 text-gray-500">${element.replies_count}</span>
  </button>
  <!-- Retweet Button -->
  <button  class="flex   items-center text-white space-x-1 focus:outline-none hover:text-green-500">

   <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FFFFFF" stroke-width="2" viewBox="0 0 24 24" width="24" height="24">
  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
</svg>


<span  class="like-btn">likes</span>
<span class="ml-1 text-gray-500">${element.likes_count}</span>

  </button>
  <!-- Views Button -->
  <button class="flex items-center text-white space-x-1 focus:outline-none hover:text-purple-500">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 4.5C7.03 4.5 2.7 7.61 1 12c1.7 4.39 6.03 7.5 11 7.5s9.3-3.11 11-7.5c-1.7-4.39-6.03-7.5-11-7.5zm0 13c-3.04 0-5.78-1.64-7.28-4.28C6.22 10.64 8.96 9 12 9s5.78 1.64 7.28 4.28C17.78 15.86 15.04 17.5 12 17.5z"/>
    </svg>
    <span> <a href="#"> Views </a></span>
    <span class="ml-1 text-gray-500">${element.views}</span>
  </button>
                </div>
              </div>
            </div>
              </div>
          

          `;

      
        
    });


    


 })

 const like_btn = document.getElementsByClassName("like-btn");

setTimeout(() => {
  
  Array.from(like_btn).forEach((like) => {
 
   like.addEventListener("click", (e) =>{
     let id_elem = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
     const prev = e.target.parentElement.querySelector("svg");
     prev.setAttribute("fill","#FFFFFF")

       



     let getattr = id_elem.getAttribute("element-id")

      fetch(`http://localhost:3000/update_data?t_id=${getattr}`).then((response)=>{

        return response.json();

      }).then((data)=>{
 
        console.log(data);

      })
      


 
   })
 
 
  
  })
   
}, 1000);


window.onload= ()=>{
  progressbar.innerHTML=``;
}
