// Получаем элементы DOM
const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

// Функция для загрузки и отображения опроса
async function loadAndDisplayPoll() {
  try {
    // Отправляем GET-запрос для получения данных опроса
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Отображаем вопрос опроса
    pollTitle.textContent = data.data.title;
    
    // Очищаем предыдущие варианты ответов
    pollAnswers.innerHTML = '';
    
    // Создаем кнопки для каждого варианта ответа
    data.data.answers.forEach(answer => {
      const answerButton = document.createElement('button');
      answerButton.className = 'poll__answer';
      answerButton.textContent = answer;
      
      // Добавляем обработчик клика на кнопку
      answerButton.addEventListener('click', () => {
        alert('Спасибо, ваш голос засчитан!');
      });
      
      pollAnswers.appendChild(answerButton);
    });
    
  } catch (error) {
    console.error('Произошла ошибка при загрузке опроса:', error);
    pollTitle.textContent = 'Не удалось загрузить опрос. Пожалуйста, попробуйте позже.';
  }
}

// Загружаем и отображаем опрос при загрузке страницы
document.addEventListener('DOMContentLoaded', loadAndDisplayPoll);