document.addEventListener('DOMContentLoaded', function() {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    document.body.appendChild(tooltip);
    
    const tooltipElements = document.querySelectorAll('.has-tooltip');
    
    tooltipElements.forEach(element => {
        element.addEventListener('click', function(event) {
            event.preventDefault();
            
            const isActive = tooltip.classList.contains('tooltip_active') && 
                           tooltip.textContent === this.title;
            
            tooltip.classList.remove('tooltip_active');
            
            if (!isActive) {
                tooltip.textContent = this.title;
                
                const rect = this.getBoundingClientRect();
                tooltip.style.left = `${rect.left}px`;
                tooltip.style.top = `${rect.bottom}px`;
                
                tooltip.classList.add('tooltip_active');
            }
        });
    });
    
    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('has-tooltip')) {
            tooltip.classList.remove('tooltip_active');
        }
    });
});