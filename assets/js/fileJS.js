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

var courseApi = 'http://localhost:3000/courses'
fetch(courseApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (course) {
        console.log(course)
    })
