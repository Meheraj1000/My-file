const loadAllPets = async () => {
    document.getElementById("spinner").style.display = "block";
     const res = await fetch(`https:openapi.programming-hero.com/api/peddy/pets`);
     const data = await res.json();
     displayAllpatshow(data.pets);
     document.getElementById("spinner").style.display = "none";
    
 };
 loadAllPets();
 const displayAllpatshow = (pat) => {
     const patsContainer = document.getElementById('pats-container');
     patsContainer.innerHTML = "";
     //console.log(pat);
     if(pat.length==0){
        // patsContainer.classList.remove('grid'); 
         patsContainer.innerHTML = `
         <div class="grid-none ml-56 w-full flex justify-center items-center">
         <img  src="images/error.webp" alt=""> 
         </div>
         `;
 
         return
     }
     pat?.forEach(pats => {
         const div = document.createElement('div');
         console.log(pats);
         div.innerHTML = `
                 <div>
                     <div class=" border rounded-md">
                         <div class="flex justify-center items-center"><img class="w-52 pt-3 rounded-md"
                                 src="${pats.image}" alt=""></div>
                         <div class=" p-4">
                             <h1 class="font-bold">${pats.pet_name}</h1>
                             <div class="flex items-center gap-1">
                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=64&id=p7or8mWbDwvG&format=png"
                                     alt="">
                                 <p class="">Breed: ${pats.breed}</p>
                             </div>
                             <div class="flex items-center gap-1">
                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=23&format=png" alt="">
                                 <p>Birth: ${pats.date_of_birth}</p>
                             </div>
                             <div class="flex items-center gap-1">
                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=1665&format=png" alt="">
                                 <p>Gender:${pats.gender}</p>
                             </div>
                             <div class="flex items-center gap-1">
                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=121&format=png" alt="">
                                 <p>Price: ${pats.price}</p>
                             </div>
                         </div>
                         <div class="flex justify-around pb-2">
                             <div class="">
                                 <button onclick="markASRead()"  class=" btn border px-3 py-1 rounded-md bg-[#c070b5]"><img class="w-6 " src="https://img.icons8.com/?size=50&id=24816&format=png" alt=""></button>
                             </div>
                             <div><button id="adoptBtn"  onclick="adoptPet()" class=" btn border px-3 py-1 rounded-md font-bold bg-[#c070b5]">Adopt</button>
                             </div>
                             <div>
                             <button onclick="CardButtonDetail()" class=" btn border px-3 py-1 rounded-md font-bold bg-[#c070b5]">Details</button>
                             
                              </div>
                         </div>
                      </div>
                  </div>
                 
     `;
         patsContainer.appendChild(div);
     });
 
 }
 
 
 const handleSearch = async (text) => {
     document.getElementById("spinner").style.display = "block"; 
     const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${text}`);
     const data = await res.json();
     displayAllpatshow(data?.data);
 
     setTimeout(function () {
      loadpaddButton()
        
     },3000)
     
     document.getElementById("spinner").style.display = "none";
 };
 
 
 
 
 
 // ////////Details
 const CardButtonDetail = async (petId) => {
     const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
     
     const data = await res.json();
     console.log(data.petData);
     const modelcontaine=document.getElementById('detail');
     modelcontaine.innerHTML=`
     <dialog id="my_modal_1" class="modal">
         <div class="modal-box">
           
         <figure class="px-10 pt-10">
           <img
             src="${data.image}"
             alt="Shoes"
             class="rounded-xl" />
         </figure>
         <div class="flex">
             <div class=" pl-4">
                 <h1 class="font-bold"></h1>
                 <div class="flex items-center gap-1">
                     <img class="w-4 h-4" src="https://img.icons8.com/?size=64&id=p7or8mWbDwvG&format=png"
                         alt="">
                     <p class="">Breed: </p>
                 </div>
                 <div class="flex items-center gap-1">
                     <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=1665&format=png" alt="">
                     <p>Gender:</p>
                 </div>
             </div>
             <div  class="pl-6">
                 <div class="flex items-center gap-1 pt-2">
                     <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=23&format=png" alt="">
                     <p>Birth: </p>
                 </div>
                 <div class="flex items-center gap-1">
                     <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=121&format=png" alt="">
                     <p>Price: </p>
                 </div>
             </div>
         </div>
 <h1 class="font-bold p-2">Detail information</h1>
 <p class="p-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed optio tempora soluta natus, quod vel fugit accusamus quam veniam magni.</p>
 
       
                    
             <div class="modal-action flex justify-center">
                 <form method="dialog">
                     <!-- if there is a button in form, it will close the modal -->
                     <button class="btn ">Close</button>
                 </form>
             </div>
         </div>
     </dialog>
     `;
 
     my_modal_1.showModal();
 }
 //CardButtonDetail()
 
 
 // img card add
 const markASRead=()=>{
     const markAsReadContainer=document.getElementById('imgCountcard');
     const div=document.createElement("div");
     div.innerHTML=`
     <div  class="p-2">
                         <img class="w-24 rounded-md" src="${pats.image}" alt="">
                     </div>
     `;
      markAsReadContainer.appendChild(div);
      handCount()
     
     }
     const handCount=()=>{
        
        document.getElementById('imgcadrbutton').innerHTML;
     
     }
 
 
     function adoptPet() {
 
         const adoptContainer=document.getElementById('AdoptBoutton');
        
         adoptContainer.innerHTML=`
          <dialog id="my_modal_2" class="modal">
             <div class="modal-box">
             <div class="flex justify-center items-center">
             <img class="" src="https://img.icons8.com/?size=80&id=da0C8wQcIQUn&format=png" alt=""></div>
                 <h3 class="text-2xl text-center font-bold">Congrates</h3>
                 <p class="py-4 text-center">Adoption process is Start For your Pet</p>
                 <h1></h1>
                 
             </div>
             <form method="dialog" class="modal-backdrop">
                 
             </form>
         </dialog>
         `;
        
         let countdown = 3;
         const button = document.getElementById('AdoptBoutton');
 
         button.disabled = true;
 
         const countdownInterval = setInterval(() => {
             button.textContent = countdown;
             countdown--;
 
             if (countdown < 0) {
                 clearInterval(countdownInterval);
                 button.textContent = 'Adopted';
                 button.classList.add('adopted');
             }
         }, 3000);
         my_modal_2.showModal();
     }
 
 // short price
     document.getElementById("sortPriceBtn").addEventListener('click', () => {
         sortPetsByPrice();
     });
     
     const sortPetsByPrice = () => {
         // Sort pets in descending order by price
         const sortedPets = [...allPets].sort((a, b) => b.price - a.price);
         displayAllpatshow(sortedPets);
     };
     
 
 
 