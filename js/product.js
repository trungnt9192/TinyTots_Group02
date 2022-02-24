// PRODUCT

const dataProducts = {
    babyCare: [{
        id: 1,
        image: "./images/product/Baby%20care/baby-manicure-set-feeding-387_360x.jpg",
        brand: "AAA",
        name: "Baby Manicure Set",
        price: "$1<sup>99</sup>",
        link: "./Product_subpage/products(1).html"
    },
    {
        id: 2,
        image: "./images/product/Baby%20care/brush-comb-set-feeding-262_360x.jpg",
        brand: "AAA",
        name: "Brush & Comb Set",
        price: "$1<sup>49</sup>",
        link: "./Product_subpage/products(2).html"
    },
    {
        id: 3,
        image: "./images/product/Baby%20care/hygiene-aquaintr-sanitising-water-self-care-921_360x.jpg",
        brand: "BBB",
        name: "HYGIENE AQUAINT sanitising water",
        price: "$2<sup>49</sup>",
        link: "./Product_subpage/products(3).html"
    },
    {
        id: 4,
        image: "./images/product/Baby%20care/non-contact-fever-alert-infrared-forehead-thermometer-feeding-304_360x.jpg",
        brand: "CCC",
        name: "Non-Contact Fever Alert Infrared Forehead Thermometer",
        price: "$27<sup>49</sup>",
        link: "./Product_subpage/products(4).html"
    }],

    fashion: [{
        id: 5,
        image: "./images/product/Fashion/baby-blue-quilted-snowsuit-773_360x.jpg",
        brand: "CCC",
        name: "Baby Blue Quilted Snowsuit",
        price: "$15<sup>49</sup>",
        link: "./Product_subpage/products(5).html"
    },
    {
        id: 6,
        image: "./images/product/Fashion/bunny-top-pants-clothing-761_360x.jpg",
        brand: "CCC",
        name: "Bunny Top & Pants",
        price: "$17<sup>99</sup>",
        link: "./Product_subpage/products(6).html"
    },
    {
        id: 7,
        image: "./images/product/Fashion/sock-ons-white-baby-clothes-333_360x.jpg",
        brand: "BBB",
        name: "Sock Ons - white",
        price: "$2<sup>99</sup>",
        link: "./Product_subpage/products(7).html"
    },
    {
        id: 8,
        image: "./images/product/Fashion/velour-premature-baby-all-in-one-elephant-clothing-129_360x.jpg",
        brand: "BBB",
        name: "Velour Premature Baby All-In-One - Elephant",
        price: "$7<sup>99</sup>",
        link: "./Product_subpage/products(8).html"
    }],
    toys: [{
        id: 9,
        image: "./images/product/Toys/stick-man-toys-games-126_360x.jpg",
        brand: "AAA",
        name: "Stick Man",
        price: "$14<sup>99</sup>",
        link: "./Product_subpage/products(9).html"
    },
    {
        id: 10,
        image: "./images/product/Toys/the-gruffalo-gruffalos-child-toys-games-536_360x.jpg",
        brand: "AAA",
        name: "The Gruffalo - The Gruffalo's Child",
        price: "$14<sup>99</sup>",
        link: "./Product_subpage/products(10).html"
    },
    {
        id: 11,
        image: "./images/product/Toys/tonie-starter-set-light-blue-toys-games-165_360x.jpg",
        brand: "CCC",
        name: "Tonie Starter Set - Light Blue",
        price: "$69<sup>95</sup>",
        link: "./Product_subpage/products(11).html"
    },
    {
        id: 12,
        image: "./images/product/Toys/tonie-starter-set-pink-toys-games-511_360x.jpg",
        brand: "CCC",
        name: "Tonie Starter Set - Pink",
        price: "$69<sup>95</sup>",
        link: "./Product_subpage/products(12).html"
    }],
    wellness: [{
        id: 13,
        image: "./images/product/Wellness & Hygiene/baby-hooded-towel-lion-bath-time-150_360x.jpg",
        brand: "BBB",
        name: "Baby Hooded Towel Lion",
        price: "$5<sup>99</sup>",
        link: "./Product_subpage/products(13).html"
    },
    {
        id: 14,
        image: "./images/product/Wellness & Hygiene/baby-hooded-towel-swan-bath-time-291_360x.jpg",
        brand: "BBB",
        name: "Baby Hooded Towel Swan",
        price: "$5<sup>99</sup>",
        link: "./Product_subpage/products(14).html"
    },
    {
        id: 15,
        image: "./images/product/Wellness & Hygiene/rawr-dinosaur-baby-changing-mat-bath-time-353_360x.jpg",
        brand: "BBB",
        name: "RAWR! Dinosaur Baby Changing Mat",
        price: "$12<sup>95</sup>",
        link: "./Product_subpage/products(15).html"
    },
    {
        id: 16,
        image: "./images/product/Wellness & Hygiene/star-potty-seats-254_360x.jpg",
        brand: "CCC",
        name: "Star Potty",
        price: "$2<sup>99</sup>",
        link: "./Product_subpage/products(16).html"
    }]
};


let listCompare = [];
let getArray = Object.keys(dataProducts).map(i => dataProducts[i]);
let newData = [];
getArray.forEach((item) =>{
    newData = newData.concat(item)
});


// Compare
const addListCompare = (event) => {
    const id = event.target.dataset.id;
    const findIndex = listCompare.findIndex(item => item.id == id);
    const findItem = newData.find(item => item.id == id);
    if (findIndex != -1) {
        listCompare.splice(findIndex, 1);
    } else {
        listCompare.push(findItem);
    }
    renderCompare(listCompare, false);
}
const modal = document.querySelector(".sidenav");
let checkClicked = document.querySelectorAll(".product_checkbox");
const renderCompare = (data, reset) => {
    checkClicked = document.querySelectorAll(".product_checkbox");
    if (reset) {
        listCompare = [];
        checkClicked.forEach(element => {
            element.checked = false;
        });
    }
    let productEle = document.querySelector("#table-compare tr");
    let content = "";
    for (let item of data) {
        content += `<td>
            <img src="${item.image}" alt="${item.id}">
            <p>Brand: ${item.brand}</p>
            <p>Product Name: ${item.name}</p>
            <p>Price: ${item.price}</p>
            </td>`;
    }
    productEle.innerHTML = content;
    if (listCompare.length > 1) {
        modal.classList.add("active");
    } else {
        modal.classList.remove("active");
    }

}
checkClicked.forEach(element => {
    element.addEventListener("click", addListCompare);
});

const closeCompare = document.querySelector(".remove-circle");
closeCompare.addEventListener("click", () => {
    renderCompare(newData, true);
})


const renderProducts = (data) => {
    let eleProducts = document.querySelector(".product_table");
    eleProducts.innerHTML = "";
    let content = "";
    for (let i in data) {
        content += `<div class="baby_Care" id="${i}">
        <div class="row_header">
          <p class="h1 row_header_left">${i}</p>
          ${i === "babyCare" ? `
                <div class="row_header_right sort_bar">Sort by:
                    <select class="select-items">
                        <option value="" selected="">[Sort...]</option>
                        <option value="name">Alphabetically A-Z</option>
                        <option value="name">Alphabetically Z-A</option>
                        <option value="price">Highest Price</option>
                        <option value="price">Lowest Price</option>
                    </select>
                </div>` : ""
            }
          
  </div>
        <div class="row_container">`
        content += data[i].map((item) => `<div class="grid_item img_hover_zoom">
        <div class="checkbox" data-toggle="tooltip" data-content="Select one more to compare">
          <input type="checkbox" class="product_checkbox" data-id="${item.id}" onclick="addListCompare(event)">
        </div>
        <a href="${item.link}" class="product_grid_item">
          <div class="product_grid_image" style="height: 176px;">
            <div class="product_grid_image__centered">

              <img src="${item.image}" class="image_product product_page">

            </div>
          </div>
          <span>Brand: ${item.brand}</span>
          <p>${item.name}</p>

          <div class="product_item_price">
            <span class="h1 medium--left">

              <span class="visually-hidden">Regular price</span>
              <small>${item.price}</small>
              
            </span>
          </div>

        </a>
      </div>`).join(" ");

        content += `</div>
      </div>`;
    }
    eleProducts.innerHTML = content;
}
renderProducts(dataProducts);

const search = document.querySelector("#tt_sb_inp");
const searchProducts = () => {
    const valueSearch = search.value;
    if (valueSearch === "") {
        renderProducts(dataProducts);
        return;
    }
    let result = {};
    for (let i in dataProducts) {
        result[i] = dataProducts[i].filter(product => product.name.toUpperCase().includes(valueSearch.toUpperCase()) || product.brand.toUpperCase().includes(valueSearch.toUpperCase()) || i.toUpperCase().includes(valueSearch.toUpperCase()));
    }
    renderProducts(result);
}
search.addEventListener("keyup", searchProducts);



// PRODUCT-subpage
function changeAvatar(avata) {
    document.getElementById("image").src = avata;
}











