import PageHero from '../../components/PageHero';
import { schedule } from '../../data/games';

const boxScore = {
  date: '2024-04-06',
  opponent: 'SSG 랜더스',
  result: '승 4-1',
  batting: [
    { player: '김지찬', stats: '5타수 2안타 1득점' },
    { player: '구자욱', stats: '4타수 2안타 1홈런 3타점' },
    { player: '오재일', stats: '3타수 1안타 1볼넷' }
  ],
  pitching: [
    { player: '원태인', stats: '6이닝 4피안타 무실점 7탈삼진' },
    { player: '임현준', stats: '1이닝 무실점' },
    { player: '오승환', stats: '1이닝 1피안타 1세이브' }
  ]
};

export default function RecordsPage() {
  return (
    <div className="space-y-16">
      <PageHero
        title="경기 일정 & 기록"
        subtitle="월별 일정, 박스 스코어, 시각화 모듈 구성 예시"
        cta={(
          <p className="text-sm">
            실제 서비스에서는 KBO API 또는 자체 DB 연동으로 데이터가 업데이트되며, 차트 라이브러리(Recharts, Chart.js)를 통해
            승률 추이 등을 시각화합니다.
          </p>
        )}
      />

      <section>
        <h2 className="text-2xl font-bold text-slate-900">4월 일정</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {schedule.map((game) => (
            <article key={game.date} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between text-xs uppercase tracking-wide text-slate-500">
                <span>{game.home ? '홈' : '원정'}</span>
                <span>{game.broadcast}</span>
              </div>
              <h3 className="mt-2 text-xl font-bold text-slate-900">{game.date}</h3>
              <p className="text-sm text-slate-600">vs {game.opponent}</p>
              <p className="mt-3 text-sm font-semibold text-lionsBlue">
                {game.result ? `결과: ${game.result}` : `${game.startTime} 플레이볼`}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-900">박스 스코어 하이라이트</h2>
          <p className="mt-2 text-sm text-slate-600">
            {boxScore.date} vs {boxScore.opponent} ({boxScore.result})
          </p>
          <div className="mt-6 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900">타격 기록</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {boxScore.batting.map((line) => (
                  <li key={line.player} className="flex justify-between">
                    <span>{line.player}</span>
                    <span className="font-medium text-slate-900">{line.stats}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900">투구 기록</h3>
              <ul className="mt-2 space-y-2 text-sm text-slate-600">
                {boxScore.pitching.map((line) => (
                  <li key={line.player} className="flex justify-between">
                    <span>{line.player}</span>
                    <span className="font-medium text-slate-900">{line.stats}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-blue-50 to-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-900">팀 성적 추이 (샘플)</h2>
          <p className="mt-3 text-sm text-slate-600">
            실제 구현 시 Recharts/Chart.js 컴포넌트를 사용하여 승률, OPS, ERA 등 주요 지표를 시계열 그래프로 제공합니다.
          </p>
          <div className="mt-6 h-48 rounded-xl border border-dashed border-blue-200 bg-white/70 p-6 text-center text-sm text-slate-500">
            차트 영역 (승률 62% → 68%, 팀 OPS 0.74 → 0.78 등 시각화)
          </div>
          <ul className="mt-6 space-y-2 text-sm text-slate-600">
            <li>• 최근 10경기 승률 70%</li>
            <li>• 선발 ERA 3.12, 불펜 ERA 2.98</li>
            <li>• 타선 OPS 0.781로 리그 2위</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
