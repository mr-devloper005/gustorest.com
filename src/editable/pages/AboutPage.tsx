import { pagesContent } from '@/editable/content/pages.content'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'
import { globalContent } from '@/editable/content/global.content'

export default function AboutPage() {
  return (
    <EditableSiteShell>
      <main className="bg-[#30303c] px-4 py-14 text-white sm:px-6 lg:px-8">
        <section className="mx-auto grid max-w-[1160px] gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-lg bg-[#15171b] p-8 shadow-[0_24px_80px_rgba(0,0,0,0.18)] lg:p-12">
            <p className="text-xs font-black uppercase text-[#00d084]">{pagesContent.about.badge}</p>
            <h1 className="mt-5 text-5xl font-black leading-tight">About {globalContent.site.name}</h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/70">{pagesContent.about.description}</p>
            <div className="mt-8 space-y-4 text-sm leading-8 text-white/72">
              {pagesContent.about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </article>
          <aside className="space-y-4">
            {pagesContent.about.values.map((value) => (
              <div key={value.title} className="rounded-lg bg-[#15171b] p-6 shadow-sm">
                <h2 className="text-xl font-black">{value.title}</h2>
                <p className="mt-3 text-sm leading-7 text-white/68">{value.description}</p>
              </div>
            ))}
          </aside>
        </section>
      </main>
    </EditableSiteShell>
  )
}
