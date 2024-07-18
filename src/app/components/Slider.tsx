import React, { useState, useRef, useEffect } from 'react';
import styles from './Slider.module.css';
import Image from "next/image";
import prevArrowImage from '../../../public/prevArrow.svg';
import nextArrowImage from '../../../public/nextArrow.svg';

interface Slide {
    src: string;
    alt: string;
    title: string;
    description: string;
}

interface CustomSliderProps {
    slides: Slide[];
    visibleSlides?: number;
}

const Slider: React.FC<CustomSliderProps> = ({ slides, visibleSlides = 1 }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef<HTMLDivElement>(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + visibleSlides) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - visibleSlides + slides.length) % slides.length);
    };

    useEffect(() => {
        if (slideRef.current) {
            slideRef.current.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    }, [currentSlide, visibleSlides]);

    if (!slides || slides.length === 0) {
        return <div>No slides available</div>;
    }

    return (
        <div className={styles.sliderContainer}>
            <div className={styles.slider} ref={slideRef}>
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`${styles.slide} ${index === currentSlide ? styles.active : ''}`}
                    >
                        <img src={slide.src} alt={slide.alt} className={styles.slideImage} />
                        <div className={styles.slideInfo}>
                            <h2 className={styles.slideTitle}>{slide.title}</h2>
                            <p className={styles.slideDescription}>{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <button className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
                <Image src={prevArrowImage} alt="Prev Arrow" />
            </button>
            <button className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
                <Image src={nextArrowImage} alt="Next Arrow" />
            </button>
        </div>
    );
};

export default Slider;
