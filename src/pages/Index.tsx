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
      strings: ["kamianikarani"], // Текст для печататния
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
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Кольца */}
            <a href="/rings" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/rings-icon.png')" }}
              ></div>
              <span className="font-semibold">Кольца</span>
            </a>

            {/* Серьги */}
            <a href="/earrings" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/earrings-icon.png')" }}
              ></div>
              <span className="font-semibold">Серьги</span>
            </a>

            {/* Подвески */}
            <a href="/pendants" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/pendants-icon.png')" }}
              ></div>
              <span className="font-semibold">Подвески</span>
            </a>

            {/* Столы */}
            <a href="/tables" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/tables-icon.png')" }}
              ></div>
              <span className="font-semibold">Столы</span>
            </a>

            {/* Светильники */}
            <a href="/lights" className="flex flex-col items-center text-center text-white hover:text-gray-300 transition-colors">
              <div
                className="w-full h-40 bg-cover bg-center rounded-lg mb-4"
                style={{ backgroundImage: "url('/images/lights-icon.png')" }}
              ></div>
              <span className="font-semibold">Светильники</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
