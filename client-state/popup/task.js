document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('subscribe-modal');
  const closeBtn = document.querySelector('.modal__close');
  const cookieName = 'modalClosed';

  function getCookie(name) {
    const matches = document.cookie.match(new RegExp(
      `(?:^|; )${name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1')}=([^;]*)`
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
  }

  if (!getCookie(cookieName)) {
    modal.classList.add('modal_active');
  }

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('modal_active');
    const date = new Date();
    date.setFullYear(date.getFullYear() + 1);
    document.cookie = `${cookieName}=true; expires=${date.toUTCString()}; path=/`;
  });
});