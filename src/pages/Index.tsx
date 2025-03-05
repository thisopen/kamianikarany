import { useEffect, useState } from "react";
import Typed from "typed.js"; // Импортируем Typed.js
import HorizontalScroll from "./HorizontalScroll"; // Импортируем компонент HorizontalScroll

const Index = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Настройки Typed.js
    const options = {
      strings: ["kamianikarani"], // Текст для печатания
      typeSpeed: 170, // Скорость печатания
      showCursor: true, // Показывать курсор
      cursorChar: "|", // Символ курсора
      loop: false, // Отключаем бесконечный цикл
      onComplete: () => {
        // Добавляем класс для фиксации места курсора
        const cursor = document.querySelector(".typed-cursor");
        if (cursor) {
          cursor.classList.add("typed-finished");
        }
      },
    };
    // Инициализация Typed.js
    const typed = new Typed("#typing-title", options);
    // Очистка ресурсов при размонтировании компонента
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Fixed Background */}
      <div className="fixed-background"></div>
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('/images/background-image.jpg')",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 z-10"></div>
      {/* Hero Title */}
       <div className="relative z-10 h-screen flex items-center justify-center">
        <h1
          id="typing-title" // ID для Typed.js
          className="project-title text-white tracking-wider lowercase transition-opacity duration-1000 ease-in-out"
          style={{
            opacity: Math.max(0, 1 - scrollPosition / 500),
          }}
        ></h1>
       </div>
      {/* Catalog Section */}
        <section className="relative z-10 bg-black/0 py-2">
          <div className="container mx-auto px-0">   
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-1">
              {/* Кольца */}
              <a href="#rings" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors relative">
                <div
                  className="icon bg-cover bg-center w-full h-full overflow-hidden"
                  style={{ backgroundImage: "url('/images/rings-icon.png')" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Описание колец</span>
                  </div>
                </div>   
              </a>
              {/* Серьги */}
              <a href="#earrings" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors relative">
                <div
                  className="icon bg-cover bg-center w-full h-full overflow-hidden"
                  style={{ backgroundImage: "url('/images/earrings-icon.png')" }}
                  >
                  <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Описание сережек</span>
                  </div>
                </div>
              </a>
              {/* Подвески */}
              <a href="#pendants" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors relative">
                <div
                  className="icon bg-cover bg-center w-full h-full overflow-hidden"
                  style={{ backgroundImage: "url('/images/pendants-icon.png')" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Описание подвесок</span>
                  </div>
                </div>
              </a>
              {/* Столы */}
              <a href="#tables" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors relative">
                <div
                  className="icon bg-cover bg-center w-full h-full overflow-hidden"
                  style={{ backgroundImage: "url('/images/tables-icon.png')" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Описание столов</span>
                  </div>
                </div>
              </a>
              {/* Светильники */}
              <a href="#lights" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors relative">
                <div
                  className="icon bg-cover bg-center w-full h-full overflow-hidden"
                  style={{ backgroundImage: "url('/images/lights-icon.png')" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Описание светильников</span>
                  </div>
                </div>
              </a>
              {/* Постеры */}
              <a href="#poster" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors relative">
                <div
                  className="icon bg-cover bg-center w-full h-full overflow-hidden"
                  style={{ backgroundImage: "url('/images/Poster1.jpg')" }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                    <span className="text-white font-semibold">Описание постеров</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      {/* About Project Section */}
      <section className="relative z-10 bg-black/0 py-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white text-3xl font-bold mb-4">О проекте</h2>
          <p className="text-gray-300 text-lg">
            Здесь вы можете рассказать о своем проекте, его целях и миссии. Поделитесь интересной информацией, которая может заинтересовать ваших посетителей.
          </p>
        </div>
      </section>
      {/* Products Sections */}
      <section className="relative z-10 bg-black/0 py-16">
        {/* Rings Section */}
        <div id="rings" className="container mx-auto px-0 mb-16">
          <h2 className="text-white text-left text-3xl font-bold mb-8">Кольца</h2>
          <HorizontalScroll>
            {/* Пример продукта */}
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-prouct-1.jpg"
                alt="Ring Product 1"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 1</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-product-2.png"
                alt="Ring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 2</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-product-3.png"
                alt="Ring Product 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 3</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-product-3.png"
                alt="Ring Product 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 3</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-product-3.png"
                alt="Ring Product 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 3</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-product-3.png"
                alt="Ring Product 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 3</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-product-3.png"
                alt="Ring Product 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 3</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/ring-product-3.png"
                alt="Ring Product 3"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Кольцо 3</h3>
              <p className="text-gray-400">Описание кольца</p>
            </div>
          </HorizontalScroll>
        </div>

        {/* Earrings Section */}
        <div id="earrings" className="container mx-auto px-0 mb-16">
          <h2 className="text-white text-left text-3xl font-bold mb-8">Серьги</h2>
          <HorizontalScroll>
            {/* Пример продукта */}
            <div className="bg-0 p-4 text-center w-64">
              <img
                src="/images/earring-product-1.jpg"
                alt="Earring Product 1"
                className="w-full h-40 object-cover mb-4"
              />
              <h3 className="text-white font-semibold">Корни</h3>
              <p className="text-gray-400">Лера сама их сделала</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
              <img
                src="/images/earring-product-2.png"
                alt="Earring Product 2"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Серьги 2</h3>
              <p className="text-gray-400">Описание сережек</p>
            </div>
          </HorizontalScroll>
        </div>

        {/* Повторите для других категорий (Подвески, Столы, Светильники) */}
      </section>
    </div>
  );
};

export default Index;
