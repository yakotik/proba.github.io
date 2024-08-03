const startDate = new Date('2024-04-16T00:00:00'); // Установите свою дату

function updateStopwatch() {
    const now = new Date();
    const elapsedTime = now - startDate;
    
    const days = Math.floor(elapsedTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);

    document.getElementById('display').textContent =
        `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}

// Обновляем время каждую секунду
setInterval(updateStopwatch, 1000);

// Инициализируем отображение времени при загрузке страницы
updateStopwatch();

document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navItems = document.querySelectorAll('.nav-item');

    // Изначально скрываем все элементы, кроме первого
    navItems.forEach((item, index) => {
        if (index !== 0) {
            item.style.display = 'none';
        }
    });

    toggleButton.addEventListener('click', function() {
        let allHidden = true;

        navItems.forEach((item, index) => {
            if (index !== 0) {
                if (item.style.display === 'none') {
                    item.style.display = 'flex';
                } else {
                    item.style.display = 'none';
                    allHidden = false;
                }
            }
        });

        // Изменяем текст кнопки в зависимости от состояния
        if (allHidden) {
            toggleButton.textContent = 'Close';
        } else {
            toggleButton.textContent = 'Show';
        }
    });
});

