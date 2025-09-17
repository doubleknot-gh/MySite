import PageHero from '../components/PageHero';
import { recentGames, upcomingGame, seasonTrends } from '../data/games';
import { newsItems } from '../data/news';

export default function HomePage() {
  return (
    <div className="space-y-16">
      <PageHero
        title="삼성 라이온즈 팬페이지"
        subtitle="최신 경기 소식과 팬들의 응원을 한곳에서 즐겨보세요."
        cta={(
          <ul className="space-y-2 text-sm">
            <li>• 최근 5경기 결과 요약</li>
            <li>• 다음 경기 일정과 예매 링크</li>
            <li>• 팬 투표, 응원 메시지 등 인터랙티브 모듈</li>
          </ul>
        )}
      />

      <section className="grid gap-12 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">최신 경기 결과</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {recentGames.map((game) => (
              <article
                key={`${game.date}-${game.opponent}`}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-baseline justify-between text-sm font-semibold">
                  <span className="text-lionsBlue">{game.result}</span>
                  <span className="text-slate-500">{game.date}</span>
                </div>
                <h3 className="mt-2 text-xl font-bold">vs {game.opponent}</h3>
                <p className="mt-1 text-3xl font-black text-slate-800">{game.score}</p>
                <p className="mt-3 text-sm text-slate-600">{game.highlight}</p>
              </article>
            ))}
          </div>
        </div>
        <aside className="space-y-6">
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow">
            <h2 className="text-2xl font-bold text-lionsBlue">다음 경기</h2>
            <p className="mt-2 text-lg font-semibold">vs {upcomingGame.opponent}</p>
            <dl className="mt-4 space-y-2 text-sm text-slate-600">
              <div className="flex justify-between">
                <dt>일시</dt>
                <dd>{upcomingGame.date}</dd>
              </div>
              <div className="flex justify-between">
                <dt>장소</dt>
                <dd>{upcomingGame.venue}</dd>
              </div>
              <div className="flex justify-between">
                <dt>중계</dt>
                <dd>{upcomingGame.broadcast}</dd>
              </div>
            </dl>
            <a
              href={upcomingGame.ticketLink}
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-lionsBlue px-4 py-2 text-sm font-semibold text-white shadow hover:bg-blue-800"
            >
              티켓 예매
            </a>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-900 p-6 text-white shadow">
            <h3 className="text-lg font-semibold">실시간 팬 인기투표</h3>
            <p className="mt-2 text-sm text-blue-100">
              MVP 예상 투표에 참여해 주세요! 로그인 후 투표할 수 있으며, 실시간 결과는 곧 업데이트됩니다.
            </p>
            <button className="mt-4 w-full rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">
              로그인하고 투표하기
            </button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
            <h3 className="text-lg font-semibold text-slate-900">팀 성적 트렌드</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {seasonTrends.map((trend) => (
                <li key={trend.metric} className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">{trend.metric}</p>
                    <p className="text-xs text-slate-500">{trend.description}</p>
                  </div>
                  <div className="text-right font-bold text-lionsBlue">
                    {trend.value}
                    <span className="block text-xs text-emerald-500">{trend.change}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </section>

      <section>
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-bold text-slate-900">최신 뉴스</h2>
          <a href="#" className="text-sm font-semibold text-lionsBlue hover:underline">
            더 많은 뉴스 보기
          </a>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {newsItems.map((news) => (
            <article key={news.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-wide text-lionsBlue">{news.source}</div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{news.title}</h3>
              <p className="mt-3 text-sm text-slate-600">{news.summary}</p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span>{news.date}</span>
                <a href={news.link} className="font-semibold text-lionsBlue hover:underline">
                  자세히 보기
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
