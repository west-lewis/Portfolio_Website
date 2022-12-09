
 




  /*jshint esversion: 6 */



  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };


  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener);
  };


var mainMenu = document.getElementById("mainMenu");
  /* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function menuToggle() {
  document.getElementById("drop").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (event.target == mainMenu) {
    var dropdowns = document.getElementsByClassName("dropdown");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.toggle('show');
      }
    }
  }
}

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top');
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 500) {
        backtotop.classList.add('visible');
      } else {
        backtotop.classList.remove('visible');
      }
    };
    window.addEventListener('load', toggleBacktotop);
    onscroll(document, toggleBacktotop);
  }

  
  

  
  
  

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }



  // Setting up the Variables
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var modalToggle = document.getElementById("modalButton");

//setting up the listener
  modalToggle.addEventListener("click", modalButtonClicked , false);

  function modalButtonClicked() {
      modal.style.display = "block";
    }


  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
  

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

/**
* What to do when an item enters the screen
* If it is in the screen, isIntersecting will be true.
* Add a class when it is.
*/
const intersectionCallback = (entries) => {
  for (const entry of entries) { // Loop over all elements that either enter or exit the view.
    if (entry.isIntersecting) { // This is true when the element is in view.
      entry.target.classList.add('show'); // Add a class.
    }
  }
  };
  
  /**
  * Create a observer and use the instersectionCallback as 
  * the instructions for what to do when an element enters
  * or leaves the view
  */
  const observer = new IntersectionObserver(intersectionCallback);
  
  /**
  * Get all .item elements and loop over them.
  * Observe each individual item.
  */
  const items = document.querySelectorAll('.bounce .glow');
  for (const item of items) {
  observer.observe(item);
  }
  

var carousel = document.querySelector('.carousel');
var cells = carousel.querySelectorAll('.carouselCell');
var selectedIndex = 0;
var cellWidth = carousel.offsetWidth;
var cellHeight = carousel.offsetHeight;
var isHorizontal = true;
var rotateFn = isHorizontal ? 'rotateY' : 'rotateX';
var radius, theta;
var cellCount = 3;


function rotateCarousel() {
  var angle = selectedIndex / cellCount * -360;
  carousel.style.transform = 'translateZ(-18rem) rotateY(' + angle + 'deg)';
}

var prevButton = document.querySelector('.previous-button');
prevButton.addEventListener( 'click', function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector('.next-button');
nextButton.addEventListener( 'click', function() {
  selectedIndex++;
  rotateCarousel();
});

function changeCarousel() {

  theta = 360 / cellCount;
  var cellSize = isHorizontal ? cellWidth : cellHeight;
  radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
  for ( var i=0; i < cells.length; i++ ) {
    var cell = cells[i];
    if ( i < cellCount ) {
      // visible cell
      cell.style.opacity = 1;
      var cellAngle = theta * i;
      cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
    } else {
      // hidden cell
      cell.style.opacity = 0;
      cell.style.transform = 'none';
    }
  }
}









  




  
