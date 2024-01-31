// Получаем кнопку с id 'magic-btn'
const btn = document.querySelector('#magic-btn');

btn.addEventListener('click', () => {
    // Создаем новую кнопку
    const newBtn = document.createElement('button');
    newBtn.id = 'magic-btn-2';
    newBtn.textContent = 'Я изменю тебя';

    // Задаем стили для новой кнопки
    newBtn.style.backgroundColor = '#a78b71';
    newBtn.style.color = 'white';

    // Добавляем новую кнопку в body
    document.body.appendChild(newBtn);

    // Обработчик событий для новой кнопки
    newBtn.addEventListener('click', () => {
        // Изменяем стили кнопки magic-btn
        btn.style.backgroundColor = '#9c4a1a';
        btn.style.color = 'black';
    });
});
