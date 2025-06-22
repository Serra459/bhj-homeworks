document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('tasks__form');
    const input = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');
    const addButton = document.getElementById('tasks__add');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        addTask();
    });

    input.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            addTask();
        }
    });
    
    tasksList.addEventListener('click', function(event) {
        if (event.target.classList.contains('task__remove')) {
            event.preventDefault();
            event.target.closest('.task').remove();
        }
    });
    
    function addTask() {
        const taskText = input.value.trim();
        
        if (taskText) {
            const taskHTML = `
                <div class="task">
                    <div class="task__title">
                        ${escapeHtml(taskText)}
                    </div>
                    <a href="#" class="task__remove">&times;</a>
                </div>
            `;

            tasksList.insertAdjacentHTML('beforeend', taskHTML);
            
            input.value = '';
        }
    }
    
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
});