const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');

async function loadAndDisplayPoll() {
  try {
    const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
    
    if (!response.ok) {
      throw new Error(`Ошибка HTTP: ${response.status}`);
    }
    
    const data = await response.json();

    pollTitle.textContent = data.data.title;

    pollAnswers.innerHTML = '';

    data.data.answers.forEach(answer => {
      const answerButton = document.createElement('button');
      answerButton.className = 'poll__answer';
      answerButton.textContent = answer;

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

document.addEventListener('DOMContentLoaded', loadAndDisplayPoll);