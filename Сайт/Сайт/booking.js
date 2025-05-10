document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('booking-form');
    const ticketInput = document.getElementById('tickets');
    const totalPrice = document.getElementById('total-price');
    const minusBtn = document.querySelector('.minus');
    const plusBtn = document.querySelector('.plus');
    const successMessage = document.getElementById('success-message');
    
    const ticketPrice = 4000; // Цена одного билета
    
    // Маска для телефона
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
        e.target.value = '+7' + (x[2] ? '(' + x[2] : '') + (x[3] ? ')' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
    });
    
    // Управление количеством билетов
    function updateTotal() {
        const tickets = parseInt(ticketInput.value);
        totalPrice.textContent = (tickets * ticketPrice).toLocaleString('ru-RU') + ' ₽';
    }
    
    minusBtn.addEventListener('click', function() {
        if (parseInt(ticketInput.value) > 1) {
            ticketInput.value = parseInt(ticketInput.value) - 1;
            updateTotal();
        }
    });
    
    plusBtn.addEventListener('click', function() {
        if (parseInt(ticketInput.value) < 10) {
            ticketInput.value = parseInt(ticketInput.value) + 1;
            updateTotal();
        }
    });
    
    ticketInput.addEventListener('change', updateTotal);
    
    // Обработка формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Здесь будет отправка данных на сервер
        // В демо-версии просто показываем сообщение об успехе
        
        // Собираем данные формы
        const formData = {
            name: form.elements['name'].value,
            email: form.elements['email'].value,
            phone: form.elements['phone'].value,
            datetime: form.elements['datetime'].value,
            tickets: form.elements['tickets'].value,
            total: parseInt(form.elements['tickets'].value) * ticketPrice
        };
        
        console.log('Данные для отправки:', formData);
        
        // Показываем сообщение об успехе
        form.style.display = 'none';
        successMessage.style.display = 'block';
        
        // В реальном проекте здесь будет AJAX-запрос к серверу
        /*
        fetch('/api/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            form.style.display = 'none';
            successMessage.style.display = 'block';
        })
        .catch(error => {
            alert('Ошибка при отправке формы');
        });
        */
    });
    
    // Инициализация
    updateTotal();
});