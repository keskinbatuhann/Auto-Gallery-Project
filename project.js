const form=document.getElementById("car-form");
const titleElement=document.querySelector("#title");
const priceElement=document.querySelector("#price");
const urlElemenet=document.querySelector("#url");




// UI objesini baslatma 
const ui= newUI();


//Tüm eventleri yükleme


eventListeners();


function eventListeners(){
form.addEventListener("submit".addcar);

}
function addcar(e){
    const title=titleElement;
    const price= priceElement;
    const url =urlElemenet;
}