export default function PageHero({ title, subtitle, cta }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lionsBlue via-blue-700 to-sky-500 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-16 sm:flex-row sm:items-center">
        <div className="flex-1">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
          {subtitle ? <p className="mt-4 text-lg text-blue-100">{subtitle}</p> : null}
        </div>
        {cta ? <div className="flex-1 text-sm text-blue-100">{cta}</div> : null}
      </div>
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=1200&q=80')] opacity-10" aria-hidden />
    </section>
  );
}
