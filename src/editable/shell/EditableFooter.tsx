'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableFooter() {
  const taskLinks = SITE_CONFIG.tasks.filter((task) => task.enabled)
  const year = new Date().getFullYear()
  const { session, logout } = useEditableLocalAuthSession()

  return (
    <footer className="border-t border-white/10 bg-[#15171b] text-white">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-[#00d084]">
              <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-10 w-10 object-contain" />
            </span>
            <span className="text-xl font-semibold text-[#00d084]">{globalContent.site.name}</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-white/62">{globalContent.footer.description}</p>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Listings</h3>
          <div className="mt-4 grid gap-2">
            {taskLinks.map((task) => (
              <Link key={task.key} href={task.route} className="inline-flex items-center gap-2 text-sm font-bold text-white/72 hover:text-white">
                {task.label} <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.22em] text-white/45">Site</h3>
          <div className="mt-4 grid gap-2">
            {[
              ['About', '/about'],
              ['Contact', '/contact'],
              ...(session ? [['Create', '/create']] : [['Login', '/login'], ['Sign up', '/signup']]),
            ].map(([label, href]) => (
              <Link key={href} href={href} className="text-sm font-bold text-white/72 hover:text-white">{label}</Link>
            ))}
            {session ? <button type="button" onClick={logout} className="text-left text-sm font-bold text-white/72 hover:text-white">Logout</button> : null}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs font-bold text-white/45">
        © {year} {globalContent.site.name}. Business listings made easier.
      </div>
    </footer>
  )
}
