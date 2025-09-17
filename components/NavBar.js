import Link from 'next/link';

const navItems = [
  { href: '/', label: '메인' },
  { href: '/players', label: '선수 정보' },
  { href: '/records', label: '경기 기록' },
  { href: '/community', label: '팬 커뮤니티' },
  { href: '/admin', label: '관리자' }
];

export default function NavBar() {
  return (
    <header className="bg-lionsBlue text-white sticky top-0 z-40 shadow">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          삼성 라이온즈 팬페이지
        </Link>
        <nav className="flex flex-wrap gap-3 text-sm font-semibold uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full bg-white/10 px-4 py-2 transition hover:bg-white/20"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
