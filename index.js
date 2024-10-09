const loadpaddButton = async () => {
    document.getElementById("spinner").style.display = "none";
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pets`);
    const data = await res.json();
    displayAllpatshow(data.pets)
}

loadpaddButton()
const displayAllpatshow = (pat) => {
    const patsContainer = document.getElementById('pats-container');
    // console.log(pat);
    pat?.forEach(pats => {
        const div = document.createElement('div');
        div.innerHTML = `
     <div >
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
                                <button class=" btn border px-3 py-1 rounded-md bg-[#c070b5]"><img class="w-6 " src="https://img.icons8.com/?size=50&id=24816&format=png" alt=""></button>
                            </div>
                            <div><button onclick="my_modal_2.showModal()" class=" btn border px-3 py-1 rounded-md font-bold bg-[#c070b5]">Adopt</button>
                            </div>
                            <div>
                            <button onclick="my_modal_1.showModal()" class=" btn border px-3 py-1 rounded-md font-bold bg-[#c070b5]">Details</button>
                            
                             </div>
                        </div>

                    </div>
                
    `;
        patsContainer.appendChild(div);
    });

}


const handleSearch =async (text) => {
    document.getElementById("spinner").style.display = "block";
    

    setTimeout(function () {

        loadpaddButton()
    }, 3000);
    
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/category/${text}`);
    const data = await res.json();
    console.log(data);
    displayAllpatshow(data?.data)

}

// 
// const displayAllButtonpatshow = (pat) => {
//     const patsContainer = document.getElementsByClassName('pats-containers');
//     // console.log(pat);
//     pat?.forEach(data => {
//         const div = document.createElement('div');
//         div.innerHTML = `
//      <div >
//                     <div class=" border rounded-md">
//                         <div class="flex justify-center items-center"><img class="w-52 pt-3 rounded-md"
//                                 src="${data.image}" alt=""></div>
//                         <div class=" p-4">
//                             <h1 class="font-bold">${data.pet_name}</h1>
//                             <div class="flex items-center gap-1">
//                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=64&id=p7or8mWbDwvG&format=png"
//                                     alt="">
//                                 <p class="">Breed: ${data.breed}</p>
//                             </div>
//                             <div class="flex items-center gap-1">
//                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=23&format=png" alt="">
//                                 <p>Birth: ${data.date_of_birth}</p>
//                             </div>
//                             <div class="flex items-center gap-1">
//                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=1665&format=png" alt="">
//                                 <p>Gender:${data.gender}</p>
//                             </div>
//                             <div class="flex items-center gap-1">
//                                 <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=121&format=png" alt="">
//                                 <p>Price: ${data.price}</p>
//                             </div>
//                         </div>
//                         <div class="flex justify-around pb-2">
//                             <div class="">
//                                 <button class=" btn border px-3 py-1 rounded-md bg-[#c070b5]"><img class="w-6 " src="https://img.icons8.com/?size=50&id=24816&format=png" alt=""></button>
//                             </div>
//                             <div><button onclick="my_modal_2.showModal()" class=" btn border px-3 py-1 rounded-md font-bold bg-[#c070b5]">Adopt</button>
//                             </div>
//                             <div>
//                             <button onclick="my_modal_1.showModal()" class=" btn border px-3 py-1 rounded-md font-bold bg-[#c070b5]">Details</button>
                            
//                              </div>
//                         </div>

//                     </div>
                
//     `;
//         patsContainer.appendChild(div);
//     });

// }


// document.getElementById('buttondog').addEventListener('click',function(){
//     document.getElementsByClassName('pats-containers').classList.remove('hidden');
//     document.getElementById('pats-container').classList.add('hidden')
//     document.getElementById('buttoncat').classList.add('hidden')
//     document.getElementById('buttonrabbit').classList.add('hidden')
//     document.getElementById('buttonbird').classList.add('hidden')
    
// })


// ////////Details
const CardButtonDetail = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
    console.log(res);
    const data = await res.json();
    detailscardButton(data.petData)
}


detailscardButton=(cart)=>{
    const cardContain =document.getElementById('detail');
    console.log(cardContain)
    cart?.forEach(petId=>{
        const div = document.createElement('div');
        div.innerHTML=`<div >
                    <div class=" border rounded-md">
                        <div class="flex justify-center items-center"><img class="w-52 pt-3 rounded-md"
                                src="${petId.image}" alt=""></div>
                        <div class=" p-4">
                            <h1 class="font-bold">${petId.pet_name}</h1>
                            <div class="flex items-center gap-1">
                                <img class="w-4 h-4" src="https://img.icons8.com/?size=64&id=p7or8mWbDwvG&format=png"
                                    alt="">
                                <p class="">Breed: ${petId.breed}</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=23&format=png" alt="">
                                <p>Birth: ${petId.date_of_birth}</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=1665&format=png" alt="">
                                <p>Gender:${petId.gender}</p>
                            </div>
                            <div class="flex items-center gap-1">
                                <img class="w-4 h-4" src="https://img.icons8.com/?size=50&id=121&format=png" alt="">
                                <p>Price: ${petId.price}</p>
                            </div>
                        </div>
                       
                    </div>
                
    `;
    cardContain.appendChild(div);
    })
}


