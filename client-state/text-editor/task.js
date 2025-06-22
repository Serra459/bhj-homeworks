document.addEventListener('DOMContentLoaded', () => {
  const editor = document.getElementById('editor');
  const storageKey = 'textEditorContent';

  const savedText = localStorage.getItem(storageKey);
  if (savedText) {
    editor.value = savedText;
  }

  editor.addEventListener('input', () => {
    localStorage.setItem(storageKey, editor.value);
  });

  editor.addEventListener('dblclick', () => {
    if (confirm('Очистить содержимое редактора?')) {
      editor.value = '';
      localStorage.removeItem(storageKey);
    }
  });
});