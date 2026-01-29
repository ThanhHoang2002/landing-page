"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function OrderForm() {
  return (
    <section id="order" className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
                ĐẶT BÁNH SỚM NHẬN ƯU ĐÃI HỜI
              </h2>
              <p className="text-gray-600">
                Thông tin khách hàng được bảo mật và không sử dụng với mục đích khác
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Họ và tên *</Label>
                <Input
                  id="name"
                  placeholder="Nhập họ và tên"
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Số điện thoại *</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Nhập số điện thoại"
                  className="h-12 rounded-xl"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Nhập email"
                  className="h-12 rounded-xl"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="product">Sản phẩm quan tâm *</Label>
                <Select>
                  <SelectTrigger className="h-12 rounded-xl">
                    <SelectValue placeholder="Chọn sản phẩm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="thinh-vuong">HỘP QUÀ CAO CẤP "THỊNH VƯỢNG"</SelectItem>
                    <SelectItem value="thu-vi">Hộp quà "Thu vị"</SelectItem>
                    <SelectItem value="thu-day">Hộp quà "Thu đầy"</SelectItem>
                    <SelectItem value="thu-trang">Hộp quà "Thu trăng"</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Thời gian có thể nhận liên hệ</Label>
                <Input
                  id="time"
                  placeholder="Chọn thời gian"
                  className="h-12 rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white h-14 text-lg rounded-full font-bold"
              >
                ĐẶT HÀNG
              </Button>
            </form>
          </div>

          {/* Company Order Section */}
          <div className="mt-8 bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-amber-900 mb-4">
                Bạn đặt bánh cho
              </h3>
              <p className="text-gray-600">
                Thông tin khách hàng được bảo mật và không sử dụng với mục đích khác
              </p>
            </div>

            <form className="space-y-6">
              <div className="flex gap-4">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="type" value="personal" defaultChecked className="w-4 h-4" />
                  <span>Cá nhân</span>
                </label>
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input type="radio" name="type" value="company" className="w-4 h-4" />
                  <span>Doanh nghiệp</span>
                </label>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-white h-14 text-lg rounded-full font-bold"
              >
                Gửi
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

