document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const progress = document.getElementById('progress');
  const fileInput = document.getElementById('file');
  const fileNameSpan = document.querySelector('.input__wrapper-desc');

  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileNameSpan.textContent = fileInput.files[0].name;
    } else {
      fileNameSpan.textContent = 'Имя файла...';
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!fileInput.files.length) {
      alert('Пожалуйста, выберите файл для загрузки');
      return;
    }

    const formData = new FormData(form);
    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) {
        const percentComplete = event.loaded / event.total;
        progress.value = percentComplete;
      }
    };

    xhr.upload.onloadstart = () => {
      progress.value = 0;
    };

    xhr.upload.onloadend = () => {
      progress.value = 1;
    };

    xhr.open('POST', form.action, true);
    
    xhr.onload = () => {
      if (xhr.status === 200) {
        alert('Файл успешно загружен!');
      } else {
        alert('Ошибка при загрузке файла: ' + xhr.statusText);
      }
    };

    xhr.onerror = () => {
      alert('Произошла ошибка соединения');
    };

    xhr.send(formData);
  });
});