document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.getElementById('signin__form');
  const signinBlock = document.getElementById('signin');
  const welcomeBlock = document.getElementById('welcome');
  const userIdSpan = document.getElementById('user_id');
  const storageKey = 'user_id';

  const savedUserId = localStorage.getItem(storageKey);
  if (savedUserId) {
    showWelcomeBlock(savedUserId);
  }

  signinForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(signinForm);

    fetch('https://students.netoservices.ru/nestjs-backend/auth', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Ошибка сети');
      }
      return response.json();
    })
    .then(data => {
      if (data.success) {
        localStorage.setItem(storageKey, data.user_id);
        showWelcomeBlock(data.user_id);
      } else {
        alert('Неверный логин/пароль');
      }
    })
    .catch(error => {
      console.error('Ошибка:', error);
      alert('Произошла ошибка при авторизации');
    });
  });

  function showWelcomeBlock(userId) {
    userIdSpan.textContent = userId;
    signinBlock.classList.remove('signin_active');
    welcomeBlock.classList.add('welcome_active');
  }
});
