import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle2, MapPin, Search, ShieldCheck, Sparkles } from 'lucide-react'
import type { SitePost } from '@/lib/site-connector'
import type { HomeTimeSection } from '@/lib/task-data'
import type { TaskKey } from '@/lib/site-config'
import { SITE_CONFIG } from '@/lib/site-config'
import { pagesContent } from '@/editable/content/pages.content'
import { editableDesignContract as dc } from '@/editable/layouts/design-contract'
import { getEditablePostImage, postHref } from '@/editable/cards/PostCards'

type HomeSectionProps = {
  primaryTask: TaskKey
  primaryRoute: string
  posts: SitePost[]
  timeSections: HomeTimeSection[]
}

function getContent(post?: SitePost | null) {
  return post?.content && typeof post.content === 'object' ? post.content as Record<string, unknown> : {}
}

function text(value: unknown) {
  return typeof value === 'string' ? value.trim() : ''
}

function getExcerpt(post?: SitePost | null, limit = 120) {
  const content = getContent(post)
  const raw = text(content.description) || text(content.summary) || post?.summary || ''
  const clean = raw.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
  return clean.length > limit ? `${clean.slice(0, limit).trim()}...` : clean
}

function getCategory(post?: SitePost | null) {
  const content = getContent(post)
  return text(content.category) || post?.tags?.[0] || 'Business'
}

function getLocation(post?: SitePost | null) {
  const content = getContent(post)
  return text(content.city) || text(content.location) || text(content.address)
}

function BusinessCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  const location = getLocation(post)
  return (
    <Link href={href} className="group block overflow-hidden rounded-lg bg-[#15171b] shadow-[0_18px_50px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-1">
      <div className="relative aspect-[16/9] overflow-hidden bg-[#51545e]">
        <img src={getEditablePostImage(post)} alt={post.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
        <span className="absolute left-4 top-4 rounded-md bg-[#00d084] px-3 py-1 text-[10px] font-black uppercase text-[#07110d]">{getCategory(post)}</span>
      </div>
      <div className="p-5">
        <p className="text-[11px] font-black uppercase text-white/45">Directory pick {String(index + 1).padStart(2, '0')}</p>
        <h3 className="mt-3 line-clamp-2 text-2xl font-black leading-tight text-white">{post.title}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/66">{getExcerpt(post)}</p>
        <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/10 pt-4 text-xs font-black uppercase text-white/64">
          <span>{location || 'Details inside'}</span>
          <span className="inline-flex items-center gap-2 text-[#00d084]">View <ArrowRight className="h-4 w-4" /></span>
        </div>
      </div>
    </Link>
  )
}

function WideListingCard({ post, href, index }: { post: SitePost; href: string; index: number }) {
  return (
    <Link href={href} className="group grid overflow-hidden rounded-lg bg-[#15171b] transition duration-300 hover:-translate-y-1 md:grid-cols-[0.82fr_1fr]">
      <div className="relative min-h-[230px] bg-[#51545e]">
        <img src={getEditablePostImage(post)} alt={post.title} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex min-h-[230px] flex-col justify-between p-6">
        <div>
          <p className="text-[11px] font-black uppercase text-white/48">{getCategory(post)}</p>
          <h3 className="mt-3 line-clamp-3 text-3xl font-black leading-tight text-white">{post.title}</h3>
          <p className="mt-4 line-clamp-3 text-sm leading-7 text-white/66">{getExcerpt(post, 150)}</p>
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-xs font-black uppercase text-white/60">
          <span>{getLocation(post) || `Listing ${index + 1}`}</span>
          <span className="text-[#00d084]">Open profile</span>
        </div>
      </div>
    </Link>
  )
}

export function EditableHomeHero({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(0, 2)
  return (
    <section className="bg-[#30303c]">
      <div className="mx-auto grid max-w-[1160px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div className="self-center">
          <p className="text-xs font-black uppercase text-[#00d084]">{pagesContent.home.hero.badge}</p>
          <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight text-white sm:text-6xl">{pagesContent.home.hero.title.join(' ')}</h1>
          <p className="mt-6 max-w-lg text-base leading-8 text-white/70">{pagesContent.home.hero.description}</p>
          <form action="/search" className="mt-8 flex max-w-xl rounded-lg border border-white/10 bg-[#15171b] p-2">
            <input name="q" placeholder={pagesContent.home.hero.searchPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 text-sm font-semibold text-white outline-none placeholder:text-white/42" />
            <button className="inline-flex items-center gap-2 rounded-md bg-[#00d084] px-5 py-3 text-sm font-black text-[#07110d]"><Search className="h-4 w-4" /> Search</button>
          </form>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={primaryRoute} className={dc.button.primary}>Browse listings</Link>
            <Link href="/create" className={dc.button.secondary}>Submit business</Link>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {featured.map((post, index) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
          <div className="rounded-lg bg-[#15171b] p-6 text-white sm:col-span-2">
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                ['Verified details', 'Cleaner company profiles with service, location, and contact cues.', ShieldCheck],
                ['Fast discovery', 'Search and scan business categories without stretched page widths.', Search],
                ['Contact ready', 'Call, email, website, and map actions stay close to the listing.', CheckCircle2],
              ].map(([title, body, Icon]) => (
                <div key={String(title)}>
                  <Icon className="h-6 w-6 text-[#00d084]" />
                  <h2 className="mt-4 text-lg font-black">{title as string}</h2>
                  <p className="mt-2 text-sm leading-6 text-white/62">{body as string}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function EditableStoryRail({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const railPosts = posts.slice(2, 6)
  if (!railPosts.length) return null
  return (
    <section className="bg-[#30303c]">
      <div className="mx-auto max-w-[1160px] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase text-[#00d084]">Popular listings</p>
            <h2 className="mt-2 text-4xl font-black text-white">Businesses people are checking now</h2>
          </div>
          <Link href={primaryRoute} className="hidden text-sm font-black text-[#00d084] sm:inline">View all</Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {railPosts.map((post, index) => <BusinessCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableMagazineSplit({ primaryTask, primaryRoute, posts }: HomeSectionProps) {
  const featured = posts.slice(6, 12)
  if (!featured.length) return null
  return (
    <section className="bg-[#30303c]">
      <div className="mx-auto grid max-w-[1160px] gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[290px_1fr] lg:px-8">
        <aside className="rounded-lg bg-[#15171b] p-6 text-white">
          <Building2 className="h-9 w-9 text-[#00d084]" />
          <h2 className="mt-8 text-4xl font-black leading-tight">Business categories with room to breathe</h2>
          <p className="mt-4 text-sm leading-7 text-white/66">A compact card rhythm keeps the page useful on laptop, desktop, and mobile without making the site feel stretched.</p>
          <Link href="/search" className="mt-8 inline-flex items-center gap-2 text-sm font-black text-[#00d084]">Find a category <ArrowRight className="h-4 w-4" /></Link>
        </aside>
        <div className="grid gap-5 md:grid-cols-2">
          {featured.map((post, index) => <WideListingCard key={post.id || post.slug} post={post} href={postHref(primaryTask, post, primaryRoute)} index={index} />)}
        </div>
      </div>
    </section>
  )
}

export function EditableTimeCollections({ primaryTask, primaryRoute, posts, timeSections }: HomeSectionProps) {
  const pooled = timeSections.flatMap((section) => section.posts)
  const source = pooled.length ? pooled : posts.slice(12)
  const items = source.slice(0, 8)
  if (!items.length) return null
  return (
    <section className="bg-[#30303c]">
      <div className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-[#15171b] p-6 text-white sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
            <div>
              <Sparkles className="h-8 w-8 text-[#00d084]" />
              <h2 className="mt-5 text-4xl font-black leading-tight">A directory that makes the next step obvious</h2>
              <p className="mt-4 text-sm leading-7 text-white/66">The layout keeps business names, categories, locations, and action buttons readable so visitors can move from browsing to contacting quickly.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                ['Browse by service', 'Use categories and search to narrow the field.'],
                ['Check the details', 'Open a listing for address, website, phone, and profile notes.'],
                ['Contact directly', 'Move to call, email, website, or map actions from the detail page.'],
                ['Submit a company', 'Create a profile from your account when ready.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
                  <CheckCircle2 className="h-5 w-5 text-[#00d084]" />
                  <h3 className="mt-4 text-lg font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/62">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((post, index) => (
            <Link key={post.id || post.slug} href={postHref(primaryTask, post, primaryRoute)} className="rounded-lg bg-[#15171b] p-5 text-white transition hover:-translate-y-1">
              <MapPin className="h-5 w-5 text-[#00d084]" />
              <h3 className="mt-5 line-clamp-3 text-xl font-black leading-tight">{post.title}</h3>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/62">{getExcerpt(post, 105)}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-xs font-black uppercase text-white/45">Saved pick {index + 1}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export function EditableHomeCta() {
  return (
    <section className="bg-[#30303c]">
      <div className="mx-auto max-w-[1160px] px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-lg bg-[#15171b] p-8 text-white md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-xs font-black uppercase text-[#00d084]">For business owners</p>
            <h2 className="mt-3 text-4xl font-black leading-tight">Create a listing visitors can actually use.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/66">Add a concise company profile, service category, contact routes, website, and helpful details for directory searchers.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create" className={dc.button.primary}>Create listing</Link>
            <Link href="/contact" className={dc.button.secondary}>Contact us</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
