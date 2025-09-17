import PageHero from '../../components/PageHero';
import { positions } from '../../data/players';

export default function PlayersPage() {
  return (
    <div className="space-y-16">
      <PageHero
        title="선수단 소개"
        subtitle="포지션별 정렬과 주요 선수 프로필을 만나보세요."
        cta={(
          <p className="text-sm">
            시즌별 기록, 하이라이트 영상, 팬 댓글 기능 등 실제 서비스 구성에 활용될 데이터 구조 예시입니다.
          </p>
        )}
      />

      <section className="space-y-10">
        {positions.map((group) => (
          <div key={group.name} className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">{group.name}</h2>
              <p className="mt-2 text-sm text-slate-600">{group.description}</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {group.players.map((player) => (
                <article key={player.name} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <img
                    src={player.image}
                    alt={`${player.name} 프로필`}
                    className="h-28 w-24 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">{player.name}</h3>
                      <span className="text-sm font-semibold text-lionsBlue">#{player.number}</span>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{player.bio}</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">최근 기록</p>
                    <p className="text-sm text-slate-800">{player.stats}</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-xs text-lionsBlue">
                      <span className="rounded-full bg-lionsBlue/10 px-3 py-1 font-semibold">하이라이트 보기</span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-slate-600">팬 댓글 24</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
