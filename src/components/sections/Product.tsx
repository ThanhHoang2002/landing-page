"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import product1 from "../../../public/products/product1.svg"
import product2 from "../../../public/products/product2.svg"
import product3 from "../../../public/products/product3.svg"
import product4 from "../../../public/products/product4.svg"
import product5 from "../../../public/products/product5.svg"
import product6 from "../../../public/products/product6.svg"
import product7 from "../../../public/products/product7.svg"
import product8 from "../../../public/products/product8.svg"
import product9 from "../../../public/products/product9.svg"
import product10 from "../../../public/products/product10.svg"
import product11 from "../../../public/products/product11.svg"
import product12 from "../../../public/products/product12.svg"

import { StaticImport } from "next/dist/shared/lib/get-img-props";

// Import product1 gallery images
import product1_img1 from "../../../public/products/product1/20260113_1120_Image Generation_remix_01kets9j6ke1m91hxh56egvjg7.png";
import product1_img2 from "../../../public/products/product1/Gemini_Generated_Image_hge49ahge49ahge4.png";
import product1_img3 from "../../../public/products/product1/Gemini_Generated_Image_i1oqeei1oqeei1oq.png";
import product1_img4 from "../../../public/products/product1/Gemini_Generated_Image_i6ppu7i6ppu7i6pp.png";

// Import product2 gallery images
import product2_img1 from "../../../public/products/product2/1.png";
import product2_img2 from "../../../public/products/product2/2.png";
import product2_img3 from "../../../public/products/product2/3.png";
import product2_img4 from "../../../public/products/product2/4.png";
import product2_img5 from "../../../public/products/product2/5.png";
import product2_img6 from "../../../public/products/product2/6.png";
import product2_img7 from "../../../public/products/product2/7.png";

// Import product3 gallery images
import product3_img1 from "../../../public/products/product3/2-Picsart-AiImageEnhancer.png";
import product3_img2 from "../../../public/products/product3/3-Picsart-AiImageEnhancer.png";
import product3_img3 from "../../../public/products/product3/BeautyPlus-image-enhancer-1768787115610.jpg";
import product3_img4 from "../../../public/products/product3/BetterImage_1768787169789.jpeg";
import product3_img5 from "../../../public/products/product3/BetterImage_1768787203215.jpeg";
import product3_img6 from "../../../public/products/product3/BetterImage_1768787209527.jpeg";

// Import product4 gallery images
import product4_img1 from "../../../public/products/product4/1.png";
import product4_img2 from "../../../public/products/product4/2.png";
import product4_img3 from "../../../public/products/product4/3.png";
 

// Import product5 gallery images
import product5_img1 from "../../../public/products/product5/1.png";
import product5_img2 from "../../../public/products/product5/2.png";
import product5_img3 from "../../../public/products/product5/3.png";
import product5_img4 from "../../../public/products/product5/4.png";



// Import product6 gallery images
import product6_img1 from "../../../public/products/product6/2.png";
import product6_img2 from "../../../public/products/product6/3.png";
import product6_img3 from "../../../public/products/product6/4.png";
import product6_img4 from "../../../public/products/product6/5.png";
import product6_img5 from "../../../public/products/product6/6.png";
import product6_img6 from "../../../public/products/product6/7.png";
import product6_img7 from "../../../public/products/product6/8.png";
import product6_img8 from "../../../public/products/product6/9.png";

// Import product8 gallery images
import product8_img1 from "../../../public/products/product8/1.png";
import product8_img2 from "../../../public/products/product8/2.png";
import product8_img3 from "../../../public/products/product8/3.png";
import product8_img4 from "../../../public/products/product8/4.png";
import product8_img5 from "../../../public/products/product8/5.png";
import product8_img6 from "../../../public/products/product8/6.png";
import product8_img7 from "../../../public/products/product8/7.png";

// Import product9 gallery images
import product9_img1 from "../../../public/products/product9/1.png";
import product9_img2 from "../../../public/products/product9/2.png";
import product9_img3 from "../../../public/products/product9/3.png";
import product9_img4 from "../../../public/products/product9/4.png";
import product9_img5 from "../../../public/products/product9/5.png";
import product9_img6 from "../../../public/products/product9/6.png";
import product9_img7 from "../../../public/products/product9/7.png";

// Import product10 gallery images
import product10_img1 from "../../../public/products/product10/1.png";
import product10_img2 from "../../../public/products/product10/2.png";
import product10_img3 from "../../../public/products/product10/3.png";
import product10_img4 from "../../../public/products/product10/4.png";
import product10_img5 from "../../../public/products/product10/5.png";
import product10_img6 from "../../../public/products/product10/6.png";
import product10_img7 from "../../../public/products/product10/7.png";
import product10_img8 from "../../../public/products/product10/8.png";

// Import product12 gallery images
import product12_img1 from "../../../public/products/product12/1.png";
import product12_img2 from "../../../public/products/product12/2.png";
import product12_img3 from "../../../public/products/product12/3.png";
import product12_img4 from "../../../public/products/product12/4.png";
import product12_img5 from "../../../public/products/product12/5.png";
import product12_img6 from "../../../public/products/product12/6.png";
import product12_img7 from "../../../public/products/product12/7.png";
import product12_img8 from "../../../public/products/product12/8.png";
import product12_img9 from "../../../public/products/product12/9.png";
import product12_img10 from "../../../public/products/product12/10.png";
declare global {
  interface Window {
    fbq?: (action: string, event: string, params?: Record<string, string | number>) => void;
  }
}
// Product data based on Figma design
const PRODUCTS_BIEU = [
  {
    id: 1,
    name: "SÂM NHƯ Ý SONG CHI",
    price: "798.000đ",
    details: [
      "• Hộp: 2 chai",
      "• Kích Thước Hộp: 38x28x12 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "• Dung tích: 700ml/chai",
      "• Nồng độ: 52°",
    ],
    image: product1,
    gallery: [product1_img1, product1_img2, product1_img3, product1_img4]
  },
  {
    id: 2,
    name: "PHI THIÊN SÂM TRÙNG TỬU - ĐỎ",
    price: "998.000đ",
    details: [
      "• Hộp: 2 chai",
      "• Kích Thước Hộp: 35x25x11 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "• Dung tích: 500ml/chai",
      "• Nồng độ: 52°",
    ],
    image: product2,
    gallery: [product2_img1, product2_img2, product2_img3, product2_img4, product2_img5, product2_img6, product2_img7]
  },
  {
    id: 3,
    name: "PHI THIÊN SÂM TRÙNG TỬU - NÂU",
    price: "998.000đ",
    details: [
      "• Hộp: 2 chai",
      "• Kích Thước Hộp: 35x25x11 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "• Dung tích: 500ml/chai",
      "• Nồng độ: 52°",
    ],
    image: product3,
    gallery: [product3_img1, product3_img2, product3_img3, product3_img4, product3_img5, product3_img6]
  },
  {
    id: 4,
    name: "TÂY DƯƠNG SÂM LỘC TỬU",
    price: "1.388.000đ",
    details: [
      "• Hộp: 2 chai",
      "• Kích Thước Hộp: 41x31x12 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Tây Dương Sâm (Sâm Mỹ)",
      "3. Nhung Hươu",
      "• Dung tích: 700ml/chai",
      "• Nồng độ: 52",
    ],
    image: product4,
    gallery: [product4_img1, product4_img2, product4_img3]
  },
  {
    id: 5,
    name: "TỨ BẢO NHÂN SÂM",
    price: "1.688.000đ",
    details: [
      "• Hộp: 4 chai (Mỗi chai 1 vị)",
      "• Kích Thước Hộp: 41x32x11 (cm)",
      "•Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "4. Đông Trùng Hạ Thảo",
      "5. Sữa Ong Chúa",
      "• Dung tích: 500ml/chai",
      "• Nồng độ: 52",
    ],
    image: product5,
    gallery: [product5_img1, product5_img2, product5_img3, product5_img4]
  },
  {
    id: 6,
    name: "NHÂN SÂM LỘC BẢO TỬU",
    price: "1.688.000đ",
    details: [
      "• Hộp: 4 chai (Mỗi chai 1 vị)",
      "• Kích Thước Hộp: 41x32x11 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung, Đuôi, Cà, Gân Hươu",
      "4. Đông Trùng Hạ Thảo",
      "• Dung tích: 600ml/chai",
      "• Nồng độ: 52°",
    ],
    image: product6,
    gallery: [product6_img1, product6_img2, product6_img3, product6_img4, product6_img5, product6_img6, product6_img7, product6_img8]
  },
];

const PRODUCTS_GIA_DINH = [
  {
    id: 7,
    name: "RƯỢU SÂM PANDA",
    price: "Hết Hàng",
    details: [
      "• Hộp: 2 chai",
      "• Kích Thước Hộp: 35x25x11 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "• Dung tích: 500ml/chai",
      "• Nồng độ: 52",
    ],
    image: product7
  },
  {
    id: 8,
    name: "rượu sâm ruyjilong",
    price: "489.000đ",
    details: [
      "• Hộp: 2 chai",
      "• Kích Thước Hộp: 35x25x11 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "• Dung tích: 500ml/chai",
      "• Nồng độ: 52°",
    ],
    image: product8,
    gallery: [product8_img1, product8_img2, product8_img3, product8_img4, product8_img5, product8_img6, product8_img7]
  },
  {
    id: 9,
    name: "rượu SÂM Rordyceps",
    price: "498.000đ",
    details: [
      "• Hộp: 2 chai",
      "• Kích Thước Hộp: 35x25x11 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "• Dung tích: 500ml/chai",
      "•  Nồng độ: 52°",
    ],
    image: product9,
    gallery: [product9_img1, product9_img2, product9_img3, product9_img4, product9_img5, product9_img6, product9_img7]
  },
  {
    id: 10,
    name: "rượu sâm nhung hươu",
    price: "648.000đ",
    details: [
      "• Hộp: 1 chai",
      "• Kích Thước Hộp: 35x25x11 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "• Dung tích: 500ml/chai",
      "•  Nồng độ: 52°",
    ],
    image: product10,
    gallery: [product10_img1, product10_img2, product10_img3, product10_img4, product10_img5, product10_img6, product10_img7, product10_img8]
  },
  {
    id: 11,
    name: "SÂM RORDYCEPS & TAM TRÀ",
    price: "1.188.000đ",
    details: [
      "• Hộp: 1 chai Rượu + 3 loại Trà",
      "• Kích Thước Hộp: 38x28x12 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Đông Trùng Hạ Thảo",
      "4. Hồng Trà",
      "5. Bạch Trà",
      "6. Trà Phổ Nhĩ",
      "• Dung tích: 500ml/chai",
      "•  Nồng độ: 45",
    ],
    image: product11
  },
  {
    id: 12,
    name: "RƯỢU HẢI SÂM",
    price: "1.498.000đ",
    details: [
      "• Hộp: 1 chai",
      "• Kích Thước Hộp: 38x28x12 (cm)",
      "• Thành phần chính:",
      "1. Rượu Mao Đài",
      "2. Nhân Sâm Núi Trường Bạch",
      "3. Nhung Hươu",
      "4. Hải Sâm",
      "• Dung tích: 700ml/chai",
      "•   Nồng độ: 52°",
    ],
    image: product12,
    gallery: [product12_img1, product12_img2, product12_img3, product12_img4, product12_img5, product12_img6, product12_img7, product12_img8, product12_img9, product12_img10]
  },
];


const WINE_TYPES = [
  "Rượu Mao Đài Quý Châu",
  "Nhân Sâm Núi Trường Bạch",
  "Đông Trùng Hạ Thảo",
  "Nhung Hương",
  "Tây Dương Sâm",
  "Hải Sâm",
];

const Product = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    product: "",
    callTime: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // URL này phải là URL từ Google Apps Script Web App
      // Không phải URL của Google Sheets
      // Dạng: https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
      const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwvF8hVBcDVhpUFkra8GDIqBuYgfgGau9-0HJpqJnHXs_578RIpEQ_ntoIVEW612KTPPQ/exec";

      // Tạo FormData để gửi
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formDataToSend,
        redirect: "follow",
      });

      const result = await response.json();

      if (result.status === "success") {
        // Track Facebook Pixel event - Lead
        if (typeof window !== 'undefined' && window .fbq) {
          window.fbq('track', 'CompleteRegistration', {
            product_name: formData.product,
            customer_name: formData.name,
            customer_phone: formData.phone,
            customer_email: formData.email,
          });
        }

        // Show success modal
        setShowSuccessModal(true);

        // Reset form
        setFormData({
          name: "",
          phone: "",
          email: "",
          product: "",
          callTime: "",
        });
      } else {
        throw new Error(result.message || "Có lỗi xảy ra");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Có lỗi xảy ra. Vui lòng thử lại sau.",
      });

      // Tự động ẩn thông báo lỗi sau 5 giây
      setTimeout(() => {
        setSubmitStatus({ type: null, message: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSuccessModal) {
        setShowSuccessModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showSuccessModal]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [showSuccessModal]);

  return (
    <section
      className="relative min-h-screen w-full py-12 md:py-16 lg:py-20 overflow-x-hidden"
      style={{
        backgroundImage: "url('/bg/product.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Image className="absolute top-0 left-0" src={'/bg/logo1.svg'} alt="đèn lồng" width={146} height={192}/>
      <Image className="absolute top-0 -right-28 md:right-0" src={'/bg/logo2.svg'} alt="đèn lồng" width={295} height={233}/>

      {/* Success Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setShowSuccessModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] border-2 border-[#FFEE56] rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
              aria-label="Đóng"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Success Icon with Animation */}
            <div className="flex justify-center mb-6">
              <div className="relative">
                {/* Outer Ring Animation */}
                <div className="absolute inset-0 rounded-full border-4 border-[#FFEE56] animate-ping opacity-20" />
                
                {/* Success Circle */}
                <div className="relative w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#558B2F] to-[#33691E] rounded-full flex items-center justify-center shadow-lg">
                  {/* Checkmark */}
                  <svg
                    className="w-12 h-12 md:w-14 md:h-14 text-white animate-checkmark"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Success Message */}
            <div className="text-center space-y-4">
              <h3 className="text-[#FFEE56] text-2xl md:text-3xl font-bold font-cormorant">
                Đặt Hàng Thành Công!
              </h3>

              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#FFEE56] to-transparent mx-auto" />

              <p className="text-white text-base md:text-lg leading-relaxed px-4">
                Cảm ơn bạn đã đặt hàng.
                <br />
                <span className="text-[#FFEE56] font-semibold">
                  Vui lòng chờ nhân viên xác nhận đơn hàng.
                </span>
              </p>

              <p className="text-white/70 text-sm">
                Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.
              </p>
            </div>

            {/* Action Button */}
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setShowSuccessModal(false)}
                className="relative group"
              >
                <div
                  className="px-8 py-3 bg-[#FFCD40] rounded-full transition-transform group-hover:scale-105"
                  style={{
                    boxShadow:
                      "0px 0px 0px 3px rgba(244, 159, 36, 1), inset 4px 4px 2px 0px rgba(255, 218, 143, 1), inset -4px -4px 2px 0px rgba(239, 187, 58, 1)",
                  }}
                >
                  <span className="text-[#FF061C] text-lg font-bold font-roboto">
                    Đã Hiểu
                  </span>
                </div>
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden rounded-3xl">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#FFEE56]/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-[#558B2F]/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
          {/* Logo */}
          <div className="w-24 h-24 md:w-32 md:h-32 lg:w-[173px] lg:h-[171px] relative">
            <Image
              src="/logo/logo.svg"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>

          {/* Title */}
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[616px] h-auto aspect-[616/97]">
            <h1 className="text-[#FFEE56] text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-splash">
              Rượu Sâm Cao Cấp
            </h1>
          </div>

          {/* Intro Card */}
          <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start gap-6 lg:gap-8">
            {/* Intro image */}
            <div className="w-full lg:w-[486px] h-auto aspect-[486/332] relative flex-shrink-0 mx-auto lg:mx-0">
              <Image src="/products/intro-image.svg" alt="Intro" fill className="object-contain" />
            </div>

            {/* Intro Content */}
            <div className="flex-1 border border-[#FFEE56] p-4 sm:p-6 md:p-8 bg-black/20 backdrop-blur-sm shadow-[0_0_10px_#FFEE56]" >
              <h2 className="text-[#FFEE56] text-lg sm:text-xl md:text-2xl text-center font-saira-stencil underline mb-4 md:mb-6">
                HỘP QUÀ RƯỢU SÂM CAO CẤP
              </h2>

              <div className="w-full h-px bg-[#FFEE56] mb-4 md:mb-6 blur-[10px]" />

              <p className="text-[#FFEE56] text-sm sm:text-base leading-relaxed mb-6 md:mb-8" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
                &quot;Kết tinh tinh hoa sâm quý núi rừng và rượu hảo hạng ủ qua thời
                gian, mỗi giọt rượu là sự cân bằng giữa sức khỏe và giá trị bền
                lâu. Hộp quà rượu sâm không chỉ là món quà an khang dành cho
                gia đình, mà còn là biểu trưng của sự trân trọng, uy tín và lời
                chúc thịnh vượng khi trao tặng đối tác, người dẫn lối thành
                công.&quot;
              </p>

              {/* Wine Types Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 md:gap-2">
                {WINE_TYPES.map((type, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 md:gap-3"
                  >
                    <div className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0">
                     <Image src='/logo/wine.svg' alt="logo" width={20} height={20}/> 
                    </div>
                    <span className="text-[#FFEE56] text-xs sm:text-sm md:text-base font-barlow underline">
                      {type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Category: Mẫu Rượu Biếu */}
        <div id="product" className="mb-12 md:mb-16 lg:mb-20">
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative w-full max-w-[424px] h-[80px] md:h-[108px]">
              <div
                className="absolute inset-0 bg-[#FFCD40] rounded-full"
                style={{
                  boxShadow:
                    "0px 0px 0px 8px rgba(244, 160, 37, 1), 0px 0px 40px 0px rgba(255, 238, 204, 1), inset 12px 12px 2px 0px rgba(255, 218, 143, 1), inset -8px -8px 2px 0px rgba(239, 187, 58, 1)",
                }}
              />
              <h2 className="absolute inset-0 flex items-center justify-center text-[#FF061C] text-2xl md:text-3xl lg:text-4xl font-cormorant font-bold">
                Mẫu Rượu Biếu
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {PRODUCTS_BIEU.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Category: Mẫu Rượu Gia Đình */}
        <div className="mb-12 md:mb-16 lg:mb-20">
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative w-full max-w-[424px] h-[80px] md:h-[108px]">
              <div
                className="absolute inset-0 bg-[#FFCD40] rounded-full"
                style={{
                  boxShadow:
                    "0px 0px 0px 8px rgba(244, 160, 37, 1), 0px 0px 40px 0px rgba(255, 238, 204, 1), inset 12px 12px 2px 0px rgba(255, 218, 143, 1), inset -8px -8px 2px 0px rgba(239, 187, 58, 1)",
                }}
              />
              <h2 className="absolute inset-0 flex items-center justify-center text-[#FF061C] text-2xl md:text-3xl lg:text-4xl font-cormorant font-bold">
                Mẫu Rượu Gia Đình
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 max-w-7xl mx-auto">
            {PRODUCTS_GIA_DINH.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* Order Form Section */}
        <div id="form-product" className="mb-12 md:mb-16">
          <div className="flex justify-center mb-8 md:mb-12">
            <div className="relative w-full max-w-[424px] h-[80px] md:h-[108px]">
              <div
                className="absolute inset-0 bg-[#FFCD40] rounded-full"
                style={{
                  boxShadow:
                    "0px 0px 0px 8px rgba(244, 160, 37, 1), 0px 0px 40px 0px rgba(255, 238, 204, 1), inset 12px 12px 2px 0px rgba(255, 218, 143, 1), inset -8px -8px 2px 0px rgba(239, 187, 58, 1)",
                }}
              />
              <h2 className="absolute inset-0 flex items-center justify-center text-[#FF061C] text-xl md:text-2xl lg:text-4xl font-bold px-4 text-center" style={{ fontFamily: 'UTM Cooper Black, serif' }}>
                Thông Tin Đặt Hàng
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-7xl mx-auto items-center justify-items-center">
            {/* Order Form */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="border border-[#FFEE56] rounded-2xl p-6 md:p-8 bg-black/20 backdrop-blur-sm max-w-md" 
              style={{backgroundImage: 'url("/bg/form.svg")', backgroundSize: 'cover', backgroundPosition: 'center'}}
            >
              <motion.h3 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-white text-xl md:text-2xl font-semibold text-center mb-6 md:mb-8 font-baloo"
              >
                ĐẶT HÀNG SỚM ĐỂ
                <br />
                NHẬN ƯU ĐÃI
              </motion.h3>

              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`p-4 rounded-lg text-center ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 border border-green-500 text-green-100"
                        : "bg-red-500/20 border border-red-500 text-red-100"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <motion.input
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  type="text"
                  name="name"
                  placeholder="Họ và tên"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded bg-white text-black/45 placeholder:text-black/45 text-base md:text-lg font-montserrat focus:outline-none focus:ring-2 focus:ring-[#FFEE56] transition-all"
                  required
                  disabled={isSubmitting}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.input
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded bg-white text-black/45 placeholder:text-black/45 text-base md:text-lg font-montserrat focus:outline-none focus:ring-2 focus:ring-[#FFEE56] transition-all"
                  required
                  disabled={isSubmitting}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.input
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded bg-white text-black/45 placeholder:text-black/45 text-base md:text-lg font-montserrat focus:outline-none focus:ring-2 focus:ring-[#FFEE56] transition-all"
                  required
                  disabled={isSubmitting}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.select
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  name="product"
                  value={formData.product}
                  onChange={handleSelectChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded bg-white text-black/45 text-base md:text-lg font-montserrat focus:outline-none focus:ring-2 focus:ring-[#FFEE56] transition-all cursor-pointer appearance-none bg-[url('data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27 fill=%27none%27 stroke=%27%23666%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27%3e%3cpolyline points=%276 9 12 15 18 9%27%3e%3c/polyline%3e%3c/svg%3e')] bg-[length:1.5em] bg-[right_0.5rem_center] bg-no-repeat uppercase"
                  disabled={isSubmitting}
                  whileFocus={{ scale: 1.02 }}
                >
                  <option value="" disabled>
                    Chọn sản phẩm quan tâm
                  </option>
                  
                  <optgroup label="🎁 Mẫu Rượu Biếu" className="font-bold text-[#FF061C]">
                    {PRODUCTS_BIEU.map((product) => (
                      <option key={product.id} value={product.name} className="text-black">
                        {product.name} - {product.price}
                      </option>
                    ))}
                  </optgroup>

                  <optgroup label="🏠 Mẫu Rượu Gia Đình" className="font-bold text-[#FF061C]">
                    {PRODUCTS_GIA_DINH.map((product) => (
                      <option key={product.id} value={product.name} className="text-black uppercase">
                        {product.name} - {product.price}
                      </option>
                    ))}
                  </optgroup>
                </motion.select>

                <motion.input
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  type="text"
                  name="callTime"
                  placeholder="Địa chỉ nhận hàng"
                  value={formData.callTime}
                  onChange={handleInputChange}
                  className="w-full px-4 md:px-6 py-3 md:py-4 rounded bg-white text-black/45 placeholder:text-black/45 text-base md:text-lg font-montserrat focus:outline-none focus:ring-2 focus:ring-[#FFEE56] transition-all"
                  disabled={isSubmitting}
                  whileFocus={{ scale: 1.02 }}
                />

                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    y: [0, -8, 0],
                  }}
                  transition={{
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full max-w-[256px] mx-auto block relative h-[61px] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <motion.div
                    animate={{
                      boxShadow: [
                        "0px 0px 0px 4px rgba(244, 159, 36, 1), inset 6px 6px 2px 0px rgba(255, 218, 143, 1), inset -6px -6px 2px 0px rgba(239, 187, 58, 1)",
                        "0px 0px 0px 4px rgba(244, 159, 36, 1), 0px 0px 20px 5px rgba(255, 238, 86, 0.5), inset 6px 6px 2px 0px rgba(255, 218, 143, 1), inset -6px -6px 2px 0px rgba(239, 187, 58, 1)",
                        "0px 0px 0px 4px rgba(244, 159, 36, 1), inset 6px 6px 2px 0px rgba(255, 218, 143, 1), inset -6px -6px 2px 0px rgba(239, 187, 58, 1)",
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="absolute inset-0 bg-[#FFCD40] rounded-full"
                  />
                  <span className="absolute inset-0 flex items-center justify-center text-[#FF061C] text-2xl md:text-3xl font-roboto font-bold">
                    {isSubmitting ? "Đang gửi..." : "Đặt Hàng"}
                  </span>
                </motion.button>

                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  className="text-white text-xs md:text-sm text-center max-w-[232px] mx-auto leading-relaxed italic"
                >
                  Thông tin khách hàng bảo mật và không sử dụng mục đích khác
                </motion.p>
              </form>
            </motion.div>

            {/* Form Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              <Image src='/products/form-image.svg' className="h-[624px]" alt="form" width={624} height={662}/>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Image Gallery Dialog Component
const ImageGalleryDialog = ({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: {
  images: StaticImport[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const handleArrowLeft = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevious();
    };
    const handleArrowRight = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("keydown", handleArrowLeft);
      document.addEventListener("keydown", handleArrowRight);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("keydown", handleArrowLeft);
      document.removeEventListener("keydown", handleArrowRight);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, currentIndex]);

 

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Dialog Content */}
      <div
        className="relative w-full max-w-5xl animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Image Container */}
        <div className="relative bg-black/50 rounded-lg overflow-hidden">
          <div className="relative w-full aspect-[4/3]">
            <Image
              src={images[currentIndex]}
              alt={`Ảnh ${currentIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
                aria-label="Ảnh trước"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
                aria-label="Ảnh tiếp"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm">
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="flex gap-2 mt-4 justify-center overflow-x-auto pb-2">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-20 h-20 flex-shrink-0 rounded overflow-hidden transition-all ${
                  index === currentIndex
                    ? "ring-2 ring-[#FFEE56] scale-110"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({
  product,
}: {
  product: { 
    name: string; 
    price: string; 
    details: string[]; 
    image: StaticImport;
    gallery?: StaticImport[];
  };
}) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const handleImageClick = () => {
    if (product.gallery && product.gallery.length > 0) {
      setIsGalleryOpen(true);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-3 md:gap-4 h-full">
        {/* Product Image Placeholder */}
        <div 
          className={`w-full ${product.gallery && product.gallery.length > 0 ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`}
          onClick={handleImageClick}
        >
          <Image className="w-full" src={product.image} alt={product.name} />
        </div>

      {/* Product Info Card */}
      <div className="flex-1 w-full border border-[#FFEE56] p-4 md:p-6 shadow-[0_0_10px_#FFEE56]">
        <h3 className="text-[#FFEE56] text-base md:text-lg lg:text-xl text-center mb-4 md:mb-6 font-cormorant font-bold uppercase">
          {product.name}
        </h3>

        <div className="text-[#FFEE56] text-xs md:text-sm lg:text-base space-y-1 mb-4 md:mb-6" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
          {product.details.map((detail, index) => (
            <p key={index} className="leading-relaxed">
              {detail}
            </p>
          ))}
        </div>
      </div>

        {/* Price Button */}
        <a href="#form-product" className="relative w-full max-w-[217px] h-[60px]" >
          <div
            className="absolute inset-0 bg-[#FFCD40] rounded-full"
            style={{
              boxShadow:
                "0px 0px 0px 4px rgba(244, 159, 36, 1), inset 12px 12px 2px 0px rgba(255, 218, 143, 1), inset -8px -8px 2px 0px rgba(239, 187, 58, 1)",
            }}
          />
          <span className="absolute inset-0 flex items-center justify-center text-[#FF061C] text-2xl md:text-3xl lg:text-4xl font-bold italic" style={{ fontFamily: 'Times New Roman, Times, serif' }}>
            {product.price}
          </span>
        </a>
      </div>

      {/* Image Gallery Dialog */}
      {product.gallery && product.gallery.length > 0 && (
        <ImageGalleryDialog
          images={product.gallery}
          isOpen={isGalleryOpen}
          onClose={() => setIsGalleryOpen(false)}
          initialIndex={0}
        />
      )}
    </>
  );
};

export default Product;
