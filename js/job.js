var staticContent = {
    SubCategory: {
        subCategory1: "Creative",
        subCategory2: "Marketing ",
        subCategory3: "Marketing ",
        subCategory4: "Technology ",
        subCategory5: "Production ",
        subCategory6: "Food Service ",
    },
    Specialism: {
        specialism1: "Analytics",
        specialism2: "Biddable Media",
        specialism3: "SEO",
        specialism4: "CRM",
        specialism5: "eCommerce",  
    },
    Tab: {
        tab1: "All",
        tab2: "Contract",
        tab3: "Permanent"
    }
};

var products = [
    {
        product: {
            title: "EMEA Marketing Lead1",
            subtitle: "Marketing & Communications",
            information: "EMEA Marketing Lead - London - £60-80K plus Bonus My client are on a mission to eliminate fraud within the world of ecommerce. Since 2013, they have been innovating fraud…",
            surrey: "Surrey",
            petmanet: "Permanent",
            minCost: " £50000.00",
            maxCost: "£58000.00 per ",
            bens: "annum + bens"
        }
    },
    {
        product: {
            title: "EMEA Marketing Lead2",
            subtitle: "Marketing & Communications",
            information: "EMEA Marketing Lead - London - £60-80K plus Bonus My client are on a mission to eliminate fraud within the world of ecommerce. Since 2013, they have been innovating fraud…",
            surrey: "Surrey",
            petmanet: "Permanent",
            minCost: " £50000.00",
            maxCost: "£58000.00 per ",
            bens: "annum + bens"
        }
    },
    {
        product: {
            title: "EMEA Marketing Lead3",
            subtitle: "Marketing & Communications",
            information: "EMEA Marketing Lead - London - £60-80K plus Bonus My client are on a mission to eliminate fraud within the world of ecommerce. Since 2013, they have been innovating fraud…",
            surrey: "Surrey",
            petmanet: "Permanent",
            minCost: " £50000.00",
            maxCost: "£58000.00 per ",
            bens: "annum + bens"
        }
    }
];
function setSubcategory() {
    $(".subcategory-title1").text(staticContent.SubCategory.subCategory1);    
    $(".subcategory-title2").text(staticContent.SubCategory.subCategory2);    
    $(".subcategory-title3").text(staticContent.SubCategory.subCategory3);
    $(".subcategory-title4").text(staticContent.SubCategory.subCategory4);    
    $(".subcategory-title5").text(staticContent.SubCategory.subCategory5);    
    $(".subcategory-title6").text(staticContent.SubCategory.subCategory6);        
}
function setSpecialism() {
    $(".specialism-title1").text(staticContent.Specialism.specialism1);    
    $(".specialism-title2").text(staticContent.Specialism.specialism2);    
    $(".specialism-title3").text(staticContent.Specialism.specialism3);
    $(".specialism-title4").text(staticContent.Specialism.specialism4);    
    $(".specialism-title5").text(staticContent.Specialism.specialism5);    
}

function setTab() {
        $(".tab-title1").text(staticContent.Tab.tab1);    
        $(".tab-title2").text(staticContent.Tab.tab2);    
        $(".tab-title3").text(staticContent.Tab.tab2);
}

// function setProducts() {
//     for (var i = 1; i<= products.length; i++) {
//         console.log(html);
//         html = "<div class='main-title'><p class='head'>"+products[i].product.title+"</p><span>"+products[i].product.subtitle+"</span></div><div class='main-info'><p>"+products[i].product.information+"</p></div><div class='main-cost'><b>"+products[i].product.surrey+"</b><b>"+products[i].product.petmanet+"</b><b>"+products[i].product.minCost+"</b><b>"+products[i].product.maxCost+"</b><b>"+products[i].product.bens+"</b></div><div class='main-btn'>Viw Apply</div>";

//     }
//     $("#job-card").append(html);
// } 

$(document).ready(function() {
    setTab();
    setSubcategory();
    setSpecialism();
    // setProducts();
});