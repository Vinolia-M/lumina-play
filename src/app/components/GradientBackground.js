import React, { useEffect, useRef } from 'react';

const GradientBackground = () => {
    const cursorRef = useRef(null);
    
    useEffect(() => {
      const cursor = cursorRef.current;
  
      let mouseX = 0;
      let mouseY = 0;
  
      let cursorX = 0;
      let cursorY = 0;
  
      const speed = 0.01;
  
      function animate() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
  
        cursorX = cursorX + (distX * speed);
        cursorY = cursorY + (distY * speed);
  
        cursor.style.left = cursorX + 'px';
        cursor.style.top = cursorY + 'px';
  
        requestAnimationFrame(animate);
      }
  
      animate();
  
      const handleMouseMove = (event) => {
        mouseX = event.pageX;
        mouseY = event.pageY;
      };
  
      document.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
      
    return <div className="bg__gradient" ref={cursorRef}></div>;
  };
  
  export default GradientBackground;