document.addEventListener("DOMContentLoaded", function () {
    // Инициализация слайдера для игры
    const leftArrowGame = document.querySelector('.slider-arrow[data-direction="left"]');
    const rightArrowGame = document.querySelector('.slider-arrow[data-direction="right"]');
    const game = document.querySelector('.game');
    const game2 = document.querySelector('.game2');
  
    let currentSlideGame = 'game'; // Начинаем с "game"
  
    function updateSliderGame() {
      if (currentSlideGame === 'game') {
        game.style.opacity = '1';
        game.style.visibility = 'visible';
        game.style.transform = 'translateX(0)'; // Ставим game на экран
        game2.style.opacity = '0';
        game2.style.visibility = 'hidden';
        game2.style.transform = 'translateX(100%)'; // Смещаем game2 вправо
      } else {
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
    const leftArrowOtziv = document.querySelector('.slider-arrow2[data-direction="left"]');
    const rightArrowOtziv = document.querySelector('.slider-arrow2[data-direction="right"]');
    const otziv = document.querySelector('.otziv');
    const otziv2 = document.querySelector('.otziv2');
  
    let currentSlideOtziv = 'otziv'; // Начинаем с "otziv"
  
    function updateSliderOtziv() {
      if (currentSlideOtziv === 'otziv') {
        otziv.style.opacity = '1';
        otziv.style.visibility = 'visible';
        otziv.style.transform = 'translateX(0)';
        otziv2.style.opacity = '0';
        otziv2.style.visibility = 'hidden';
        otziv2.style.transform = 'translateX(100%)'; // Смещаем второй отзыв вправо
      } else {
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
    setTimeout(() => {
      const preloader = document.querySelector('.preloader'); // Находим наш элемент прелоадера
      preloader.style.display = 'none'; // Скрываем прелоадер
    }, 500); // Задержка 500 мс 
  
    // Форма регистрации
    const modal = document.getElementById('myModal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
  
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
      const container = document.getElementById('cards-container');
      container.innerHTML = ''; // Очищаем контейнер
  
      data.forEach(item => {
        const cardElement = `
          <div class="card">
            <h2>${item.name || 'Пользователь'}</h2>
            <p><strong>Email:</strong> ${item.email}</p>
            <p><strong>Комментарий:</strong> ${item.body}</p>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', cardElement);
      });
    }
  
    // Выполнение запроса к API
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
      .then(response => response.json())
      .then(data => {
        renderCards(data); // Отображаем полученные данные
      })
      .catch(error => {
        console.error('Ошибка при получении данных:', error);
      });
  });