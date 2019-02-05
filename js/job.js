var staticContent = {
    SubCategory: {
        subCategory1: "Creative",
        subCategory2: "Marketing ",
        subCategory3: "Sales ",
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
    for (let subcategory of Object.values(staticContent.SubCategory)) {
        html = "<span>"+subcategory+"</span>";
        $("#subcategory").append(html);
    }       
}
function setSpecialism() {
    for (let special of Object.values(staticContent.Specialism)) {
        html = "<span>"+special+"</span>";
        $("#specialism").append(html);
    }
}

function setTab() {
    for (let tab of Object.values(staticContent.Tab)) {
        html = "<span>"+tab+"</span>";
        $("#tab").append(html);
    }
}

function setProducts() {
    
    for(var i = 1; i<= products.length; i++) {
        var product = products[i-1].product;
        html = `<div class="job-card">
                    <div class='main-title'>
                        <p class='head'>`+product.title+`</p>
                        <span>`+product.subtitle+`</span>
                    </div>
                    <div class='main-info'><p>`+product.information+`</p></div>
                    <div class='main-cost'>
                        <b>`+product.surrey+`</b>
                        <b>`+product.petmanet+`</b>
                        <b>`+product.minCost+`</b>
                        <b>`+product.maxCost+`</b>
                        <b>`+product.bens+`</b>
                    </div>
                    <div class='main-btn'>
                        <div class="btn-view">View</div>
                        <div class="btn-apply"> Apply</div>
                    </div>
                </div>`;
        $("#job-card").append(html);
    }
}

$(document).ready(function() {
    setTab();
    setSubcategory();
    setSpecialism();
    setProducts();
});