const formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const key = 'feedback-form-state';

const data = localStorage.getItem(key);
if (data) {
  const getData = JSON.parse(data);
  form.elements.email.value = getData.email || '';
  form.elements.message.value = getData.message || '';

  formData.email = getData.email || '';
  formData.message = getData.message || '';
}
form.addEventListener('input', hole => {
  formData[hole.target.name] = hole.target.value.trim();
  localStorage.setItem(key, JSON.stringify(formData));
});

form.addEventListener('submit', hole => {
  hole.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log(formData);

  localStorage.removeItem(key);
  form.reset();
  formData.email = '';
  formData.message = '';
});
