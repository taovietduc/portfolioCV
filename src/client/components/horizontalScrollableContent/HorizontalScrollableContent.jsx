import React, { useRef } from 'react';

const HorizontalScrollableContent = ({ children }) => {
  const containerRef = useRef(null);

  const handleScroll = (e) => {
    const delta = e.deltaY || -e.detail;
    containerRef.current.scrollLeft += delta;
    e.preventDefault();
  };

  return (
    <div
      className="horizontal-scrollable-content"
      ref={containerRef}
      onWheel={handleScroll}
      style={{
        width: '300px',
        height: '200px',
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        border: '1px solid #ccc',
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalScrollableContent;
