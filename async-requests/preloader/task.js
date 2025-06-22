document.addEventListener('DOMContentLoaded', function() {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');
    
    loader.classList.add('loader_active');
    
    fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses')
        .then(response => {
            if (!response.ok) {
                throw new Error('Ошибка сети');
            }
            return response.json();
        })
        .then(data => {
            loader.classList.remove('loader_active');
            
            itemsContainer.innerHTML = '';
            
            const valutes = data.response.Valute;
            
            for (const currencyCode in valutes) {
                const currency = valutes[currencyCode];
                
                const itemElement = document.createElement('div');
                itemElement.className = 'item';
                
                const codeElement = document.createElement('div');
                codeElement.className = 'item__code';
                codeElement.textContent = currency.CharCode;
                
                const valueElement = document.createElement('div');
                valueElement.className = 'item__value';
                valueElement.textContent = currency.Value.toFixed(2);
                
                const currencyElement = document.createElement('div');
                currencyElement.className = 'item__currency';
                currencyElement.textContent = 'руб.';
                
                itemElement.appendChild(codeElement);
                itemElement.appendChild(valueElement);
                itemElement.appendChild(currencyElement);
                
                itemsContainer.appendChild(itemElement);
            }
        })
        .catch(error => {
            loader.classList.remove('loader_active');
            console.error('Ошибка при загрузке данных:', error);
        });
});