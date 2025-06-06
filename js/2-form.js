const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

// Завантаження даних зі сховища
loadFormData();

form.addEventListener('input', e => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', e => {
  e.preventDefault();

  const { email, message } = formData;
  if (!email || !message) {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);
  form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
});

function loadFormData() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;

  formData = JSON.parse(saved);

  if (formData.email) form.elements.email.value = formData.email;
  if (formData.message) form.elements.message.value = formData.message;
}
