'use client'

import { useMemo, useState, type CSSProperties } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LogIn, LogOut, Menu, PlusCircle, Search, UserPlus, X } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { globalContent } from '@/editable/content/global.content'
import { useEditableLocalAuthSession } from '@/editable/components/EditableLocalAuthForms'

export function EditableNavbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { session, logout } = useEditableLocalAuthSession()
  const navVars = {
    '--editable-nav-bg': '#15171b',
    '--editable-nav-text': '#f8fafc',
    '--editable-nav-active': '#00d084',
    '--editable-nav-active-text': '#07110d',
    '--editable-cta-bg': '#00d084',
    '--editable-cta-text': '#07110d',
    '--editable-search-bg': '#20232a',
    '--editable-border': 'rgba(255,255,255,0.12)',
    '--editable-container': '1160px',
  } as CSSProperties
  const navItems = useMemo(
    () => SITE_CONFIG.tasks.filter((task) => task.enabled).map((task) => ({ label: task.label, href: task.route })),
    []
  )

  const mobileItems = [
    { label: 'Home', href: '/' },
    ...navItems,
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    ...(session ? [{ label: 'Create', href: '/create' }] : [{ label: 'Login', href: '/login' }, { label: 'Sign up', href: '/signup' }]),
  ]

  return (
    <header style={navVars} className="sticky top-0 z-50 border-b border-[var(--editable-border)] bg-[var(--editable-nav-bg)] text-[var(--editable-nav-text)]">
      <nav className="mx-auto flex min-h-[76px] w-full max-w-[var(--editable-container)] items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button type="button" onClick={() => setOpen((value) => !value)} className="rounded-md p-2 hover:bg-white/5" aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-md bg-[var(--editable-cta-bg)]">
            <img src="/favicon.png?v=20260413" alt={globalContent.site.name} className="h-10 w-10 object-contain" />
          </span>
          <span className="hidden max-w-[190px] truncate text-xl font-semibold text-[var(--editable-cta-bg)] sm:block">{globalContent.site.name}</span>
        </Link>

        <span className="hidden h-8 w-px bg-white/15 md:block" />
        <p className="hidden max-w-[300px] truncate text-xs font-bold text-white/80 md:block">{globalContent.nav.tagline}</p>

        <div className="hidden items-center gap-2 xl:flex">
          {navItems.slice(0, 4).map((item) => {
            const active = pathname === item.href || pathname.startsWith(`${item.href}/`)
            return (
              <Link key={item.href} href={item.href} className={`rounded-md px-3 py-2 text-sm font-black transition ${active ? 'bg-[var(--editable-nav-active)] text-[var(--editable-nav-active-text)]' : 'hover:bg-white/5'}`}>
                {item.label}
              </Link>
            )
          })}
        </div>

        <form action="/search" className="ml-auto hidden min-w-0 flex-1 justify-end lg:flex">
          <label className="relative flex w-full max-w-[300px] items-center rounded-md border border-[var(--editable-border)] bg-[var(--editable-search-bg)] px-3 py-2.5">
            <Search className="h-4 w-4 opacity-55" />
            <input name="q" type="search" placeholder="Search businesses" className="min-w-0 flex-1 bg-transparent px-3 text-sm font-semibold text-white outline-none placeholder:text-white/45" />
          </label>
        </form>

        <div className="flex shrink-0 items-center gap-2">
          {session ? (
            <>
              <Link href="/create" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] sm:inline-flex"><PlusCircle className="h-4 w-4" /> {session.name}</Link>
              <button type="button" onClick={logout} className="hidden items-center gap-2 rounded-md border border-[var(--editable-border)] px-3 py-2 text-sm font-black hover:bg-white/5 sm:inline-flex"><LogOut className="h-4 w-4" /> Logout</button>
            </>
          ) : (
            <>
              <Link href="/login" className="hidden items-center gap-2 rounded-md px-3 py-2 text-sm font-black hover:bg-white/5 sm:inline-flex"><LogIn className="h-4 w-4" /> Login</Link>
              <Link href="/signup" className="hidden items-center gap-2 rounded-md bg-[var(--editable-cta-bg)] px-4 py-2.5 text-sm font-black text-[var(--editable-cta-text)] sm:inline-flex"><UserPlus className="h-4 w-4" /> Sign up</Link>
            </>
          )}
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[var(--editable-border)] bg-[#30303c] px-4 py-8">
          <div className="mx-auto grid max-w-[var(--editable-container)] gap-8 md:grid-cols-[320px_1fr]">
            <div>
              <p className="text-5xl font-black leading-tight text-[#00d084]">Explore</p>
              <p className="mt-4 max-w-sm text-sm font-semibold leading-7 text-white/68">Browse business categories, submit a listing, or reach the directory team.</p>
            </div>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
              {mobileItems.map((item) => (
                <Link key={`${item.href}-${item.label}`} href={item.href} onClick={() => setOpen(false)} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm font-black hover:bg-white/10">
                  {item.label}
                </Link>
              ))}
              {session ? <button type="button" onClick={logout} className="rounded-md border border-white/10 bg-white/5 px-4 py-3 text-left text-sm font-black hover:bg-white/10">Logout</button> : null}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  )
}
