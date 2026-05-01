import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <main>
      <NavBar />
      <HeroSection />
      <DemoSection />
      <FeaturesSection />
      <WhySection />
      <CTASection />
      <SiteFooter />
    </main>
  )
}

function Logo() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="7" fill="var(--lagoon-deep)" />
      <path d="M8 10h12M8 14h8M8 18h10" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="18" r="3" fill="var(--sand)" />
      <path d="M19 18l1 1 2-2" stroke="var(--lagoon-deep)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function NavBar() {
  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'var(--header-bg)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid var(--line)',
      }}
    >
      <div className="page-wrap flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="display-title text-xl font-bold" style={{ color: 'var(--sea-ink)' }}>
            Clarifile
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="nav-link text-sm font-medium">
            Log in
          </a>
          <a
            href="#"
            className="text-sm font-semibold px-5 py-2 rounded-lg"
            style={{ background: 'var(--sea-ink)', color: 'var(--foam)' }}
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="page-wrap text-center" style={{ maxWidth: '52rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <h1
          className="display-title font-bold leading-tight text-4xl md:text-5xl lg:text-[3.5rem]"
          style={{ color: 'var(--sea-ink)' }}
        >
          The AI tax advisor that{' '}
          <span style={{ color: 'var(--lagoon-deep)' }}>reads your documents, finds every deduction,</span>{' '}
          and files for you.
        </h1>
        <p
          className="mt-6 text-lg md:text-xl leading-relaxed"
          style={{ color: 'var(--sea-ink-soft)', maxWidth: '26rem', marginLeft: 'auto', marginRight: 'auto' }}
        >
          All the accuracy of a CPA. None of the hourly billing.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-block px-7 py-3 rounded-xl text-base font-semibold"
            style={{ background: 'var(--sea-ink)', color: 'var(--foam)' }}
          >
            Get started free
          </a>
          <a
            href="#demo"
            className="inline-block px-7 py-3 rounded-xl text-base font-semibold"
            style={{
              background: 'var(--chip-bg)',
              color: 'var(--sea-ink)',
              border: '1px solid var(--line)',
            }}
          >
            See how it works
          </a>
        </div>
        <img
          src="/monet-water-lilies.jpg"
          alt="Water Lilies by Claude Monet"
          className="mt-14 w-full max-w-2xl rounded-xl object-cover"
          style={{ height: '220px', boxShadow: '0 22px 44px rgba(30, 90, 72, 0.12), 0 6px 18px rgba(23, 58, 64, 0.08)' }}
        />
        <p
          className="mt-3 text-sm italic"
          style={{ color: 'var(--sea-ink-soft)' }}
        >
          Water Lilies by Claude Monet
        </p>
      </div>
    </section>
  )
}

function DemoSection() {
  return (
    <section id="demo" className="py-16 md:py-24">
      <div className="page-wrap">
        <div className="island-kicker mb-3">Product preview</div>
        <h2
          className="display-title text-3xl md:text-4xl font-bold mb-10"
          style={{ color: 'var(--sea-ink)' }}
        >
          See Clarifile in action.
        </h2>
        <div className="island-shell rounded-2xl overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-3" style={{ borderBottom: '1px solid var(--line)' }}>
            <div className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            <span className="ml-3 text-xs font-medium" style={{ color: 'var(--sea-ink-soft)' }}>
              Clarifile
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[260px_1fr]" style={{ minHeight: '400px' }}>
            <div
              className="p-4 md:p-5"
              style={{
                borderRight: '1px solid var(--line)',
                background: 'rgba(231, 240, 232, 0.5)',
                borderBottom: '1px solid var(--line)',
              }}
            >
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: 'var(--sea-ink-soft)' }}
              >
                Documents
              </div>
              {[
                { name: 'W-2 Statement', meta: 'Employer: Acme Corp', done: true },
                { name: '1099-NEC', meta: 'Freelance income', done: true },
                { name: 'Mortgage Interest', meta: 'Form 1098', done: true },
                { name: 'Charitable Donations', meta: 'Receipts', done: false },
              ].map((doc) => (
                <div
                  key={doc.name}
                  className="mb-2 px-3 py-2.5 rounded-lg"
                  style={{ background: 'var(--chip-bg)', border: '1px solid var(--chip-line)' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium" style={{ color: 'var(--sea-ink)' }}>
                      {doc.name}
                    </span>
                    <span
                      className="text-xs font-medium"
                      style={{ color: doc.done ? 'var(--palm)' : 'var(--lagoon)' }}
                    >
                      {doc.done ? 'Ready' : 'Reading...'}
                    </span>
                  </div>
                  <div className="text-xs mt-0.5" style={{ color: 'var(--sea-ink-soft)' }}>
                    {doc.meta}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5 md:p-7">
              <div
                className="text-xs font-semibold uppercase tracking-wider mb-5"
                style={{ color: 'var(--sea-ink-soft)' }}
              >
                AI Tax Assistant
              </div>
              <div className="space-y-4">
                <p className="text-sm leading-relaxed" style={{ color: 'var(--sea-ink)' }}>
                  I have analyzed your uploaded documents. Here are the deductions I found:
                </p>
                <div
                  className="rounded-xl p-4 md:p-5"
                  style={{ background: 'rgba(79, 184, 178, 0.08)', border: '1px solid rgba(79, 184, 178, 0.18)' }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-wider mb-3"
                    style={{ color: 'var(--lagoon-deep)' }}
                  >
                    Deductions identified
                  </div>
                  {[
                    { label: 'Home office (Schedule C)', amount: '$1,840' },
                    { label: 'Vehicle expenses', amount: '$3,200' },
                    { label: 'Student loan interest', amount: '$2,500' },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center justify-between py-1.5">
                      <span className="text-sm" style={{ color: 'var(--sea-ink)' }}>
                        {d.label}
                      </span>
                      <span className="text-sm font-semibold" style={{ color: 'var(--palm)' }}>
                        {d.amount}
                      </span>
                    </div>
                  ))}
                  <div
                    className="mt-3 pt-3 flex items-center justify-between"
                    style={{ borderTop: '1px solid rgba(79, 184, 178, 0.18)' }}
                  >
                    <span className="text-sm font-bold" style={{ color: 'var(--sea-ink)' }}>
                      Total potential savings
                    </span>
                    <span className="text-sm font-bold" style={{ color: 'var(--palm)' }}>
                      $7,540
                    </span>
                  </div>
                </div>
                <p className="text-xs" style={{ color: 'var(--sea-ink-soft)' }}>
                  Sources: IRS Pub. 535, Pub. 463, Pub. 970
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const features = [
  {
    heading: 'Document Intelligence',
    body: 'Upload W-2s, 1099s, receipts, and bank statements. AI reads every line, extracts the values, and categorizes them for filing. No manual data entry.',
  },
  {
    heading: 'Deduction Finder',
    body: 'Scans thousands of IRS rules against your financial profile. Every suggestion cites the specific publication and section, so you know exactly why it applies.',
  },
  {
    heading: 'Smart Filing',
    body: 'Generates federal and state returns from your documents. Checks for errors, flags inconsistencies, and optimizes for the best outcome before you e-file.',
  },
  {
    heading: 'Full Traceability',
    body: 'Click any number on your return to see the source document and the rule that applied. Every line is verifiable, explainable, and auditable.',
  },
]

function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="page-wrap">
        <div className="island-kicker mb-3">Features</div>
        <h2
          className="display-title text-3xl md:text-4xl font-bold mb-10"
          style={{ color: 'var(--sea-ink)', maxWidth: '36rem' }}
        >
          Everything you need to file accurately, in one platform.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.heading} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  )
}

function FeatureCard({ heading, body, index }: { heading: string; body: string; index: number }) {
  return (
    <article
      className="feature-card rounded-2xl p-6 md:p-7"
      style={{
        border: '1px solid var(--line)',
        transition: 'border-color 180ms ease, transform 180ms ease',
      }}
    >
      <MiniPreview type={index} />
      <h3 className="display-title text-xl font-bold mt-5" style={{ color: 'var(--sea-ink)' }}>
        {heading}
      </h3>
      <p className="mt-2 text-sm leading-relaxed" style={{ color: 'var(--sea-ink-soft)' }}>
        {body}
      </p>
    </article>
  )
}

function MiniPreview({ type }: { type: number }) {
  const shell: React.CSSProperties = {
    borderRadius: '10px',
    padding: '14px 16px',
    minHeight: '84px',
    fontSize: '0.7rem',
    lineHeight: '1.6',
  }

  if (type === 0) {
    return (
      <div style={{ ...shell, background: 'rgba(231, 240, 232, 0.6)', border: '1px solid var(--chip-line)' }}>
        <div className="space-y-2">
          {[0.95, 0.65, 0.85, 0.55, 0.75].map((w, i) => (
            <div
              key={i}
              className="rounded"
              style={{
                height: '7px',
                width: `${w * 100}%`,
                background: i === 2 ? 'var(--lagoon)' : 'var(--line)',
                opacity: i === 2 ? 0.7 : 0.9,
              }}
            />
          ))}
        </div>
        <div
          className="mt-3 px-2 py-1 rounded text-xs inline-block font-medium"
          style={{ background: 'rgba(79, 184, 178, 0.15)', color: 'var(--lagoon-deep)' }}
        >
          3 values extracted
        </div>
      </div>
    )
  }

  if (type === 1) {
    return (
      <div style={{ ...shell, background: 'rgba(243, 250, 245, 0.8)', border: '1px solid var(--chip-line)' }}>
        {[
          { label: 'Home office', val: '$1,840' },
          { label: 'Vehicle exp.', val: '$3,200' },
        ].map((d) => (
          <div key={d.label} className="flex justify-between items-center mb-1.5">
            <span style={{ color: 'var(--sea-ink-soft)' }}>{d.label}</span>
            <span className="font-semibold" style={{ color: 'var(--palm)' }}>
              {d.val}
            </span>
          </div>
        ))}
        <div className="text-xs mt-2 font-medium" style={{ color: 'var(--lagoon-deep)' }}>
          +2 more deductions found
        </div>
      </div>
    )
  }

  if (type === 2) {
    return (
      <div style={{ ...shell, background: 'rgba(231, 240, 232, 0.6)', border: '1px solid var(--chip-line)' }}>
        {['Federal 1040', 'State CA 540'].map((form) => (
          <div key={form} className="flex items-center gap-2 mb-1.5">
            <div
              className="w-4 h-4 rounded-full flex items-center justify-center text-white"
              style={{ background: 'var(--palm)', fontSize: '0.5rem' }}
            >
              ✓
            </div>
            <span style={{ color: 'var(--sea-ink)' }}>{form}</span>
            <span className="ml-auto text-xs font-medium" style={{ color: 'var(--palm)' }}>
              Ready
            </span>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div style={{ ...shell, background: 'rgba(243, 250, 245, 0.8)', border: '1px solid var(--chip-line)' }}>
      <div className="flex items-center gap-2 mb-1">
        <div className="w-2 h-2 rounded-full" style={{ background: 'var(--lagoon)' }} />
        <span style={{ color: 'var(--sea-ink-soft)' }}>W-2, Line 1</span>
      </div>
      <div className="ml-1 pl-3 py-1" style={{ borderLeft: '2px solid var(--lagoon)', opacity: 0.6 }}>
        <span style={{ color: 'var(--sea-ink)' }}>$85,200 → Form 1040, Line 1a</span>
      </div>
    </div>
  )
}

const reasons = [
  {
    term: 'No per-form fees.',
    def: 'One flat subscription, file as many returns as you need. Not a pay-per-schedule maze that penalizes complexity.',
  },
  {
    term: 'End-to-end encrypted.',
    def: 'Your financial documents never leave your control. We cannot read them, sell them, or share them with third parties.',
  },
  {
    term: 'Always up to date.',
    def: 'Tax brackets, credits, and deductions updated in real time as IRS publications change. No stale rules or expired thresholds.',
  },
  {
    term: 'Plain language, always.',
    def: 'Every line of your return explained in words you understand. No jargon, no ambiguity, no surprises at audit time.',
  },
]

function WhySection() {
  return (
    <section className="py-16 md:py-24">
      <div className="page-wrap">
        <div className="island-kicker mb-3">Why Clarifile</div>
        <h2
          className="display-title text-3xl md:text-4xl font-bold mb-10"
          style={{ color: 'var(--sea-ink)' }}
        >
          Your taxes, on your terms.
        </h2>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {reasons.map((r) => (
            <div key={r.term}>
              <dt className="display-title text-lg font-bold" style={{ color: 'var(--sea-ink)' }}>
                {r.term}
              </dt>
              <dd className="mt-1.5 text-sm leading-relaxed" style={{ color: 'var(--sea-ink-soft)' }}>
                {r.def}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="py-16 md:py-24">
      <div className="page-wrap text-center" style={{ maxWidth: '38rem', marginLeft: 'auto', marginRight: 'auto' }}>
        <h2 className="display-title text-3xl md:text-4xl font-bold" style={{ color: 'var(--sea-ink)' }}>
          Your taxes, filed in minutes.
        </h2>
        <p className="mt-4 text-lg leading-relaxed" style={{ color: 'var(--sea-ink-soft)' }}>
          Start with a free federal return. No credit card, no upsell maze.
        </p>
        <div className="mt-8">
          <a
            href="#"
            className="inline-block px-8 py-3.5 rounded-xl text-base font-semibold"
            style={{ background: 'var(--sea-ink)', color: 'var(--foam)' }}
          >
            Get started free
          </a>
        </div>
      </div>
    </section>
  )
}

function SiteFooter() {
  return (
    <footer className="site-footer py-8">
      <div className="page-wrap flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <Logo />
          <span className="display-title text-base font-bold" style={{ color: 'var(--sea-ink)' }}>
            Clarifile
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm" style={{ color: 'var(--sea-ink-soft)' }}>
          <a href="#" className="nav-link">
            Privacy
          </a>
          <a href="#" className="nav-link">
            Terms
          </a>
        </div>
      </div>
    </footer>
  )
}
