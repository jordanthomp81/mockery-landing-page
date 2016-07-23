/*-------------------------------------
  EASY WAYPOINT FUNCTIONS
-------------------------------------*/
// Creates a standerd waypoint with the option of custom logic. To pass in
// the custom logic, just create a function with all the logic you would
// like to call when the waypoint is activated, then pass just the name of the
// function into this function without qoutes. Note that these waypoint functions are
// available to any js file in this project
// Example Single Waypoint: createWaypoint('.that', 'is-active', '35%', animateThat)
function createWaypoint(element, classToToggle, offset, cb) {
  return jQuery(element).waypoint(function(direction) {
    jQuery(element).toggleClass(classToToggle);
    if (typeof cb !== "undefined") {
      cb(element, classToToggle, offset, direction);
    }
  }, { offset: offset });
}

// A loop for standerd waypoint creation. Also has the ability to pass in custom
// logic, and classToToggle. Both are optional.
// Example Multiple Waypoints: waypointer(['.that', '#that', '#this'], 'resolved', '10%', animate);
function waypointer(elementArray, classToToggle, offset, cb) {
  for (var i=0; i < elementArray.length; i++) {
    createWaypoint(elementArray[i], classToToggle, offset, cb(elementArray[i]));
  }
  return true;
}

function benefitActive() {
  $('.benefit-item').toggleClass('active');
}

function footerActive() {
  $('.footer-copy-container').toggleClass('active');
  $('.logo-container').toggleClass('active');
  $('.navigation-container').toggleClass('active');
}

function featureActive() {
  console.log(arguments[0]);
  // $('.feature-container').toggleClass('active');
}

// This will be invoked when the page loads
;(function($){
  $(function() {

    // place waypoints here
    createWaypoint('.benefit-items-container', '', '70%', benefitActive);
    // waypointer(['.feature-one', '.feature-two', '.feature-three'], 'active', '30%', featureActive);
    createWaypoint('.feature-one', 'active', '-85%', featureActive);
    createWaypoint('.feature-two', 'active', '-145%', featureActive);
    createWaypoint('.feature-three', 'active', '-205%', featureActive);
    // footer-copy-container
    createWaypoint('.footer-form', 'active', '70%', footerActive);
  });
}(jQuery));
