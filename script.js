// JavaScript for form validation
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        // event.preventDefault(); // Prevent the form from submitting right away

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === "" || email === "" || subject === "" || message === "") {
            alert('Please fill out all fields');
            return;
        }

        // Validate Email
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Simulate form submission
        alert('Message sent successfully!');

        // Reset form
        contactForm.reset();
    });

    // Function to validate email using a simple regex pattern
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});


// FAQ Toggle Functionality
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Toggle active class
        item.classList.toggle('active');

        // Close other open items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
    });
});
















function nav() {
    document.querySelector(".nav").style.borderBottom = "2px solid rgb(0, 148, 153)";
    document.querySelector(".nav").style.transition = ".3s";
}
let i = 0;

function appdiss() {
    if (i % 2 == 0) {
        document.querySelector(".menu-content").style.transition = ".3s";
        document.querySelector(".menu-content").style.display = "flex";
        document.querySelector(".menu-content").style.flexDirection = "column";
        document.querySelector(".l1").style.transform = "rotate(45deg)";
        document.querySelector(".l1").style.top = "5px";
        document.querySelector(".l2").style.bottom = "5px";
        document.querySelector(".l2").style.transform = "rotate(-45deg)";
        document.querySelector(".l3").style.display = "none";
        i++;
        console.log(i);
    }
    else {
        document.querySelector(".menu-content").style.display = "none";
        document.querySelector(".l1").style.transform = "rotate(0deg)";
        document.querySelector(".l1").style.top = "0px";
        document.querySelector(".l2").style.transform = "rotate(0deg)";
        document.querySelector(".l3").style.display = "block";
        document.querySelector(".l2").style.bottom = "0px";
        i++;
        console.log(i);
    }
}
let j=0;
function selected_s1()
{
    if(j % 2 == 0)
    {
        document.querySelector(".s1").style.background = "rgb(0, 110, 114)";
        j++;
    }
    else
    {
        document.querySelector(".s1").style.background = "transparent";
        j++;
    }
}
let k=0;
function selected_s2()
{
    if(k % 2 == 0)
    {
        document.querySelector(".s2").style.background = "rgb(0, 110, 114)";
        k++;
    }
    else
    {
        document.querySelector(".s2").style.background = "transparent";
        k++;
    }
    
}
let l=0;
function selected_s3()
{
    if(l % 2 == 0)
    {
        document.querySelector(".s3").style.background = "rgb(0, 110, 114)";
        l++;
    }
    else
    {
        document.querySelector(".s3").style.background = "transparent";
        l++;
    }
}




AOS.init();