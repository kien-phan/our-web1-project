//product
var productApi = 'http://localhost:3000/products'

// function start() {
//   getProduct(function (products) {
//     renderProducts(products)
//   })
// }

function start() {
  getProduct(renderProducts)  //truyen thang 1 function
}
start();
//function
function getProduct(callBack) {
  fetch(productApi)
    .then(function (response) {
      return response.json();
    })
    .then(callBack)
}

function renderProducts(products) {
  var listProductsBlock3 = document.querySelector('.carousel-3')
  var listProductsBlock4 = document.querySelector('.carousel-4')
  var htmls3 = products.map(function (product) {
    if (product.category == 'book') {
      return `
        <div class="product-item">
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
              <span style="color: var(--primary-color);" class="product-item__price-current">${product.price}</span>
              <span class="product-item__price-old">${product.oldPrice}</span>
            </div>
          </div>
          <a href="" class="add-to-cart__link add-to-cart__action">
            <button style="background-color: var(--primary-color);" class="add-to-cart__btn">
              <i class="add-to-cart__icon ti-shopping-cart"></i>
              <span class="add-to-cart__text">Thêm vào giỏ</span>
            </button>
          </a>
        </div>
      `
    }
  })
  listProductsBlock3.innerHTML = htmls3.join('');
  var htmls4 = products.map(function (product) {
    if (product.category == 'notebook') {
      return `
        <div class="product-item">
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
              <span style="color: var(--primary-color);" class="product-item__price-current">${product.price}</span>
              <span class="product-item__price-old">${product.oldPrice}</span>
            </div>
          </div>
          <a href="" class="add-to-cart__link add-to-cart__action">
            <button style="background-color: var(--primary-color);" class="add-to-cart__btn">
              <i class="add-to-cart__icon ti-shopping-cart"></i>
              <span class="add-to-cart__text">Thêm vào giỏ</span>
            </button>
          </a>
        </div> 
      `
    }
  })
  listProductsBlock4.innerHTML = htmls4.join('');
  /* section-5 */
  $('.carousel-3').slick({
    rows: 2,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false
        }
      }
    ]
  });

  $('.carousel-4').slick({
    rows: 2,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 739,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: false
        }
      }
    ]
  });
}

function handleCreateForm() {
  var createBtn = document.querySelector('#create')
  createBtn.onclick = function () {
    var pName = document.querySelector('input[name="pName"]').value;
    var des = document.querySelector('input[name="des"]').value;
    var formData = {
      name: pName,
      des: des
    };
    createProduct(formData, function () {
      getProduct(renderProducts)
    });
  }
}

function createProduct(data, callBack) {
  var options = {
    method: 'POST',
    headers: {
      'Content-Type': 'aplication/json'
    },
    body: JSON.stringify(data)
  }
  fetch(productApi, options)
    .then(function (response) {
      response.json();
    })
    .then(callBack);
}

//thêm vào nút xóa onclick = "handleDeleteProduct(${product.id})"
//thêm class = "product-item-id-${product.id}"
function handleDeleteProduct(id) {
  var options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'aplication/json'
    }
  }
  fetch(productApi + '/' + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      var productItem = document.querySelector('.product-item-' + id)
      if (productItem) {
        productItem.remove();
      }
    });
}

// hàm gửi ycau cập nhật
function updateCourse(id, data) {
  fetch(coursesApi + '/' + id, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    //    sau khi fetch. dc trả về chính dữ liệu dc gửi đi
    .then(response => response.json()) // biến nó từ JSON -> JS
    .then(function () {
      getCoursesApi(renderHtml) // gọi lại hàm, render ra html lại từ đầu
    })
}

function handleUpdateCourse(id) { /// nhận id on line 25
  // nhận name, desc cũ theo class id để hiển thị ở input
  var oldName = document.querySelector('.course-name-' + id)
  var oldDesc = document.querySelector('.course-desc-' + id)

  // lấy element node: name, desc để gán giá trị mới làm data gửi đi
  var newName = document.querySelector('input[name="name"]')
  var newDesc = document.querySelector('input[name="desc"]')
  // gán giá trị mới để gửi đi
  newName.value = oldName.innerText
  newDesc.value = oldDesc.innerText

  var createBtn = document.querySelector('#createBtn')
  createBtn.style.display = 'none'

  var updateBtn = document.querySelector('#updateBtn')
  updateBtn.style.display = 'block'
  updateBtn.onclick = function () {
    var formData = {
      name: newName.value,
      desc: newDesc.value
    }
    // gọi hàm thực thi gửi yêu cầu, truyền id & data
    updateCourse(id, formData)
    //    reset input
    document.querySelector('input[name="name"]').value = ""
    document.querySelector('input[name="desc"]').value = ""
  }
}

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


//flash sale timer
var countDownDate = new Date("Jan 1, 2022 0:0:0").getTime();
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.querySelector('.timer').innerHTML =
    `
        <ul class="timer__block">
            <li class="timer__item">
                <div class="timer__item-heading">Ngày</div>
                <div class="timer__item-numbers">${days}</div>
            </li>
            <li class="timer__item">
                <div class="timer__item-heading">Giờ</div>
                <div class="timer__item-numbers">${hours}</div>
            </li>
            <li class="timer__item">
                <div class="timer__item-heading">Phút</div>
                <div class="timer__item-numbers">${minutes}</div>
            </li>
            <li class="timer__item">
                <div class="timer__item-heading">Giây</div>
                <div class="timer__item-numbers">${seconds}</div>
            </li>
        </ul>
        `

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.querySelector('.timer').innerHTML = "EXPIRED";
  }
}, 1000);

// footer
var footerLists = document.querySelectorAll('.footer__content-heading');
var footerArrows = document.querySelectorAll('.footer__content-heading i')
for (list of footerLists) {
  list.onclick = function () {
    this.nextElementSibling.classList.toggle('js-footer-list')
    this.childNodes[0].classList.toggle('footer__arrow-change')
  }
}


// like
var productLikeLinks = document.querySelectorAll(".product-action__link")
var quantityOfLike = document.querySelector('.header__user-count');
var likeNumber = parseInt(quantityOfLike.innerText);
for (var link of productLikeLinks) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    var icon = this.querySelector('.product-action__icon')
    if (icon.classList.contains('ti-heart')) {
      icon.classList.remove('ti-heart')
      icon.classList.add('fas', 'fa-heart')
      likeNumber += 1
      quantityOfLike.innerText = likeNumber
    }
    else {
      icon.classList.add('ti-heart')
      icon.classList.remove('fas', 'fa-heart')
      likeNumber -= 1
      quantityOfLike.innerText = likeNumber
    }
  })
}

//section 2
$('.section-2__category').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 9999,
      settings: 'unslick'
    },
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }
  ],
  prevArrow: '.section-2__arrow-prev',
  nextArrow: '.section-2__arrow-next'
});

/* section 3 */
$('.carousel').slick({
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false
      }
    }
  ],
  prevArrow: '.carousel-control-prev',
  nextArrow: '.carousel-control-next'
});

/* section 4 */
$('.carousel-2').slick({
  dots: true,
  infinite: false,
  speed: 400,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    },
    {
      breakpoint: 739,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        dots: true
      }
    }
  ]
});

//search
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
                      <div class="header__search-result-item-price">${convertToVnd(product.price.toString())}đ</div>
                    </div>
                  </a>
                `
            }
          })
          htmlresult = htmlresult.join('');
          if (count > 0 && e.target.value.length > 1) {
            htmlresult = `<div class="header__search-result-found">${htmlresult}<a href="/timkiem.html" class="header__search-show-all-btn">Xem tất cả</a></div>`
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
function convertToVnd(num) {
  return num.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
function moveToTimkiem() {
  window.location.href = "/timkiem.html"
}


