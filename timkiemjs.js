
//cate header
var cate = document.querySelector('.category')
var cateInside = document.querySelector('.category__inside')
var overlay = document.querySelector('.overlay-cate')
cate.addEventListener('click', function () {
    overlay.style.display = 'block'
    cateInside.classList.add('category__inside--open')
})
overlay.addEventListener('click', function () {
    overlay.style.display = 'none'
    cateInside.classList.toggle('category__inside--open')
})

//cate show list
var arrowIcons = document.querySelectorAll('.category__inside-list i')
var cateListHeading = document.querySelectorAll('.category__inside-heading')
for (icon of arrowIcons) {
    icon.onclick = function () {
        this.classList.toggle('cate-list-open')
        var nextSibling = this.nextElementSibling;
        while (nextSibling) {
            nextSibling.classList.toggle('cate-item-open')
            nextSibling = nextSibling.nextElementSibling;
        }
        var prevSibling = this.previousElementSibling;
        while (prevSibling) {
            prevSibling.classList.toggle('change-to-primary-color')
            prevSibling = prevSibling.nextElementSibling;
        }
    }
}

// footer
var footerLists = document.querySelectorAll('.footer__content-heading');
var footerArrows = document.querySelectorAll('.footer__content-heading i')
for (list of footerLists) {
    list.onclick = function () {
        this.nextElementSibling.classList.toggle('js-footer-list')
        this.childNodes[0].classList.toggle('footer__arrow-change')
    }
}















//get product
var productApi = 'http://localhost:3000/products'


function getProduct(callBack) {
    fetch(productApi)
        .then(function (response) {
            return response.json();
        })
        .then(callBack)
}

//search
var searchResult = sessionStorage.searchValue;
function searchControl() {
    var resultBlock = document.querySelector('.header__search-result')
    var inputElement = document.querySelector('.header__search-input')
    var bodyElement = document.getElementsByTagName('body')[0]
    inputElement.onclick = function (e) {
        e.stopPropagation();
        resultBlock.classList.add('search-open')
    }
    bodyElement.onclick = function () {
        resultBlock.classList.remove('search-open')
    }
}
searchControl();

function search() {
    var resultBlock = document.querySelector('.header__search-result')
    var inputElement = document.querySelector('.header__search-input')
    var htmlresult = '';
    var count = 0;
    inputElement.onkeyup = function (e) {
        sessionStorage.searchValue = e.target.value
        if (e.which === 13) {
            moveToTimkiem();
        }
        setTimeout(function () {
            if (e.target.value.length > 1) {
                htmlresult = `<div class="loader-search">
                  <div class="lds-ripple"><div></div><div></div></div>
                </div>`
                resultBlock.innerHTML = htmlresult
            }
            setTimeout(function () {
                count = 0;
                getProduct(function (products) {
                    htmlresult = ''
                    htmlresult = products.map(function (product) {
                        if (product.pName.toUpperCase().indexOf(e.target.value.toUpperCase()) > -1 && e.target.value.length > 1) {
                            count++;
                            return `
                  <a href="" class="header__search-result-item" title="${product.pName}">
                    <img src="${product.img}" alt="" class="header__search-result-item-img">
                    <div class="header__search-result-item-info">
                      <div class="header__search-result-item-name">${product.pName}</div>
                      <div class="header__search-result-item-price">${product.price}đ</div>
                    </div>
                  </a>
                `
                        }
                    })
                    htmlresult = htmlresult.join('');
                    if (count > 0 && e.target.value.length > 1) {
                        htmlresult = `<div class="header__search-result-found">${htmlresult}<a href="" class="header__search-show-all-btn">Xem tất cả</a></div>`
                    }
                    else if (e.target.value != '' && e.target.value.length > 1) {
                        htmlresult = `<div class="header__search-result-not-found">Không có kết quả tìm kiếm</div>`
                    }
                    resultBlock.innerHTML = htmlresult
                })
            }, 1000)
        }, 500)

    }
}
search();
function moveToTimkiem() {
    window.location.replace("/timkiem.html")
}

function renderSearchResult(searchResult) {
    const heading = document.querySelector('.search-result__heading')
    const productsBlock = document.querySelector('.product-render-here')
    const searchInfo = document.querySelector('.search-info')
    var htmlresult = '';
    var count = 0;
    getProduct(function (products) {        //t dung json-server nen sua lai gium ik. thanks
        htmlresult = ''
        htmlresult = products.map(function (product) {
            if (product.pName.toUpperCase().indexOf(searchResult.toUpperCase()) > -1 && searchResult.length > 1) {
                count++;
                return `
                   <div class="col l-3 m-4 c-6">
                                <div class="product-item product-item--search-page">
                                    <div class="product-action">
                                        <a href="" class="product-action__link">
                                            <i class="ti-heart product-action__icon"></i>
                                        </a>
                                    </div>
                                    <a href="" class="product-item__link">
                                        <img src="${product.img}" alt="" class="product-item__img">
                                    </a>
                                    <div class="product-item__info product-item__info-action">
                                        <a href="" class="product-item__name" title="${product.pName}">${product.pName}</a>
                                        <div class="product-item__price">
                                        <span style="color: var(--primary-color);" class="product-item__price-current">${convertToVnd(product.price.toString())}₫</span>
                                        <span class="product-item__price-old">${convertToVnd(product.oldPrice.toString())}₫</span>
                                        </div>
                                    </div>
                                    <a href="" class="add-to-cart__link add-to-cart__action">
                                        <button style="background-color: var(--primary-color);" class="add-to-cart__btn">
                                        <i class="add-to-cart__icon ti-shopping-cart"></i>
                                        <span class="add-to-cart__text">Thêm vào giỏ</span>
                                        </button>
                                    </a>
                                </div>
                            </div>
                `
            }
        })
        htmlresult = htmlresult.join('');
        searchInfo.innerHTML = `${searchResult} - TEMPLATE STATIONERY`
        heading.innerHTML = `Tìm thấy ${count} kết quả với từ khóa " ${searchResult} "`
        productsBlock.innerHTML = htmlresult
    })
}
renderSearchResult(searchResult);
function convertToVnd(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}


