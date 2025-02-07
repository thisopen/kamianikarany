import { useEffect, useState } from "react";
import Typed from "typed.js"; // Импортируем Typed.js
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

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
      {/* Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center w-full h-full"
        style={{
          backgroundImage: "url('/images/background-image.jpg')",
        }}
      ></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0"></div>
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
      <section className="relative z-10 bg-black/0 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-white text-center text-3xl font-bold mb-8">Каталог продукции</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {/* Кольца */}
            <a href="#rings" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/rings-icon.png')" }}
              ></div>
              <span className="font-semibold">Кольца</span>
            </a>
            {/* Серьги */}
            <a href="#earrings" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/earrings-icon.png')" }}
              ></div>
              <span className="font-semibold">Серьги</span>
            </a>
            {/* Подвески */}
            <a href="#pendants" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/pendants-icon.png')" }}
              ></div>
              <span className="font-semibold">Подвески</span>
            </a>
            {/* Столы */}
            <a href="#tables" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/tables-icon.png')" }}
              ></div>
              <span className="font-semibold">Столы</span>
            </a>
            {/* Светильники */}
            <a href="#lights" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/lights-icon.png')" }}
              ></div>
              <span className="font-semibold">Светильники</span>
            </a>
          </div>
        </div>
      </section>

      {/* Products Sections */}
      <section className="relative z-10 bg-black/0 py-16">
        {/* Rings Section */}
        <div id="rings" className="container mx-auto px-4 mb-16">
          <h2 className="text-white text-center text-3xl font-bold mb-8">Кольца</h2>
          
            <div className="horizontal-scroll-container overflow-x-auto whitespace-nowrap pb-4">
              <div className="inline-flex space-x-4">
                {/* Пример продукта */}
                <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
                  <img
                    src="/images/ring-product-1.png"
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
              </div>
           </div>
          
        </div>

        {/* Rings Section */}
        <div id="rings" className="container mx-auto px-4 mb-16">
          <h2 className="text-white text-center text-3xl font-bold mb-8">Кольца</h2>
          <div className="horizontal-scroll-container overflow-x-auto whitespace-nowrap pb-4">
            <div className="inline-flex space-x-4">
              {/* Пример продукта */}
              <div className="bg-gray-800 rounded-lg p-4 text-center w-64">
                <img
                  src="/images/ring-product-1.png"
                  alt="Ring Product 1"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-semibold">Кольцо 1</h3>
                <p className="text-gray-400">Описание кольца</p>
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
              </div>
            </div>
          </div>

          {/* Pendants Section */}
          <div id="pendants" className="container mx-auto px-4 mb-16">
            <h2 className="text-white text-center text-3xl font-bold mb-8">Подвески</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Пример продукта */}
              <div className="bg-gray-800 rounded-lg p-4 text-center">
                <img
                  src="/images/pendant-product-1.png"
                  alt="Pendant Product 1"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
                <h3 className="text-white font-semibold">Подвеска 1</h3>
                <p className="text-gray-400">Описание подвески</p>
              </div>
              {/* Добавьте больше продуктов */}
            </div>
          </div>

        {/* Tables Section */}
        <div id="tables" className="container mx-auto px-4 mb-16">
          <h2 className="text-white text-center text-3xl font-bold mb-8">Столы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Пример продукта */}
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <img
                src="/images/table-product-1.png"
                alt="Table Product 1"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Стол 1</h3>
              <p className="text-gray-400">Описание стола</p>
            </div>
            {/* Добавьте больше продуктов */}
          </div>
        </div>

        {/* Lights Section */}
        <div id="lights" className="container mx-auto px-4 mb-16">
          <h2 className="text-white text-center text-3xl font-bold mb-8">Светильники</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Пример продукта */}
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <img
                src="/images/light-product-1.png"
                alt="Light Product 1"
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
              <h3 className="text-white font-semibold">Светильник 1</h3>
              <p className="text-gray-400">Описание светильника</p>
            </div>
            {/* Добавьте больше продуктов */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
