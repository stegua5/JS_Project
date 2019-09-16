// iife (iffy)
(function(){
    

/**
 * @name topSlider
 * @desc  slideshow photo restaurants top of the page
 */       
function topSlider() { 
    $(".rslides").responsiveSlides(
            {
                speed: 300,            // Integer: Speed of the transition, in milliseconds
                timeout: 12000          // Integer: Time between slide transitions, in milliseconds
            }
    );
};
  

/**
 * @name italianComments
 * @desc  slideshow comments italian restaurant
 */    
let slideIndex = 0;

function italianComments() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }//mySlides are hidden at the beginning
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }//dots become active
  slides[slideIndex-1].style.display = "block";  
  setTimeout(italianComments, 3000); // Change image every 2 seconds
}//function italian comments change every 3 seconds
    
 /**
 * @name galleryRestaurants
 * @desc  jQuery Plugin zooming gallery for all restaurants
 */  
function galleryRestaurants(){ 
        $('#italianG').simpleLightbox();
        $('#spanishG').simpleLightbox();
        $('#chineseG').simpleLightbox();
};


 /**
 * @name spanishComments
 * @desc  slideshow comments spanish restaurant
 */   
let spainIndex = 0;

function spanishComments() {
  let i;
  let slides = document.getElementsByClassName("spainSlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }//mySlides are hidden at the beginning
  spainIndex++;
  if (spainIndex > slides.length) {spainIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }//dots become active
  slides[spainIndex-1].style.display = "block";  
  setTimeout(spanishComments, 3000); // Change image every 4 seconds
}//function spanish comments change every 3 seconds
    


 /**
 * @name chinaComments
 * @desc  slideshow comments chinese restaurant
 */    
let chinaIndex = 0;

function chinaComments() {
  let i;
  let slides = document.getElementsByClassName("chinaSlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }//mySlides are hidden at the beginning
  chinaIndex++;
  if (chinaIndex > slides.length) {chinaIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }//dots become active
  slides[chinaIndex-1].style.display = "block";  
  setTimeout(chinaComments, 3000); // Change image every 4 seconds
}//funcion China comments change every 3 seconds
      


  /**
 * @name showData
 * @desc  get the values of all input fields
 * @desc  show the values inside the modal window
 */  
    function showData(){    
        let firstname = $("#firstname").val();
        let lastname = $("#lastname").val();
        let email = $("#email").val();
        let people = $("#people").val();
        let date = $("#date").val();
        let time = $("#time").val();
        let phone = $("#phone").val();
        let restaurant = $("#restaurant").val();
        
        const submitBtn = document.getElementById("submitBtn");
        const resetBtn = document.getElementById("resetBtn");


        $('#dentroName').html(firstname);
        $('#dentroLastname').html(lastname);
        $('#dentroEmail').html(email);
        $('#dentroPeople').html(people);
        $('#dentroDate').html(date);
        $('#dentroTime').html(time);
        $('#dentroPhone').html(phone);
        $('#dentroRestaurant').html(restaurant);
        modal.style.display = "block";
    } // showData inside the modal window

        
// Get the modal window
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the form
const myForm = document.getElementById("myForm");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];
    
  
    
/**
 * @name  jqValidation
 * @desc  this function gives the rules of the form validation
 * @desc  error messages if some fields are missing
 */
function jqValidation(){
    $("form[name='bookingForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: "required",
      lastname: "required",
      restaurant: {
            required: true
        },
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      },
      phone: "required",
      people: "required",
      time: "required",    
      date: "required",
    },
    // Specify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 5 characters long",
      },
      email: "Please enter a valid email address",
      phone: "Please enter your mobile number",
      time: "Please select a time",    
      people: "Please select how many people",
      date: "Please select a date"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      //form.submit();
    }
  });
} 

    
/**
 * @name  validateForm
 * @desc  form return valid if all fields are correct
 */
function validateForm(){
    if(
        // email valido &&
        // name valido &&
        $("form[name='bookingForm']").valid()
        
    ){
        //alert(1)
        return true;
    } else {
        //alert(2)
        return false;
    }
}//function return true if all form fields are valid

    
/**
 * @name  handleFormSubmission()
 * @desc  this function prevent default to disable inbuilt submission  
 */  
function handleFormSubmission(){
  // listen to myForm submission and trigger prevent default to disable inbuilt submission  
    
  myForm.addEventListener("submit", function(e){
      e.preventDefault();
      if( validateForm() ){
          //alert(234)
          showData();
          console.log(2);
      }
  //prevent submit form if all fields are validate
});
} 

    
/**
 * @name  closeModal()
 * @desc  this function open and close the modal window
 */  
function closeModal() { 

span.addEventListener("click", function(){
    modal.style.display = "none";
}); //close the modal on the cross button

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }//close the modal clicking outside the modal window
});

}


/**
 * @name  handleFinalModalButtons
 * @desc  this function submit and and reset the form
 * @param   {number}  numero    un numero da alertare
 */
function handleFinalModalButtons(numero) {
  // alert(numero);
  submitBtn.addEventListener("click", function(){
    modal.style.display = "none";
    myForm.submit();
  });//submit the form and closing the modal window

  resetBtn.addEventListener("click", function(){
    modal.style.display = "none";
    myForm.reset();
  });//reset the form and close the modal window
}    


    
/*init function with all the functions inside */
function init () {
    topSlider();
    italianComments();
    spanishComments();
    chinaComments();

    galleryRestaurants();
    
    jqValidation();  

    handleFormSubmission();
    
    closeModal();
    
    handleFinalModalButtons(123);
    
}// init


    
/*load init function */   
window.addEventListener('load', init);    
})();

