document.addEventListener("DOMContentLoaded", function () {
  // Инициализация слайдера для игры
  const leftArrowGame = document.querySelector('.slider-arrow[data-direction="left"]') as HTMLElement | null;
  const rightArrowGame = document.querySelector('.slider-arrow[data-direction="right"]') as HTMLElement | null;
  const game = document.querySelector('.game') as HTMLElement | null;
  const game2 = document.querySelector('.game2') as HTMLElement | null;

  if (!game || !game2) {
    console.error('Не удалось найти элементы слайдера игры');
    return;
  }

  let currentSlideGame: 'game' | 'game2' = 'game'; // Начинаем с "game"

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

  if (rightArrowGame) {
    rightArrowGame.addEventListener('click', function () {
      if (currentSlideGame === 'game') {
        currentSlideGame = 'game2'; // Меняем слайд на game2
        updateSliderGame(); // Обновляем состояние
      }
    });
  }

  if (leftArrowGame) {
    leftArrowGame.addEventListener('click', function () {
      if (currentSlideGame === 'game2') {
        currentSlideGame = 'game'; // Меняем слайд на game
        updateSliderGame(); // Обновляем состояние
      }
    });
  }

  updateSliderGame(); // Инициализация слайдера для игры

  // Инициализация слайдера для отзывов
  const leftArrowOtziv = document.querySelector('.slider-arrow2[data-direction="left"]') as HTMLElement | null;
  const rightArrowOtziv = document.querySelector('.slider-arrow2[data-direction="right"]') as HTMLElement | null;
  const otziv = document.querySelector('.otziv') as HTMLElement | null;
  const otziv2 = document.querySelector('.otziv2') as HTMLElement | null;

  if (!otziv || !otziv2) {
    console.error('Не удалось найти элементы слайдера отзывов');
    return;
  }

  let currentSlideOtziv: 'otziv' | 'otziv2' = 'otziv'; // Начинаем с "otziv"

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

  if (rightArrowOtziv) {
    rightArrowOtziv.addEventListener('click', function () {
      if (currentSlideOtziv === 'otziv') {
        currentSlideOtziv = 'otziv2'; // Меняем слайд на otziv2
        updateSliderOtziv(); // Обновляем состояние
      }
    });
  }

  if (leftArrowOtziv) {
    leftArrowOtziv.addEventListener('click', function () {
      if (currentSlideOtziv === 'otziv2') {
        currentSlideOtziv = 'otziv'; // Меняем слайд на otziv
        updateSliderOtziv(); // Обновляем состояние
      }
    });
  }

  updateSliderOtziv(); // Инициализация слайдера для отзывов
});