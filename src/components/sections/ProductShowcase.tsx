import { Button } from "@/components/ui/button";

export default function ProductShowcase() {
  const boxes = [
    {
      name: 'Hộp quà "Thu vị"',
      items: [
        "NẤM TRUFFLE THƯỢNG HẠNG (150gr)",
        "BÒ XỐT TIÊU ĐEN (150gr)",
        "SEN VÀNG XOÀI DẺO (60gr)",
        "SEN VẢI HỒNG HOA (60gr)",
        "KHẾ BƯỞI QUẾ HOA (60gr)",
        "SỮA DỪA CÀ PHÊ (60gr)",
        "TRÀ XXX",
      ],
    },
    {
      name: 'Hộp quà "Thu đầy"',
      items: [
        "TOMYUM HẢI SẢN ĐẶC BiỆT (150gr)",
        "NẤM TRUFFLE THƯỢNG HẠNG (150gr)",
        "MÃNG CẦU XIÊM XANH (150gr)",
        "SỮA DỪA CÀ PHÊ (60gr)",
        "TRÀ XXX",
      ],
    },
    {
      name: 'Hộp quà "Thu trăng"',
      items: [
        "BÒ XỐT TIÊU ĐEN (150gr)",
        "GÀ NẤM SỐT TERIAKI (150gr)",
        "SEN VẢI HỒNG HOA (150gr)",
        "KHẾ BƯỞI QUẾ HOA (150gr)",
        "TRÀ XXX",
      ],
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-square bg-white rounded-xl mb-4 flex items-center justify-center">
                <div className="text-6xl">🥮</div>
              </div>
              <h3 className="text-2xl font-bold text-amber-900 mb-4">{box.name}</h3>
              <ul className="space-y-2 mb-6">
                {box.items.map((item, idx) => (
                  <li key={idx} className="flex items-start text-sm">
                    <span className="text-amber-600 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                MUA NGAY
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

