document.addEventListener("DOMContentLoaded", function () {
    // Инициализация слайдера для игры
    var leftArrowGame = document.querySelector('.slider-arrow[data-direction="left"]');
    var rightArrowGame = document.querySelector('.slider-arrow[data-direction="right"]');
    var game = document.querySelector('.game');
    var game2 = document.querySelector('.game2');
    var currentSlideGame = 'game'; // Начинаем с "game"
    function updateSliderGame() {
        if (currentSlideGame === 'game') {
            game.style.opacity = '1';
            game.style.visibility = 'visible';
            game.style.transform = 'translateX(0)'; // Ставим game на экран
            game2.style.opacity = '0';
            game2.style.visibility = 'hidden';
            game2.style.transform = 'translateX(100%)'; // Смещаем game2 вправо
        }
        else {
            game.style.opacity = '0';
            game.style.visibility = 'hidden';
            game.style.transform = 'translateX(-100%)'; // Смещаем game влево
            game2.style.opacity = '1';
            game2.style.visibility = 'visible';
            game2.style.transform = 'translateX(0)'; // Ставим game2 на экран
        }
    }
    rightArrowGame.addEventListener('click', function () {
        if (currentSlideGame === 'game') {
            currentSlideGame = 'game2'; // Меняем слайд на game2
            updateSliderGame(); // Обновляем состояние
        }
    });
    leftArrowGame.addEventListener('click', function () {
        if (currentSlideGame === 'game2') {
            currentSlideGame = 'game'; // Меняем слайд на game
            updateSliderGame(); // Обновляем состояние
        }
    });
    updateSliderGame(); // Инициализация слайдера для игры
    // Инициализация слайдера для отзывов
    var leftArrowOtziv = document.querySelector('.slider-arrow2[data-direction="left"]');
    var rightArrowOtziv = document.querySelector('.slider-arrow2[data-direction="right"]');
    var otziv = document.querySelector('.otziv');
    var otziv2 = document.querySelector('.otziv2');
    var currentSlideOtziv = 'otziv'; // Начинаем с "otziv"
    function updateSliderOtziv() {
        if (currentSlideOtziv === 'otziv') {
            otziv.style.opacity = '1';
            otziv.style.visibility = 'visible';
            otziv.style.transform = 'translateX(0)';
            otziv2.style.opacity = '0';
            otziv2.style.visibility = 'hidden';
            otziv2.style.transform = 'translateX(100%)'; // Смещаем второй отзыв вправо
        }
        else {
            otziv.style.opacity = '0';
            otziv.style.visibility = 'hidden';
            otziv.style.transform = 'translateX(-100%)'; // Смещаем первый отзыв влево
            otziv2.style.opacity = '1';
            otziv2.style.visibility = 'visible';
            otziv2.style.transform = 'translateX(0)'; // Ставим второй отзыв на экран
        }
    }
    rightArrowOtziv.addEventListener('click', function () {
        if (currentSlideOtziv === 'otziv') {
            currentSlideOtziv = 'otziv2'; // Меняем слайд на otziv2
            updateSliderOtziv(); // Обновляем состояние
        }
    });
    leftArrowOtziv.addEventListener('click', function () {
        if (currentSlideOtziv === 'otziv2') {
            currentSlideOtziv = 'otziv'; // Меняем слайд на otziv
            updateSliderOtziv(); // Обновляем состояние
        }
    });
    updateSliderOtziv(); // Инициализация слайдера для отзывов
    // Прелоадер
    setTimeout(function () {
        var preloader = document.querySelector('.preloader'); // Находим наш элемент прелоадера
        preloader.style.display = 'none'; // Скрываем прелоадер
    }, 500); // Задержка 500 мс 
    // Форма регистрации
    var modal = document.getElementById('myModal');
    var openModalButton = document.getElementById('openModal');
    var closeModalButton = document.getElementById('closeModal');
    var contactForm = document.getElementById('contactForm');
    // Открытие модального окна при нажатии на "Contact Us"
    openModalButton.addEventListener('click', function (e) {
        e.preventDefault(); // Отменить действие по умолчанию
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; // Отключаем прокрутку страницы
    });
    // Закрытие модального окна при нажатии на кнопку "Cancel"
    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
    });
    // Закрытие модального окна при нажатии на подложку
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
        }
    });
    // Закрытие формы при отправке данных (например, можно добавить валидацию)
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Прерываем стандартную отправку формы
        alert('Form submitted');
        modal.style.display = 'none'; // Закрываем модальное окно после отправки
        document.body.style.overflow = 'auto'; // Включаем прокрутку страницы
    });
    // Добавление карточек через API
    function renderCards(data) {
        var container = document.getElementById('cards-container');
        container.innerHTML = ''; // Очищаем контейнер
        data.forEach(function (item) {
            var cardElement = "\n          <div class=\"card\">\n            <h2>".concat(item.name || 'Пользователь', "</h2>\n            <p><strong>Email:</strong> ").concat(item.email, "</p>\n            <p><strong>\u041A\u043E\u043C\u043C\u0435\u043D\u0442\u0430\u0440\u0438\u0439:</strong> ").concat(item.body, "</p>\n          </div>\n        ");
            container.insertAdjacentHTML('beforeend', cardElement);
        });
    }
    // Выполнение запроса к API
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
        .then(function (response) { return response.json(); })
        .then(function (data) {
        renderCards(data); // Отображаем полученные данные
    })
        .catch(function (error) {
        console.error('Ошибка при получении данных:', error);
    });
});
