'use client'

import { Building2, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import { pagesContent } from '@/editable/content/pages.content'
import { EditableContactLeadForm } from '@/editable/components/EditableContactLeadForm'
import { EditableSiteShell } from '@/editable/shell/EditableSiteShell'

export default function ContactPage() {
  const lanes = [
    { icon: Building2, title: 'Add or claim a business', body: 'Send the company name, service category, contact route, and the page you want us to review.' },
    { icon: MapPin, title: 'Fix listing details', body: 'Request updates for address, coverage area, map placement, hours, or incorrect business information.' },
    { icon: ShieldCheck, title: 'Directory partnerships', body: 'Ask about category placement, multi-location business profiles, or verified listing support.' },
  ]

  return (
    <EditableSiteShell>
      <main className="bg-[#30303c] text-white">
        <section className="mx-auto grid max-w-[1160px] gap-8 px-4 py-14 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-xs font-black uppercase text-[#00d084]">{pagesContent.contact.eyebrow}</p>
            <h1 className="mt-5 max-w-xl text-5xl font-black leading-tight">{pagesContent.contact.title}</h1>
            <p className="mt-5 max-w-2xl text-sm leading-8 text-white/70">{pagesContent.contact.description}</p>
            <div className="mt-8 grid gap-4">
              {lanes.map((lane) => (
                <div key={lane.title} className="rounded-lg bg-[#15171b] p-5">
                  <lane.icon className="h-5 w-5 text-[#00d084]" />
                  <h2 className="mt-3 text-xl font-black">{lane.title}</h2>
                  <p className="mt-2 text-sm leading-7 text-white/66">{lane.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 grid gap-3 text-sm font-bold text-white/68 sm:grid-cols-2">
              
            </div>
          </div>

          <div className="rounded-lg bg-[#15171b] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.18)]">
            <h2 className="text-2xl font-black">{pagesContent.contact.formTitle}</h2>
            <p className="mt-2 text-sm leading-6 text-white/62">Use clear business details so the team can route your message without extra back-and-forth.</p>
            <div className="mt-5">
              <EditableContactLeadForm />
            </div>
          </div>
        </section>
      </main>
    </EditableSiteShell>
  )
}
