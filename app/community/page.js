import PageHero from '../../components/PageHero';
import { communityHighlights } from '../../data/community';

export default function CommunityPage() {
  const { freeBoard, qaBoard, cheerBoard } = communityHighlights;

  return (
    <div className="space-y-16">
      <PageHero
        title="팬 커뮤니티"
        subtitle="자유게시판, Q&A, 응원존 등 팬들이 활발히 소통하는 공간을 구성합니다."
        cta={(
          <ul className="space-y-1 text-sm">
            <li>• 이미지/이모지 업로드가 가능한 응원 게시판</li>
            <li>• 로그인 기반 댓글/신고 기능</li>
            <li>• 카테고리/태그 기반 탐색과 검색</li>
          </ul>
        )}
      />

      <section className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-slate-900">자유게시판 인기글</h2>
          <ul className="mt-4 space-y-4 text-sm text-slate-600">
            {freeBoard.map((post) => (
              <li key={post.title} className="rounded-xl border border-slate-100 p-4">
                <p className="text-base font-semibold text-slate-900">{post.title}</p>
                <p className="mt-2 text-xs text-slate-500">작성자 {post.author}</p>
                <p className="mt-2 text-sm">{post.excerpt}</p>
                <p className="mt-3 text-xs font-semibold text-lionsBlue">좋아요 {post.likes}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <h2 className="text-xl font-bold text-slate-900">질문 &amp; 답변</h2>
          <ul className="mt-4 space-y-4 text-sm text-slate-600">
            {qaBoard.map((item) => (
              <li key={item.question} className="rounded-xl border border-slate-100 p-4">
                <p className="text-base font-semibold text-slate-900">{item.question}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
                  <span>작성자 {item.author}</span>
                  <span className="rounded-full bg-lionsBlue/10 px-3 py-1 font-semibold text-lionsBlue">{item.answerStatus}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-lionsBlue via-blue-700 to-sky-500 p-6 text-white shadow">
          <h2 className="text-xl font-bold">팬 응원존</h2>
          <p className="mt-2 text-sm text-blue-100">실시간 반응 이모지와 이미지 업로드로 생동감 있는 응원 피드를 제공합니다.</p>
          <ul className="mt-4 space-y-4 text-sm">
            {cheerBoard.map((cheer) => (
              <li key={cheer.message} className="rounded-xl bg-white/10 p-4">
                <p>{cheer.message}</p>
                <div className="mt-2 flex items-center justify-between text-xs text-blue-100">
                  <span>@{cheer.author}</span>
                  <span>반응 {cheer.reactions}</span>
                </div>
              </li>
            ))}
          </ul>
          <button className="mt-6 w-full rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-lionsBlue hover:bg-white">
            응원 메시지 남기기
          </button>
        </div>
      </section>
    </div>
  );
}
