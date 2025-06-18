document.addEventListener('DOMContentLoaded', function() {
    const rotator = document.querySelector('.rotator');
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    function rotateText() {
        cases[currentIndex].classList.remove('rotator__case_active');
        
        currentIndex = (currentIndex + 1) % cases.length;
        
        const nextCase = cases[currentIndex];
        const speed = nextCase.dataset.speed;
        const color = nextCase.dataset.color;
        
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = color;
        
        setTimeout(rotateText, speed);
    }
    
    setTimeout(rotateText, 1000);
});