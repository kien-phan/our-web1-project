//cate header
var cate = document.querySelector('.category')
var cateInside = document.querySelector('.category__inside') 
var overlay = document.querySelector('.overlay-cate')   
cate.addEventListener('click', function () {
    overlay.style.display = 'block';
})
overlay.addEventListener('click', function () {
    overlay.style.display = 'none'
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
var x = setInterval(function() {

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
                <div class="timr__item-numbers">${minutes}</div>
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

//product
var courseApi = 'http://localhost:3000/courses'
fetch(courseApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (course) {
        console.log(course)
    })

        

