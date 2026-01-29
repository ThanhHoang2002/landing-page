"use client";

import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anh Minh Tâm",
      age: "41 tuổi, kinh doanh bất động sản",
      content: "Bánh ngon, hộp sang, đúng chuẩn quà Trung thu. Mình chọn set cao cấp để gửi tặng đối tác, vì bao bì nhìn tinh tế, ép kim đẹp và rất chỉnh chu. Nhận được feedback ngược lại là bánh ngon thật, vị nào cũng đáng thử",
      avatar: "👨‍💼",
    },
    {
      name: "Chị Hà Mi",
      age: "28 tuổi, freelance",
      content: "Không chỉ ngon mà còn 'đẹp' từ trong ra ngoài. Mình rất bất ngờ với chất lượng bánh Cái Lò Nướng: hộp bánh thiết kế trang nhã, bánh mặn và ngọt đều rất dễ ăn, hiện đại và mang vị Tết Trung thu",
      avatar: "👩‍💻",
    },
    {
      name: "Chị Ngọc Mai",
      age: "32 tuổi, NVVP",
      content: "Mua bánh Trung thu ở đây từ năm 2020, và mỗi năm đều bất ngờ. Có thể là vị mới, có thể thiết kế hộp mới nhưng hương vị lúc nào cũng chất lượng vô cùng và hộp thì đẹp lắm luôn.",
      avatar: "👩‍💼",
    },
    {
      name: "Chị Hồng Ngọc",
      age: "41 tuổi, trưởng phòng",
      content: "Tôi chọn Cái Lò Nướng để biếu sếp vì hộp bánh rất chỉnh chu, sang trọng. Nhưng điều tôi thích nhất vẫn là bánh thật sự chất lượng, vừa ngon vừa đẹp",
      avatar: "👩‍💼",
    },
    {
      name: "Chị Yến Nhi",
      age: "28 tuổi, NVVP",
      content: "Năm nào Cái Lò Nướng cũng phát triển câu chuyện bánh Trung thu rất ấn tượng. Đi kèm là các thiết kế hộp phù hợp, để tôi có thể thoải mái lựa chọn. Mình đã giới thiệu cho cả bạn bè công ty, ai ăn xong cũng khen. Chắc năm sau vẫn đặt tiếp.",
      avatar: "👩",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            KHÁCH HÀNG NÓI GÌ VỀ
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-amber-300 w-20"></div>
            <p className="text-xl text-amber-700 font-semibold">Bánh Trung thu của Cái Lò Nướng</p>
            <div className="h-px bg-amber-300 w-20"></div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{testimonials[currentIndex].avatar}</div>
              <h3 className="text-2xl font-bold text-amber-900 mb-2">
                {testimonials[currentIndex].name}
              </h3>
              <p className="text-gray-600">{testimonials[currentIndex].age}</p>
            </div>
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              {testimonials[currentIndex].content}
            </p>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-amber-50 transition"
          >
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-amber-50 transition"
          >
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-amber-600 w-8" : "bg-amber-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

