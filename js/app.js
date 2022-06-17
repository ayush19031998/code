const access_api="JSgM9DlGW1IDjl48FmHu50CDvMHnxGoyGKsN6fZ85Ek";
const random_images_url =`https://api.unsplash.com/photos/random?client_id=${access_api}&count=30`;
const gallery= document.querySelector(".gallery");

let allimages;
// async function getdata(){
//     let res=await fetch(random_images_url)
//     let product=await res.json()
//     append(product)
    
// }
// getdata()
// function append(product){

//     product.forEach(function(el){
        
//         let img = document.createElement("img");
     
//         img.src=el.urls.regular;
//         img.className ="gallery-img"
  
//     })
// }

const getimages = () =>{
    fetch( random_images_url)
    .then(res => res.json())
    .then(data =>{
        allimages = data;
        makeimages(allimages)
    });
} 
const makeimages = (data) => {
    data.forEach((item,index) => {
console.log(item)
        let img = document.createElement("img");
        img.src=item.urls.regular;
        img.className ="gallery-img"
        // gallery.append(img)
    })
}
getimages()
