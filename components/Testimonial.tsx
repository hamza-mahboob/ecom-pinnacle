"use client";
import React, { useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import TestimonialCard from "./TestimonialCard";
import img from "../app/public/imgs/testimonial1.jpg";

const testimonials = [
  {
    name: "Amelia Joseph",
    position: "Chief Manager",
    feedback:
      "My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.",
    img: img,
  },
  {
    name: "John Doe",
    position: "Project Lead",
    feedback:
      "Fantastic service! They exceeded my expectations and delivered on time.",
    img: img,
  },
  {
    name: "Jane Smith",
    position: "Marketing Director",
    feedback:
      "A creative team that listens to your needs and delivers stunning results!",
    img: img,
  },
  {
    name: "Mike Johnson",
    position: "Designer",
    feedback: "Innovative and reliable! Highly recommend their services.",
    img: img,
  },
  {
    name: "Emily Davis",
    position: "Content Strategist",
    feedback: "Professional, creative, and always on time.",
    img: img,
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsToShow = 2; // Default number of testimonials to show at once
  const startXRef = useRef(0);
  const isDragging = useRef(false);

  const nextTestimonial = () => {
    if (currentIndex < testimonials.length - testimonialsToShow) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    const touchX = e.touches[0].clientX;
    const distance = startXRef.current - touchX;

    if (distance > 50) {
      nextTestimonial();
      isDragging.current = false;
    } else if (distance < -50) {
      prevTestimonial();
      isDragging.current = false;
    }
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const mouseX = e.clientX;
    const distance = startXRef.current - mouseX;

    if (distance > 50) {
      nextTestimonial();
      isDragging.current = false;
    } else if (distance < -50) {
      prevTestimonial();
      isDragging.current = false;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className="mb-[120px]">
      <div className="container mx-auto px-5">
        <div className="flex flex-col">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-5 lg:gap-0">
            <h1 className="text-6xl">What Our Clients Say About Us</h1>
            <div className="flex flex-row gap-5">
              <div
                className="flex size-[85px] rounded-full text-gray-500 hover:text-white bg-[#F8F9FF] hover:bg-primaryColor justify-center items-center cursor-pointer"
                onClick={prevTestimonial}
              >
                <FaArrowLeft className="text-3xl " />
              </div>
              <div
                className="flex size-[85px] rounded-full text-gray-500 hover:text-white bg-[#F8F9FF] hover:bg-primaryColor justify-center items-center cursor-pointer"
                onClick={nextTestimonial}
              >
                <FaArrowRight className="text-3xl" />
              </div>
            </div>
          </div>
          <div
            className="my-[79px] overflow-x-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{
                transform: `translateX(-${(currentIndex * 65) / testimonialsToShow}%)`,
              }}
            >
              <div className="flex flex-nowrap"> {/* Added this div for contained layout */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`mr-4 ${
                      currentIndex === index ? "flex" : "hidden"
                    } sm:flex`}
                  >
                    <TestimonialCard
                      name={testimonial.name}
                      position={testimonial.position}
                      feedback={testimonial.feedback}
                      img={testimonial.img}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
