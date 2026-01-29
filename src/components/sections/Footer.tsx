export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-amber-900 to-orange-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">Công ty TNHH Cái Lò Nướng</h3>
            <p className="text-amber-100">
              Mã số doanh nghiệp: 0315630862
            </p>
            <p className="text-amber-100 text-sm">
              Giấy chứng nhận đăng ký doanh nghiệp do Sở Kế hoạch và Đầu tư 
              Thành phố Hồ Chí Minh cấp lần đầu ngày 16/04/2019
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">THÔNG TIN LIÊN HỆ</h4>
            <div className="space-y-2 text-amber-100">
              <p className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:02888883388" className="hover:text-white transition">
                  Hotline: 028.8888.3388
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:sale@cailnuong.vn" className="hover:text-white transition">
                  Email: sale@cailnuong.vn
                </a>
              </p>
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>Địa chỉ: 2A Ba Gia, Phường 7, quận Tân Bình, TP HCM</span>
              </p>
            </div>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">DỊCH VỤ KHÁCH HÀNG</h4>
            <ul className="space-y-2 text-amber-100">
              <li>
                <a href="#" className="hover:text-white transition">Chính sách giao hàng</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Chính sách trả hàng - hoàn tiền</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Điều khoản và điều kiện thanh toán</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Bảo vệ thông tin cá nhân người tiêu dùng</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">Thông tin liên hệ</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Store Locations */}
        <div className="border-t border-amber-700 pt-8 mb-8">
          <h4 className="text-xl font-bold mb-4">HỆ THỐNG CỬA HÀNG</h4>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-amber-100">
            <p>🎂 CH1: 15K Nguyễn Thị Minh Khai, quận 1, TP HCM</p>
            <p>🎂 CH2: 173 Nguyễn Thái Học, quận 1, TP HCM</p>
            <p>🎂 CH3: 29 Lê Văn Việt, Hiệp Phú, TP Thủ Đức</p>
            <p>🎂 CH4: 186 Quang Trung, quận Gò Vấp, TP HCM</p>
            <p>🎂 CH5: 477 Nguyễn Thị Thập, Tân Phong, Quận 7</p>
            <p>🎂 CH6: 38 Hoa Mai, P2, quận Phú Nhuận</p>
            <p>🎂 CH7: 2A Ba Gia, quận Tân Bình, TP HCM</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-700 pt-8 text-center text-amber-100">
          <p>Copyright © 2025 Bánh Trung Thu Cái Lò Nướng</p>
        </div>

        {/* Call to Action Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <a
            href="tel:02888883388"
            className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-4 shadow-2xl flex items-center space-x-2 transition-all hover:scale-105"
          >
            <span className="text-2xl">📞</span>
            <div className="text-left">
              <div className="text-sm font-bold">028.8888.3388</div>
              <div className="text-xs">Bấm gọi ngay</div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}

