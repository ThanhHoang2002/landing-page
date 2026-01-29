import { Button } from "@/components/ui/button";

export default function CorporateSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-900 to-orange-800 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            HỘP BÁNH SANG TRỌNG
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-amber-300 w-20"></div>
            <p className="text-xl font-semibold">Giải pháp quà tặng cho doanh nghiệp</p>
            <div className="h-px bg-amber-300 w-20"></div>
          </div>

          <p className="text-lg leading-relaxed opacity-90">
            Với bề dày kinh nghiệm 10 năm đồng hành cùng hàng nghìn doanh nghiệp mỗi mùa Trung Thu, 
            Cái Lò Nướng tự hào mang đến giải pháp quà tặng thẩm mỹ, chính chủ và linh hoạt – 
            từ hình thức bao bì có thể cá nhân hóa theo yêu cầu, đến chất lượng được đảm bảo 
            bởi đội ngũ sản xuất chuyên nghiệp, sáng tạo hương vị theo công thức độc quyền.
          </p>

          <div className="grid md:grid-cols-3 gap-6 pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">📦</div>
              <h3 className="font-bold text-xl mb-2">Bao bì cá nhân hóa</h3>
              <p className="text-sm opacity-80">Thiết kế theo yêu cầu riêng</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">⭐</div>
              <h3 className="font-bold text-xl mb-2">Chất lượng đảm bảo</h3>
              <p className="text-sm opacity-80">Đội ngũ sản xuất chuyên nghiệp</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-bold text-xl mb-2">Ưu đãi hấp dẫn</h3>
              <p className="text-sm opacity-80">Chiết khấu cho đối tác</p>
            </div>
          </div>

          <Button size="lg" className="bg-white text-amber-900 hover:bg-amber-50 px-8 py-6 text-lg rounded-full">
            ĐẶT BÁNH NGAY
          </Button>
        </div>
      </div>
    </section>
  );
}

