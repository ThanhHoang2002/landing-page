import { Button } from "@/components/ui/button";

export default function CakeVarieties() {
  const cakes = [
    "Bánh thập cẩm xá xíu thượng hạng",
    "Bánh tắc muối trần bì",
    "Bánh táo đỏ nhân kỳ tử",
    "Bánh bạch liên tôm ngũ vị",
    "Bánh tinh than tre hoàng kim",
    "Bánh thập cẩm hải sản sốt XO",
    "Bánh hoa hồng nhân ổi xá lị",
    "Bánh sữa dừa cà phê",
    "Bánh khế bưởi quế hoa",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-4">
            9 vị bánh
          </h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="h-px bg-amber-300 w-20"></div>
            <p className="text-xl text-amber-700 font-semibold">đặc biệt</p>
            <div className="h-px bg-amber-300 w-20"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cakes.map((cake, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all overflow-hidden"
            >
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                <div className="text-7xl">🥮</div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-amber-900 text-center min-h-[3rem] flex items-center justify-center">
                  {cake}
                </h3>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white rounded-full">
                  MUA NGAY
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

