import { Button } from "@/components/ui/button";

export default function PremiumGiftBox() {
  const products = [
    "NẤM TRUFFLE THƯỢNG HẠNG (400gr)",
    "BÒ XỐT TIÊU ĐEN (150gr)",
    "TOMYUM HẢI SẢN ĐẶC BiỆT (150gr)",
    "CÁ HỒI XỐT CAM (150gr)",
    "KHẾ BƯỞI QUẾ HOA (150gr)",
  ];

  const sweetProducts = [
    "SEN VÀNG XOÀI DẺO (60gr)",
    "MÃNG CẦU XIÊM XANH (60gr)",
    "SỮA DỪA CÀ PHÊ (60gr)",
    "SEN VẢI HỒNG HOA (60gr)",
    "TRÀ XXX",
    "QUÀ TẶNG YYY",
  ];

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            HỘP QUÀ TRUNG THU 2025
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-amber-300 w-20"></div>
            <p className="text-xl text-amber-700 font-semibold">CÁI LÒ NƯỚNG</p>
            <div className="h-px bg-amber-300 w-20"></div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🎁</div>
                  <p className="text-2xl font-bold text-amber-900">Hộp Quà</p>
                  <p className="text-lg text-amber-700">Cao Cấp</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-amber-900">
                HỘP QUÀ CAO CẤP "THỊNH VƯỢNG"
              </h3>

              <div className="space-y-3">
                <p className="font-semibold text-amber-800">Bánh mặn:</p>
                <ul className="space-y-2">
                  {products.map((product, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-gray-700">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <p className="font-semibold text-amber-800">Bánh ngọt:</p>
                <ul className="space-y-2">
                  {sweetProducts.map((product, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-amber-600 mr-2">•</span>
                      <span className="text-gray-700">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 text-lg rounded-full">
                MUA NGAY
              </Button>

              <p className="text-sm text-gray-600 italic">
                "Khi mùa vụ chín rộ, cũng là lúc mùa trăng sáng nhất. Từng hạt lúa, từng quả ngọt, 
                từng giọt mật của thiên nhiên đều kết tinh vào những chiếc bánh Trung Thu..."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

