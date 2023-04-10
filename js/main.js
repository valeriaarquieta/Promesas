let cuerpoTabla = document.getElementsByTagName("cbody");
let res=JSON.parse(localStorage.getItem("producto"));

const cardsContainer = document.getElementById("cartas");

function getProducto(){
   let promesa=fetch("https://fakestoreapi.com/products",
{method: "GET"});
promesa.then((response)=>{
   response.json().then((prods)=>{ 
//la de crear cartas va aquí
prods.forEach(producto => {
   const card = document.createElement("div");
   card.classList.add("card");
 
   const image = document.createElement("img");
   image.src = producto.image;
   image.alt = producto.title;
 
   const title = document.createElement("h2");
   title.textContent = producto.title;
 
   const category = document.createElement("h4")
   category.textContent = producto.category;
 
   const price = document.createElement("p");
   price.textContent = `$${producto.price}`;
 
   const description = document.createElement("p");
   description.textContent = producto.description;
 
   card.appendChild(image);
   card.appendChild(title);
   card.appendChild(price);
   card.appendChild(description);
   card.appendChild(category);
 
   cardsContainer.appendChild(card);
 });
 
//  const getProducto = () => {
 
//      return new Promise((resolve, reject) => {
//          if (producto == null) {
//              reject(new Error("Producto no existe"))
//          }
//          setTimeout(() => { resolve (producto) }, 2000);
//      });
 
   }//crear cards
   ) //then json
   .catch((err)=>{
console.error("Error en el formato"+err.message);
   });//catch error json
}//respuesta
   )//then
   .catch((error)=>{
      console.error("Error en la respuesta"+error.message);
         });//catch error promesa
}

getProducto();

