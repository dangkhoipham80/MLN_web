# Triết học & Giới tính - Từ cổ đại đến hiện đại

Một ứng dụng web tương tác sử dụng Three.js để khám phá hành trình tư tưởng về giới tính trong triết học từ cổ đại đến hiện đại.

## Tính năng chính

- **3D Timeline**: Khám phá sự tiến hóa của tư tưởng về giới qua các thời đại với giao diện 3D tương tác
- **Comic Strip**: Đọc những cuộc đối thoại hài hước và triết lý giữa các triết gia
- **Thảo luận & Khảo sát**: Tham gia tranh luận và bình chọn về các quan điểm triết học
- **Trang triết gia**: Tìm hiểu chi tiết về từng triết gia và tác phẩm của họ
- **Responsive Design**: Tối ưu cho mọi thiết bị

## Công nghệ sử dụng

- **Next.js 15** - React framework
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Styling
- **Chart.js** - Data visualization
- **TypeScript** - Type safety

## Cài đặt và chạy

1. Cài đặt dependencies:

```bash
npm install
```

2. Chạy development server:

```bash
npm run dev
```

3. Mở [http://localhost:3000](http://localhost:3000) trong trình duyệt

## Triển khai lên Vercel

1. Push code lên GitHub repository
2. Kết nối repository với Vercel
3. Vercel sẽ tự động detect Next.js và triển khai

Hoặc sử dụng Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Cấu trúc dự án

```
src/
├── app/
│   ├── page.tsx              # Trang chủ
│   ├── comic/
│   │   └── page.tsx          # Trang comic strip
│   ├── discussion/
│   │   └── page.tsx          # Trang thảo luận
│   └── philosopher/
│       └── [name]/
│           └── page.tsx      # Trang chi tiết triết gia
├── components/
│   ├── Navigation.tsx        # Navigation component
│   ├── HeroSection.tsx       # Hero section
│   └── TimelineScene.tsx     # 3D Timeline component
└── globals.css               # Global styles
```

## Nội dung triết học

Dự án bao gồm các triết gia và tư tưởng chính:

- **Plato** (427-347 TCN): Linh hồn phi giới, bình đẳng tinh thần
- **Aristotle** (384-322 TCN): Trật tự tự nhiên, phân biệt giới tính
- **Mary Wollstonecraft** (1759-1797): Quyền giáo dục phụ nữ
- **John Stuart Mill** (1806-1873): Tự do cá nhân, bình đẳng giới
- **Simone de Beauvoir** (1908-1986): Giới là sản phẩm xã hội
- **Judith Butler** (1956-nay): Giới như "màn trình diễn"

## Minh bạch AI

Dự án này sử dụng AI để hỗ trợ:

- Viết nội dung và cấu trúc
- Tạo hình minh họa và bố cục
- Phát triển giao diện người dùng

Tất cả thông tin triết học đều được kiểm tra và chỉnh sửa thủ công để đảm bảo tính chính xác.

## Tài liệu tham khảo

- The Second Sex – Simone de Beauvoir
- Gender Trouble – Judith Butler
- The Republic – Plato
- Politics – Aristotle
- On Liberty – John Stuart Mill

## License

MIT License - Xem file LICENSE để biết thêm chi tiết.
