import './globals.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata = {
  title: '삼성 라이온즈 팬페이지 컨셉',
  description: '팬을 위한 비공식 삼성 라이온즈 팬 커뮤니티 데모 사이트'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-slate-50">
        <NavBar />
        <main className="mx-auto min-h-[70vh] max-w-6xl px-6 py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
