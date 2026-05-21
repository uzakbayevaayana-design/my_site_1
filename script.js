const products = [
    // DRESSES
    {
        name:"Elegant Satin Dress",
        price:"$89",
        category:"dress",
        size:["S","M","L"],
        sale:true,
        image:"https://images.unsplash.com/photo-1551232864-3f0890e580d9?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Soft Nude Dress",
        price:"$95",
        category:"dress",
        size:["S","M","L"],
        sale:false,
        image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Luxury White Dress",
        price:"$120",
        category:"dress",
        size:["S","M","L"],
        sale:true,
        image:"https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Minimal Beige Dress",
        price:"$99",
        category:"dress",
        size:["S","M","L"],
        sale:false,
        image:"https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Modern Fashion Dress",
        price:"$110",
        category:"dress",
        size:["S","M","L"],
        sale:false,
        image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Premium Evening Dress",
        price:"$130",
        category:"dress",
        size:["S","M","L"],
        sale:true,
        image:"https://images.unsplash.com/photo-1506629905607-d9c297d8d8d4?q=80&w=1200&auto=format&fit=crop"
    },
    // SHOES
    {
        name:"Elegant Nude Heels",
        price:"$150",
        category:"shoes",
        size:["36","38","40"],
        sale:false,
        image:"https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Luxury Cream Heels",
        price:"$170",
        category:"shoes",
        size:["36","38","40"],
        sale:true,
        image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Modern White Sneakers",
        price:"$145",
        category:"shoes",
        size:["36","38","40"],
        sale:false,
        image:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Minimal Fashion Shoes",
        price:"$135",
        category:"shoes",
        size:["36","38","40"],
        sale:true,
        image:"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Soft Beige Sneakers",
        price:"$160",
        category:"shoes",
        size:["36","38","40"],
        sale:false,
        image:"https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Premium Street Sneakers",
        price:"$140",
        category:"shoes",
        size:["36","38","40"],
        sale:true,
        image:"https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop"
    },
    // ACCESSORIES
    {
        name:"Luxury Sunglasses",
        price:"$70",
        category:"glasses",
        size:["One Size"],
        sale:false,
        image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Minimal Black Glasses",
        price:"$80",
        category:"glasses",
        size:["One Size"],
        sale:true,
        image:"https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Elegant Nude Sunglasses",
        price:"$75",
        category:"glasses",
        size:["One Size"],
        sale:false,
        image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Premium Fashion Glasses",
        price:"$85",
        category:"glasses",
        size:["One Size"],
        sale:true,
        image:"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Modern Beige Sunglasses",
        price:"$95",
        category:"glasses",
        size:["One Size"],
        sale:false,
        image:"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Luxury Fashion Shades",
        price:"$65",
        category:"glasses",
        size:["One Size"],
        sale:true,
        image:"https://images.unsplash.com/photo-1504593811423-6dd665756598?q=80&w=1200&auto=format&fit=crop"
    },
    // OUTERWEAR
    {
        name:"Cream Luxury Coat",
        price:"$180",
        category:"coat",
        size:["S","M","L"],
        sale:false,
        image:"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Soft Beige Jacket",
        price:"$165",
        category:"coat",
        size:["S","M","L"],
        sale:true,
        image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Modern White Coat",
        price:"$210",
        category:"coat",
        size:["S","M","L"],
        sale:false,
        image:"https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Luxury Nude Jacket",
        price:"$175",
        category:"coat",
        size:["S","M","L"],
        sale:true,
        image:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Classic Long Coat",
        price:"$220",
        category:"coat",
        size:["S","M","L"],
        sale:false,
        image:"https://images.unsplash.com/photo-1506629905607-d9c297d8d8d4?q=80&w=1200&auto=format&fit=crop"
    },
    {
        name:"Elegant Winter Coat",
        price:"$240",
        category:"coat",
        size:["S","M","L"],
        sale:true,
        image:"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop"
    }
];

const productContainer = document.getElementById("products");

function displayProducts(items){
    if(productContainer) {
        productContainer.innerHTML = "";
        items.forEach((product)=>{
            productContainer.innerHTML += `
            <div class="product" data-category="${product.category}">
                ${product.sale ? '<div class="sale-badge">SALE</div>' : ''}
                <img src="${product.image}">
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <select class="size-select">
                        ${product.size.map(size => `<option>${size}</option>`).join("")}
                    </select>
                    <button class="save-btn" onclick="saveItem('${product.name}')">Save Item</button>
                    <button class="cart-btn" onclick="addToCart()">Add to Cart</button>
                </div>
            </div>
            `;
        });
    }
}

// Запускаем первичный вывод товаров
displayProducts(products);

function filterCategory(category){
    if(category === "all"){
        displayProducts(products);
    }
    else if(category === "sale"){
        const filtered = products.filter(product => product.sale);
        displayProducts(filtered);
    }
    else{
        const filtered = products.filter(product => product.category === category);
        displayProducts(filtered);
    }
}

function saveItem(name){
    let saved = JSON.parse(localStorage.getItem("savedItems")) || [];
    if(saved.includes(name)){
        alert("Already saved!");
    }
    else{
        saved.push(name);
        localStorage.setItem("savedItems", JSON.stringify(saved));
        alert(name + " saved!");
    }
}

let cart = 0;
function addToCart(){
    cart++;
    const cartCount = document.getElementById("cartCount");
    if(cartCount) {
        cartCount.innerText = cart;
    }
}

const searchInput = document.getElementById("searchInput");
if(searchInput){
    searchInput.addEventListener("keyup", ()=>{
        const value = searchInput.value.toLowerCase();
        const filtered = products.filter(product => product.name.toLowerCase().includes(value));
        displayProducts(filtered);
    });
}

const filterSize = document.getElementById("filterSize");
if(filterSize){
    filterSize.addEventListener("change", ()=>{
        const selected = filterSize.value;
        if(selected === "all"){
            displayProducts(products);
        }
        else{
            const filtered = products.filter(product => product.size.includes(selected));
            displayProducts(filtered);
        }
    });
}

const form = document.getElementById("contactForm");
if(form){
    form.addEventListener("submit", function(e){
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if(name === "" || email === ""){
            alert("Please fill all fields!");
        }
        else if(!email.includes("@")){
            alert("Invalid email!");
        }
        else{
            alert("Message sent successfully!");
        }
    });
}

// СЛАЙДЕР (ЕДИНСТВЕННАЯ И БЕЗОПАСНАЯ ВЕРСИЯ)
const images = [
    "img/1.jpg",
    "img/2.jpg",
    "img/3.jpg"
];

let current = 0;
const sliderImage = document.getElementById("sliderImage");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");
let interval = null;

function showImage(index){
    if (sliderImage) {
        sliderImage.style.opacity = "0";
        setTimeout(() => {
            sliderImage.src = images[index];
            sliderImage.style.opacity = "1";
        }, 300);
    }
}

function nextSlide(){
    current = (current + 1) % images.length;
    showImage(current);
}

function prevSlide(){
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

if (rightBtn && leftBtn) {
    rightBtn.addEventListener("click", nextSlide);
    leftBtn.addEventListener("click", prevSlide);
}

function startAuto(){
    if (sliderImage) {
        interval = setInterval(nextSlide, 3500);
    }
}

function stopAuto(){
    clearInterval(interval);
}

startAuto();

const slider = document.querySelector(".slider-container");
if(slider){
    slider.addEventListener("mouseenter", stopAuto);
    slider.addEventListener("mouseleave", startAuto);
}