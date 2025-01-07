// fetch element 
const menuIcon = document.querySelector('#menu-icon');  // fetched by using the id
const crossIcon= document.querySelector('.cross-icon');  // Fetched by using the class of the element.
const navbar= document.querySelector('.navbar');        //  First element of this class fetched here (Similrlly above)


menuIcon.addEventListener('click', function() {
    navbar.style = 'display:block';
    menuIcon.style= 'display:none';   // Don't display and don't reserve any space for it(menuIcon).
    crossIcon.style= 'display:block';
});

crossIcon.addEventListener('click', function() {
    navbar.style = 'display:none';
    menuIcon.style= 'display:block';
    crossIcon.style= 'display:none';
});


const fullParagraph = document.getElementById('fullParagraph'); // that we want to show.
const button = document.getElementById('readMoreButton');

// About section "Read More" button
button.addEventListener("click", () => {
    if (!fullParagraph.classList.contains('expanded')) {
        fullParagraph.classList.add('expanded');
        // Delay the button text change to match the expansion animation (set to 0.8 s in CSS transition)
        setTimeout(()=>{
            button.innerHTML= "Read Less";
        },500);
        
    } else { // If present "expanded" class
        fullParagraph.classList.remove('expanded');

        // Delay the button text change to match the collapse animation (set to 0.8 s in CSS transition)
        setTimeout(()=>{
            button.innerHTML= "Read More";
        },800);   // 800ms (0.8 s) : Match this duration with the CSS transition duration 
        
    }
});





const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    // Collect form data
    const formData = {  // As object
        full_name: document.getElementById('full_name').value,
        email: document.getElementById('email').value,
        phone_number : document.getElementById('phone_number').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };



// Send the email using EmailJS (When user submits form without using backend)
/*
To send a message to your email when a user submits the form, you can use an email service like EmailJS or a backend service. Below is a simple way using EmailJS, which doesn't require backend code.

# Steps:
1- Sign Up for EmailJS.COM:

2- Go to EmailJS.
-Sign up for an account and create a service.
-Get your service_id, template_id, and user_id from the dashboard.
-Include the EmailJS Library: Add the <script> tag (lIBRARY INCLUDEDI IN html WHICH WE GOT FROM 'DOCS' TAB OF eMAILjs.COM SITE" before the closing </body> tag in your HTML to include EmailJS.    

3- BELOW JAVASCRIPT STEPS
*/
    // Step 1: Make sure emailjs.init() is called before the emailjs.send() function is invoked.
    try {
        emailjs.init("xDDglGuwqXTScVPTN");
        console.log("EmailJS initialized successfully!"); // JUST TO CHECK WHETHER  EMAILJS IS INITIALISED.
      } catch (error) {
        console.error("Initialization failed: ", error);
      }
      

// Step 2:emailjs.send('your_service_id', 'template_xxx123', Data-object)
    
    emailjs.send('umar@123', 'template_xzdyhip', formData)
    .then((response) =>{
        console.log('Success!', response);  // For ourself to check on console
        alert('Message sent successfully!');  // for user 
        form.reset(); // once form sent , clear for next
      }).catch((error) => {
        console.log('Failed...', error);
        alert('Something went wrong, please try again.');
      });


      // sAME using async await


      /*
     try {
        const response = await emailjs.send('umar_123', 'template_xzdyhip', formData);  // Make callback of addEventListener() as asunc as  form.addEventListener("submit", async(event) => ... above
        console.log('Success!', response);
        alert('Message sent successfully!');
      } catch (error) {
        console.log('Failed...', error);
        alert('Something went wrong, please try again.');
      }
    */      

});
