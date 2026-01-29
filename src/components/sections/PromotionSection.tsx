"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function PromotionSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-09-15").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-amber-600 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            ƯU ĐÃI GIỚI HẠN
          </h2>
          <p className="text-3xl md:text-4xl font-bold">
            ĐẶT CÀNG SỚM - ƯU ĐÃI CÀNG HỜI
          </p>
          <p className="text-xl opacity-90">
            Tất cả chỉ dành cho khách hàng đăng ký sớm nhất
          </p>

          {/* Countdown */}
          <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">THỜI GIAN ƯU ĐÃI</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white/30 rounded-xl p-4">
                <div className="text-5xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                <div className="text-sm mt-2">Ngày</div>
              </div>
              <div className="bg-white/30 rounded-xl p-4">
                <div className="text-5xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-sm mt-2">Giờ</div>
              </div>
              <div className="bg-white/30 rounded-xl p-4">
                <div className="text-5xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-sm mt-2">Phút</div>
              </div>
              <div className="bg-white/30 rounded-xl p-4">
                <div className="text-5xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                <div className="text-sm mt-2">Giây</div>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">💎</div>
              <h3 className="font-bold text-xl">Chiết khấu CAO</h3>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🎁</div>
              <h3 className="font-bold text-xl">KÈM QUÀ TẶNG</h3>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-xl">VOUCHER FREESHIP</h3>
            </div>
          </div>

          <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50 px-12 py-6 text-xl rounded-full font-bold">
            ĐẶT BÁNH NGAY
          </Button>
        </div>
      </div>
    </section>
  );
}

