// Get the DOM elements
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const hero = document.querySelector('.hero');
const services = document.querySelectorAll('.service');
const form = document.querySelector('form');

// Function to handle sticky header
const handleStickyHeader = () => {
  if (window.scrollY > nav.offsetHeight + 150) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}

// Function to handle smooth scroll
const handleSmoothScroll = (event) => {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href');
  const targetSection = document.querySelector(targetId);
  const targetOffset = targetSection.offsetTop - header.offsetHeight;
  window.scrollTo({
    top: targetOffset,
    behavior: 'smooth'
  });
}

// Function to handle service hover
const handleServiceHover = (event) => {
  event.currentTarget.querySelector('i').classList.toggle('fa-spin');
}

// Function to handle form submission
const handleFormSubmit = (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  // Do something with the form data, like sending it to the server using an AJAX request
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  // Reset the form
  form.reset();
}

// Add event listeners
window.addEventListener('scroll', handleStickyHeader);
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', handleSmoothScroll);
});
services.forEach(service => {
  service.addEventListener('mouseenter', handleServiceHover);
  service.addEventListener('mouseleave', handleServiceHover);
});
form.addEventListener('submit', handleFormSubmit);
