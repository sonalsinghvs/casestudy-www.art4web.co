var navButton = document.querySelector('.bar-4');
navButton.addEventListener('click', function() 
{ console.log('clicky!!!');
 document.querySelector('body')
 .classList
 .toggle('nav-open');
});                       
 
var closeButton = 
    document.querySelector('.close-icon');

closeButton.addEventListener('click', function() {
  console.log('close it!');
  document.querySelector('body')
 .classList
 .toggle('nav-open');
} );

