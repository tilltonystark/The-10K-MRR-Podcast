const revealItems = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealItems.forEach((item) => observer.observe(item));

const form = document.getElementById('guest-form');
const message = document.getElementById('form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const fields = Array.from(form.querySelectorAll('input[required], textarea[required]'));
  const invalid = fields.find((field) => !field.value.trim());

  if (invalid) {
    message.textContent = 'Please fill out every field before submitting.';
    message.style.color = '#C4B896';
    invalid.focus();
    return;
  }

  message.textContent = "We'll be in touch. Thanks for building something real.";
  message.style.color = '#C8E63C';
  form.reset();
});
