import PageHero from '../../components/PageHero';
import { adminTasks } from '../../data/community';

const rolePolicies = [
  {
    role: '슈퍼 관리자',
    permissions: ['전체 시스템 설정', '회원 권한 부여/회수', '신고 게시물 최종 조치']
  },
  {
    role: '콘텐츠 매니저',
    permissions: ['공지사항/뉴스/배너 CRUD', '선수 데이터 업데이트', '메인 페이지 편집']
  },
  {
    role: '커뮤니티 운영자',
    permissions: ['게시판 모더레이션', '댓글/이미지 신고 대응', '팬 이벤트 관리']
  }
];

export default function AdminPage() {
  return (
    <div className="space-y-16">
      <PageHero
        title="관리자 콘솔"
        subtitle="역할 기반 권한과 핵심 운영 업무 흐름을 설계합니다."
        cta={(
          <div className="space-y-1 text-sm">
            <p>• RBAC 기반 접근 제어, 2단계 인증 도입</p>
            <p>• 콘텐츠, 회원, 신고 데이터에 대한 감사 로그 저장</p>
            <p>• 관리자용 대시보드 및 위젯 구성 예시</p>
          </div>
        )}
      />

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-900">오늘의 운영 업무</h2>
          <ul className="mt-4 space-y-4 text-sm text-slate-600">
            {adminTasks.map((task) => (
              <li key={task.title} className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-center justify-between">
                  <p className="text-base font-semibold text-slate-900">{task.title}</p>
                  <span className="rounded-full bg-lionsBlue/10 px-3 py-1 text-xs font-semibold text-lionsBlue">{task.status}</span>
                </div>
                <p className="mt-2 text-sm">{task.description}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow">
          <h2 className="text-2xl font-bold text-slate-900">역할 기반 권한</h2>
          <div className="mt-4 space-y-4 text-sm text-slate-600">
            {rolePolicies.map((policy) => (
              <div key={policy.role} className="rounded-xl border border-slate-100 p-4">
                <h3 className="text-lg font-semibold text-slate-900">{policy.role}</h3>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {policy.permissions.map((permission) => (
                    <li key={permission}>{permission}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-900 to-blue-900 p-6 text-sm text-white shadow">
        <h2 className="text-2xl font-bold">운영 인프라 &amp; 모니터링</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl bg-white/5 p-4">
            <h3 className="text-lg font-semibold">배포 파이프라인</h3>
            <p className="mt-2 text-blue-100">GitHub Actions로 테스트 자동화 후 Vercel/Render에 배포</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <h3 className="text-lg font-semibold">모니터링</h3>
            <p className="mt-2 text-blue-100">Sentry, Google Analytics, Firebase Crashlytics 연동</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <h3 className="text-lg font-semibold">보안</h3>
            <p className="mt-2 text-blue-100">HTTPS 강제, 2단계 인증, 파일 업로드 검사, 활동 로그 저장</p>
          </div>
          <div className="rounded-xl bg-white/5 p-4">
            <h3 className="text-lg font-semibold">데이터 백업</h3>
            <p className="mt-2 text-blue-100">Firebase/DB 스냅샷 자동 백업 및 복구 훈련</p>
          </div>
        </div>
      </section>
    </div>
  );
}
