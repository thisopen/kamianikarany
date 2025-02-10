import React, { useRef } from "react";

const HorizontalScroll = ({ children }) => {
  const containerRef = useRef(null);

  const handleWheel = (e) => {
    const container = containerRef.current;
    if (!container) return;

    // Прокручиваем контейнер горизонтально
    container.scrollLeft += e.deltaY;
    e.preventDefault(); // Предотвращаем стандартное поведение (вертикальная прокрутка)
    e.stopPropagation(); // Предотвращаем распространение события на родительские элементы
  };

  return (
    <div
      ref={containerRef}
      className="horizontal-scroll-container overflow-x-auto whitespace-nowrap pb-4"
      onWheel={handleWheel} // Добавляем обработчик колесика мыши
    >
      <div className="inline-flex space-x-4">
        {children}
      </div>
    </div>
  );
};

export default HorizontalScroll;