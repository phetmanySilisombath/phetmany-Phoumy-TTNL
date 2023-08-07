let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";

}





let slideIndeX = 0;
showSlider();

function showSlider() {
  let n;
  let slider = document.getElementsByClassName("mySlider");
  let dots = document.getElementsByClassName("dot");
  for (n = 0; n < slider.length; n++) {
    slider[n].style.display = "none";  
  }
  slideIndeX++;
  if (slideIndeX > slider.length) {slideIndeX = 1}    
  for (n = 0; n < dots.length; n++) {
    dots[n].className = dots[n].className.replace(" active", "");
  }
  slider[slideIndeX-1].style.display = "block";  
  dots[slideIndeX-1].className += " active";
  setTimeout(showSlider, 7000); // Change image every 2 seconds
}



var countDownDate = new Date();
countDownDate.setHours(countDownDate.getHours() + 1); // Đếm ngược trong 2 giờ
countDownDate.setMinutes(countDownDate.getMinutes() + 2); // Đếm ngược trong 30 phút

function updateCountdown() {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  // Tính toán giờ, phút và giây còn lại
 
  document.getElementById("hours").innerText = Math.floor(distance / (170 * 60 * 60));
  document.getElementById("minutes").innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById("seconds").innerText = Math.floor((distance % (1000 * 60)) / 1000);

  // Hiển thị số ngược trong phần tử có id "countdown"
 
  

  // Nếu số ngược đã kết thúc, hiển thị thông báo
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("countdown").textContent = "Đếm số ngược đã kết thúc";
  }
}

// Cập nhật số ngược mỗi giây (1000 mili giây)
var countdownInterval = setInterval(updateCountdown, 1000);






const carousel = document.querySelector(".hang");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcon = document.querySelectorAll(".wapperhanghoa i");

let isDragStart = false ;
let prePageX, prevScrollLeft;
let frittImgWidth = firstImg.clientWidth;

arrowIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    console.log(icon);
    const speedFactor = 4; // Hệ số tốc độ
    carousel.scrollLeft += icon.id === "left" ? -frittImgWidth * speedFactor : frittImgWidth * speedFactor;
  });
});



const dragStart = (e) => {
  isDragStart = true;
  prePageX = e.pageX;
  prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  let positionDiff = e.pageX - prePageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
  isDragStart = false;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

carousel.addEventListener("touchstart", (e) => {
  const touch = e.touches[0];
  dragStart(touch);
});

carousel.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  dragging(touch);
});

carousel.addEventListener("touchend", dragStop);








const carouselhai = document.querySelector(".hanghai");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcon = document.querySelectorAll(".wapperhanghoa i");

let isDragStarthai = false;
let frittImgWidthhai = firstImg.clientWidth;

arrowIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    console.log(icon);
    const speedFactor = 4; // Hệ số tốc độ
    carouselhai.scrollLeft += icon.id === "left" ? -frittImgWidthhai * speedFactor : frittImgWidthhai * speedFactor;
  });
});





const carouseltow = document.querySelector(".sanphamgiarequa");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcon = document.querySelectorAll(".giarequa i");

let isDragStarttow = false;
let frittImgWidthtow = firstImg.clientWidth;

arrowIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    console.log(icon);
    const speedFactor = 4; // Hệ số tốc độ
    carouseltow.scrollLeft += icon.id === "lefttow" ? -frittImgWidthtow * speedFactor : frittImgWidthtow * speedFactor;
  });
});



window.addEventListener("scroll", function() {
  var adContainer = document.querySelector(".ad-container");
  var containerRect = document.querySelector(".container").getBoundingClientRect();
  var adContainerRect = adContainer.getBoundingClientRect();

  var adTop = containerRect.top + adContainerRect.height / 2 + 1;
  var adBottom = containerRect.bottom - adContainerRect.height / 1;

  if (window.pageYOffset > adTop) {
    adContainer.style.transform = "translate(-50%, -50%)";
    adContainer.style.display = "block";
  } else if (window.pageYOffset > adBottom) {
    adContainer.style.display = "none";
  } else {
    adContainer.style.transform = "translate(-12250%, " + (window.pageYOffset - adTop + window.innerHeight / 2) + "px)";
    adContainer.style.display = "block";
  }
});



const carouseltivi = document.querySelector(".anhgiare");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcon = document.querySelectorAll(".tivigiare i");

let isDragStarttivi = false;
let frittImgWidtivi = firstImg.clientWidth;

arrowIcon.forEach(icon => {
  icon.addEventListener("click", () => {
    console.log(icon);
    const speedFactor = 4; // Hệ số tốc độ
    carouseltivi.scrollLeft += icon.id === "lefttivi" ? -frittImgWidtivi * speedFactor : frittImgWidtivi * speedFactor;
  });
});




const hambar = document.querySelector(".hambar");
const navmenu = document.querySelector(".nav-menu");

hambar.addEventListener("clike", () => {
      hambar.classList.toggle("active");
      navmenu.classList.toggle("active");
})





// Function to open the modal
function openModal() {
  document.getElementById("myModalBar").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("myModalBar").style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
  var modal = document.getElementById("myModalBar");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
