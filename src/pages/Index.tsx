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
      strings: ["kamianikarani"], // Текст для 
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

      {/* Products Section */}
      <section className="relative z-10 bg-black/40 py-16 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* Card 1 */}
            <a href="/rings">
              <Card className="bg-black/30 border-0 backdrop-blur-sm text-white opacity-0 animate-fade-in hover:border hover:border-white transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Кольца</CardTitle>
                  <CardDescription className="text-white/70">
                    Уникальные изделия из татранской древесины
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Каждое кольцо создается из древесины, собранной во время наших походов в Татры. Мы тщательно отбираем материал, который природа дарит нам во время каждого хайка в горы, превращая его в уникальные украшения, хранящие дух этих величественных гор.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Card 2 */}
            <a href="/rings">
              <Card className="bg-black/30 border-0 backdrop-blur-sm text-white opacity-0 animate-fade-in hover:border hover:border-white transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Кольца</CardTitle>
                  <CardDescription className="text-white/70">
                    Уникальные изделия из татранской древесины
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Каждое кольцо создается из древесины, собранной во время наших походов в Татры. Мы тщательно отбираем материал, который природа дарит нам во время каждого хайка в горы, превращая его в уникальные украшения, хранящие дух этих величественных гор.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Card 3 */}
            <a href="/rings">
              <Card className="bg-black/30 border-0 backdrop-blur-sm text-white opacity-0 animate-fade-in hover:border hover:border-white transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Кольца</CardTitle>
                  <CardDescription className="text-white/70">
                    Уникальные изделия из татранской древесины
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Каждое кольцо создается из древесины, собранной во время наших походов в Татры. Мы тщательно отбираем материал, который природа дарит нам во время каждого хайка в горы, превращая его в уникальные украшения, хранящие дух этих величественных гор.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Card 4 */}
            <a href="/earrings">
              <Card className="bg-black/30 border-0 backdrop-blur-sm text-white opacity-0 animate-fade-in [animation-delay:200ms] hover:border hover:border-white transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Серьги</CardTitle>
                  <CardDescription className="text-white/70">
                    Ручная работа в каждой детали
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Все наши серьги создаются вручную с особым вниманием к каждой детали. Мы бережно обрабатываем каждый элемент, создавая неповторимые украшения, которые сочетают в себе природную красоту дерева и мастерство ручной работы.
                  </p>
                </CardContent>
              </Card>
            </a>

            {/* Card 5 */}
            <a href="/lights">
              <Card className="bg-black/30 border-0 backdrop-blur-sm text-white opacity-0 animate-fade-in [animation-delay:400ms] hover:border hover:border-white transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-white">Письки</CardTitle>
                  <CardDescription className="text-white/70">
                    Природное освещение вашего дома
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80">
                    Наши светильники создаются из тщательно отобранных пней и дубовой древесины. Каждый светильник уникален, так как мы сохраняем естественную структуру дерева, подчеркивая его природную красоту современным освещением.
                  </p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
