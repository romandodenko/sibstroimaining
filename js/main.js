"use strict"

window.onload = function () {

  document.documentElement.classList.add("loaded");

// Открытие и закрытие бургера

const menu = document.querySelector(".header-menu");

document.addEventListener("click", function (e) {

  const elementInteractive = e.target;

  if (elementInteractive.closest(".burger")) { // Открытие и закрытие бургера
    menu.classList.add("active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".header-menu__exit-menu")) { // Открытие и закрытие бургера 
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".header-menu__link")) { // Открытие и закрытие бургера
    menu.classList.remove("active")
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".services__item")) { // Открытие и закрытие псевдо аккордеона

    if (!elementInteractive.closest(".services__item").classList.contains("active")) {
      document.querySelectorAll(".services__item").forEach(function (e) {
        e.classList.remove("active")
      })

      document.querySelectorAll(".services__init-image").forEach(function (e) {
        e.removeAttribute('style');
      })

      document.querySelectorAll(".services__wrapper-text").forEach(function (e) {
        e.removeAttribute('style');
      })

      elementInteractive.closest(".services__item").classList.add("active");

      elementInteractive.closest(".services__item").querySelector(".services__init-image").style.height = elementInteractive.closest(".services__item").querySelector(".services__wrapper-image").scrollHeight + 'px';

      elementInteractive.closest(".services__item").querySelector(".services__wrapper-text").style.height = elementInteractive.closest(".services__item").querySelector(".services__wrapper-text").scrollHeight + 'px';

    } else {

      elementInteractive.closest(".services__item").classList.remove("active");

      document.querySelectorAll(".services__item").forEach(function (e) {
        e.classList.remove("active")
      })

      document.querySelectorAll(".services__init-image").forEach(function (e) {
        e.removeAttribute('style');
      })

      document.querySelectorAll(".services__wrapper-text").forEach(function (e) {
        e.removeAttribute('style');
      })
    }
  }
  if (elementInteractive.closest(".contacts-middle__exit")) { // Закрытие и открытие адреса на карте
    elementInteractive.closest(".contacts-middle__wrapper-map").classList.add("active");
  }
  if (elementInteractive.closest(".contacts-middle__button")) { // Закрытие и открытие адреса на карте
    elementInteractive.closest(".contacts-middle__wrapper-map").classList.remove("active");
  }
  if (elementInteractive.closest(".feedback-init")) { // Открытие и закрытие формы
    document.querySelector(".wrapper-form-feedback").classList.add("active");
    menu.classList.remove("active")
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".vacancy-init")) { // Открытие и закрытие формы
    document.querySelector(".wrapper-form-vacancy").classList.add("active");
    document.body.style.overflow = "hidden";
  }
  if (elementInteractive.closest(".wrapper-form__close")) { // Открытие и закрытие формы
    elementInteractive.closest(".wrapper-form").classList.remove("interactive");
    elementInteractive.closest(".wrapper-form").classList.remove("active");
    document.body.style.overflow = "";
  }
  if (elementInteractive.closest(".wrapper-form__exit")) { // Открытие и закрытие формы
    elementInteractive.closest(".wrapper-form").classList.remove("interactive");
    elementInteractive.closest(".wrapper-form").classList.remove("active");
    document.body.style.overflow = "";
  }
})

// Скрипт для проверки , поддерживает ли браузер webp 

function testWebP(callback) {
  var webP = new Image();

  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };

  webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector('body').classList.add('webp');
  } else {
    document.querySelector('body').classList.add('no-webp');
  }
});

// Меняем заливку у хеадере при скролле

document.addEventListener("scroll", function (e) {

  let scrollY = window.scrollY;

  let headerHeight = document.querySelector(".header").scrollHeight - 50;

  if (scrollY >= headerHeight) {
    document.querySelector(".header").classList.add("active")
  } else {
    document.querySelector(".header").classList.remove("active")
  }

})

    // Гриншок 

gsap.registerPlugin(ScrollTrigger,ScrollSmoother)

ScrollSmoother.create({
	wrapper: '.page', // оболочка
	content: '.scroll', // контент который будет плавно скролиться
	smooth: 1.5, // скорость
	effects: true // возможность влиять на скорость скрола у отдельных элементов data-speed=".6"
})

    // Аккордеон 

const accordionItemsInit = document.querySelector('.vacancy-item');

const accordionItems = document.querySelectorAll('.vacancy-item');

if (accordionItemsInit) {

  if (accordionItems.length > 0) {
    accordionItems.forEach((item) => {
      const accordionHeader = item.querySelector('.accordion-init')

      accordionHeader.addEventListener('click', () => {

        const openItem = document.querySelector('.accordion-open')

        toggleItem(item)

        if (openItem && openItem !== item) {
          toggleItem(openItem)
        }
      })
    })
  }

  const toggleItem = (item) => {
    const accordionContent = item.querySelector('.vacancy-item__bottom')

    if (item.classList.contains('accordion-open')) {
      accordionContent.removeAttribute('style')
      item.classList.remove('accordion-open')
    } else {
      accordionContent.style.height = accordionContent.scrollHeight + 'px'
      item.classList.add('accordion-open')
    }
  }
  
}

    // Слайдер в hero

const heroSliderInit = document.querySelector(".hero-bottom-slider");

if(heroSliderInit) {
  const heroSlider = new Swiper('.hero-bottom-slider', {
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 32,
    speed: 500, // Автовоспроизведение
    autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    },
    pagination: {
      el: '.hero-bottom-slider-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        direction: 'horizontal',
      },
      1024: {
        direction: 'vertical',
      },
    },
  });
  
}

// const swiper = new Swiper('.hero__swiper', {
//   loop: true,
//   // loopAdditionalSlides: 3, // Добавляет количество слайдов которые будут склонированы после создания цикла
//   // centeredSlides: true, // центрирует активный слайд по центру а не слева
//   observer: true,
//   observeParents: true,
//   watchOverflow: true,
//   slidesPerView: 1,
//   spaceBetween: 32,
//   // effect: "fade", анимация перелистывания слайдера
//   // slidesPerGroup: 1, 
//   // centeredSlides: true, // активный слайд будет в центре
//   // autoHeight: true,
//   direction: 'horizontal',
//   // speed: 500, // Автовоспроизведение
//   // autoplay: {
//   // delay: 5000,
//   // disableOnInteraction: false,
//   // waitForTransition: false, если нужно чтобы слайды листались когда пользователь уходит со страницы
//   // },
//   // grid: { // если нужно сделать слайдер не в 1 строку
//   //   rows: 2,
//   // },
//   // thumbs: { // Читаем ниже что даёт эта настройка
//   //   swiper: thumbsSwiper,
//   // },
//   pagination: {
//     el: '.hero__pagination',
//     clickable: true,
//     // dynamicBullets: true, // Если много кружков пагинации
//     // dynamicMainBullets: 3, // Показывает количество отображаемых кружков пагинаии при включеном dynamicBullets
//   },
//   navigation: {
//     nextEl: '.hero__button-next',
//     prevEl: '.hero__button-prev',
//   },
//   // scrollbar: {
//   //   el: '.hero__scrollbar',
//   //   draggable: true, // позволяет сделать полосу прокрутки перетаскиваемой
//   // },
//   // breakpoints: {
//   //   320: {
//   //     slidesPerView: 2,
//   //     spaceBetween: 20
//   //   },
//   //   480: {
//   //     slidesPerView: 3,
//   //     spaceBetween: 30
//   //   },
//   //   640: {
//   //     slidesPerView: 4,
//   //     spaceBetween: 40
//   //   }
//   // },
//   // on: {
//   // slideChange () {
//   // Событие будет запущено при изменении текущего активного слайда
//   // },
//   // slideChangeTransitionEnd () {
//   // Событие будет запущено после анимации другого слайда (следующего или предыдущего).
//   // },
//   // slideChangeTransitionStart() {
//   // Событие будет запущено в начале анимации для другого слайда (следующего или предыдущего). Т.е при клике на кнопку или пагинацию или перелистывание
//   // },
//   //   slideNextTransitionStart() {
//   // То же, что и "slideChangeTransitionStart", но только для направления "вперед"
//   //   },
//   //   slidePrevTransitionStart() {
//   // То же, что и "slideChangeTransitionStart", но только для направления "назад"
//   //   },
//   //   afterInit() {
//   // Событие будет запущено сразу после инициализации т.е при загрузке страницы сразу все заработает
//   //   }
//   // }
// });

    // Динамические адаптив

function DynamicAdapt(type) {
  this.type = type;
}

DynamicAdapt.prototype.init = function () {
  const _this = this;
  // массив объектов
  this.оbjects = [];
  this.daClassname = "_dynamic_adapt_";
  // массив DOM-элементов
  this.nodes = document.querySelectorAll("[data-da]");

  // наполнение оbjects объктами
  for (let i = 0; i < this.nodes.length; i++) {
    const node = this.nodes[i];
    const data = node.dataset.da.trim();
    const dataArray = data.split(",");
    const оbject = {};
    оbject.element = node;
    оbject.parent = node.parentNode;
    оbject.destination = document.querySelector(dataArray[0].trim());
    оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
    оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
    оbject.index = this.indexInParent(оbject.parent, оbject.element);
    this.оbjects.push(оbject);
  }

  this.arraySort(this.оbjects);

  // массив уникальных медиа-запросов
  this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
    return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
  }, this);
  this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
    return Array.prototype.indexOf.call(self, item) === index;
  });

  // навешивание слушателя на медиа-запрос
  // и вызов обработчика при первом запуске
  for (let i = 0; i < this.mediaQueries.length; i++) {
    const media = this.mediaQueries[i];
    const mediaSplit = String.prototype.split.call(media, ',');
    const matchMedia = window.matchMedia(mediaSplit[0]);
    const mediaBreakpoint = mediaSplit[1];

    // массив объектов с подходящим брейкпоинтом
    const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
      return item.breakpoint === mediaBreakpoint;
    });
    matchMedia.addListener(function () {
      _this.mediaHandler(matchMedia, оbjectsFilter);
    });
    this.mediaHandler(matchMedia, оbjectsFilter);
  }
};

DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
  if (matchMedia.matches) {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      оbject.index = this.indexInParent(оbject.parent, оbject.element);
      this.moveTo(оbject.place, оbject.element, оbject.destination);
    }
  } else {
    for (let i = 0; i < оbjects.length; i++) {
      const оbject = оbjects[i];
      if (оbject.element.classList.contains(this.daClassname)) {
        this.moveBack(оbject.parent, оbject.element, оbject.index);
      }
    }
  }
};

// Функция перемещения
DynamicAdapt.prototype.moveTo = function (place, element, destination) {
  element.classList.add(this.daClassname);
  if (place === 'last' || place >= destination.children.length) {
    destination.insertAdjacentElement('beforeend', element);
    return;
  }
  if (place === 'first') {
    destination.insertAdjacentElement('afterbegin', element);
    return;
  }
  destination.children[place].insertAdjacentElement('beforebegin', element);
}

// Функция возврата
DynamicAdapt.prototype.moveBack = function (parent, element, index) {
  element.classList.remove(this.daClassname);
  if (parent.children[index] !== undefined) {
    parent.children[index].insertAdjacentElement('beforebegin', element);
  } else {
    parent.insertAdjacentElement('beforeend', element);
  }
}

// Функция получения индекса внутри родителя
DynamicAdapt.prototype.indexInParent = function (parent, element) {
  const array = Array.prototype.slice.call(parent.children);
  return Array.prototype.indexOf.call(array, element);
};

// Функция сортировки массива по breakpoint и place 
// по возрастанию для this.type = min
// по убыванию для this.type = max
DynamicAdapt.prototype.arraySort = function (arr) {
  if (this.type === "min") {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return -1;
        }

        if (a.place === "last" || b.place === "first") {
          return 1;
        }

        return a.place - b.place;
      }

      return a.breakpoint - b.breakpoint;
    });
  } else {
    Array.prototype.sort.call(arr, function (a, b) {
      if (a.breakpoint === b.breakpoint) {
        if (a.place === b.place) {
          return 0;
        }

        if (a.place === "first" || b.place === "last") {
          return 1;
        }

        if (a.place === "last" || b.place === "first") {
          return -1;
        }

        return b.place - a.place;
      }

      return b.breakpoint - a.breakpoint;
    });
    return;
  }
};

const da = new DynamicAdapt("max");
da.init();

    // Яндекс карта

const mapClass = document.querySelector(".contacts-middle__map")
if (mapClass) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map(
      "map", {
        center: [55.42901656929713, 86.22126199999998],
        zoom: 18,
      },
    );
    var myPlacemark = new ymaps.Placemark(myMap.getCenter(55.42901656929713, 86.22126199999998), {}, {});

    myMap.geoObjects.add(myPlacemark);
    myMap.controls.remove('geolocationControl'); // удаляем геолокацию
    myMap.controls.remove('searchControl'); // удаляем поиск
    myMap.controls.remove('trafficControl'); // удаляем контроль трафика
    myMap.controls.remove('typeSelector'); // удаляем тип
    myMap.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    myMap.controls.remove('zoomControl'); // удаляем контрол зуммирования
    myMap.controls.remove('rulerControl'); // удаляем контрол правил
  }
}

    // Валидация

const formFeedbackInit = document.querySelector(".form-feedback");

const formVacancykInit = document.querySelector(".form-vacancy");

// Инпут маска

if (formFeedbackInit) {
  var formFeedbackInput = formFeedbackInit.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)999-99-99");
  im.mask(formFeedbackInput);
}

if (formVacancykInit) {
  var formVacancyInput = formVacancykInit.querySelector("input[type='tel']");
  var im = new Inputmask("+7(999)999-99-99");
  im.mask(formVacancyInput);
}

if (formFeedbackInit) {
  const validator = new JustValidate('.form-feedback', { // можно использовать классы вместо ид
    errorLabelStyle: { // Стили для ошибки
      color: '#F13F58',
    }

  });

  validator
    .addField('#name', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите ваше Ф.И.О',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Минимальное количество букв - 1',
      },
    ])
    .addField('#phone', [{
        rule: 'required',
        errorMessage: 'Введите ваш телефон',
      },
      {
        validator: (value) => { // Своя проверка, будет работать как rule
          const phone = formFeedbackInput.inputmask.unmaskedvalue(); // Получает чистое значение инпута в котором инпут маск
          return Boolean(Number(phone) && phone.length == 10);
        },
        errorMessage: 'Введите ваш полный телефон',
      },
    ])
    .addField('#email', [{
        rule: 'required',
        errorMessage: 'Введите вашу почту!',
      },
      {
        rule: 'email',
        errorMessage: 'Введите правильную почту!',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".wrapper-form-feedback").classList.add("interactive");

      document.querySelector(".form-feedback").querySelectorAll("input").forEach(function (e) {
        e.value = "";
      })

      document.querySelector(".form-feedback").querySelector("textarea").value = "";
    })
}

if (formVacancykInit) {
  const validator = new JustValidate('.form-vacancy', { // можно использовать классы вместо ид
    errorLabelStyle: { // Стили для ошибки
      color: '#F13F58',
    }

  });

  validator
    .addField('#name', [{ // можно использовать классы вместо ид
        rule: 'required',
        errorMessage: 'Введите ваше Ф.И.О',
      },
      {
        rule: 'minLength',
        value: 1,
        errorMessage: 'Минимальное количество букв - 1',
      },
    ])
    .addField('#phone', [{
        rule: 'required',
        errorMessage: 'Введите ваш телефон',
      },
      {
        validator: (value) => { // Своя проверка, будет работать как rule
          const phone = formVacancyInput.inputmask.unmaskedvalue(); // Получает чистое значение инпута в котором инпут маск
          return Boolean(Number(phone) && phone.length == 10);
        },
        errorMessage: 'Введите ваш полный телефон',
      },
    ])
    .addField('#email', [{
        rule: 'required',
        errorMessage: 'Введите вашу почту!',
      },
      {
        rule: 'email',
        errorMessage: 'Введите правильную почту!',
      },
    ])
    .onSuccess((event) => { // Если форма проходит валидацию то происходит код ниже

      document.querySelector(".wrapper-form-vacancy").classList.add("interactive");

      document.querySelector(".form-feedback").querySelectorAll("input").forEach(function (e) {
        e.value = "";
      })

      document.querySelector(".form-feedback").querySelector("textarea").value = "";
    })
}

}