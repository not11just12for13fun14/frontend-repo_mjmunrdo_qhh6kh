import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, ExternalLink, Code2, Database, Cpu, ShieldCheck } from 'lucide-react'

function NeonButton({ href, children }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-md border border-fuchsia-500/40 px-4 py-2 text-sm font-semibold text-white transition hover:shadow-[0_0_25px_rgba(217,70,239,0.35)]"
    >
      <span className="absolute inset-0 -z-10 bg-gradient-to-r from-fuchsia-600/30 via-purple-600/20 to-blue-600/30 blur-xl" />
      <span className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_0%_0%,rgba(217,70,239,0.25),transparent_40%),radial-gradient(circle_at_100%_100%,rgba(59,130,246,0.25),transparent_40%)]" />
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
    </a>
  )
}

function IconPill({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">
      <Icon size={14} className="text-fuchsia-400" />
      <span>{label}</span>
    </div>
  )
}

function ProjectCard({ title, description, tags = [], link = '#', repo = '#' }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-zinc-900/40 p-5 transition hover:-translate-y-1 hover:border-fuchsia-500/40 hover:shadow-[0_0_30px_rgba(217,70,239,0.15)]">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-fuchsia-600/10 via-purple-600/5 to-blue-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative z-10">
        <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((t) => (
            <span key={t} className="text-[11px] rounded-full bg-white/5 px-2 py-1 text-zinc-300 border border-white/10">{t}</span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-fuchsia-300 hover:text-fuchsia-200">
            <ExternalLink size={14} /> Live
          </a>
          <a href={repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-zinc-300 hover:text-white">
            <Github size={14} /> Code
          </a>
        </div>
      </div>
    </div>
  )
}

function ExperienceItem({ role, company, period, points = [] }) {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.5)]" />
      <div className="flex flex-wrap items-baseline gap-2">
        <h4 className="text-white font-semibold">{role}</h4>
        <span className="text-zinc-400">· {company}</span>
        <span className="ml-auto text-xs text-zinc-400">{period}</span>
      </div>
      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-300">
        {points.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ul>
    </div>
  )
}

export default function App() {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <div id="home" className="min-h-screen bg-[#07070A] text-white">
      {/* Background grid + glow */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(217,70,239,0.15),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.12),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(147,51,234,0.15),transparent_40%)]" />
        <div className="[mask-image:linear-gradient(to_bottom,black_60%,transparent)] absolute inset-0 opacity-[0.35]" style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)`, backgroundSize: '24px 24px' }} />
      </div>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
          <a href="#home" className="group inline-flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-gradient-to-br from-fuchsia-500 to-blue-500 ring-1 ring-white/20" />
            <span className="font-semibold tracking-wide">Alex Nova</span>
            <span className="ml-2 hidden text-xs text-zinc-400 md:block">Fullstack Developer · System Analyst</span>
          </a>
          <nav className="hidden gap-2 md:flex">
            {[
              ['#about', 'About'],
              ['#skills', 'Skills'],
              ['#projects', 'Projects'],
              ['#experience', 'Experience'],
              ['#contact', 'Contact'],
            ].map(([href, label]) => (
              <a key={href} href={href} className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white">
                {label}
              </a>
            ))}
            <div className="ml-2 h-6 w-px bg-white/10" />
            <a href="mailto:you@example.com" className="rounded-md px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-white/5 hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 pt-16">
        <div className="grid w-full grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <div className="mb-4 flex flex-wrap gap-2">
                <IconPill icon={Code2} label="Fullstack Developer" />
                <IconPill icon={Cpu} label="System Analyst" />
                <IconPill icon={ShieldCheck} label="Secure by Design" />
              </div>
              <h1 className="text-balance bg-gradient-to-br from-white via-white to-zinc-400 bg-clip-text text-4xl font-black leading-tight text-transparent md:text-6xl">
                Building reliable systems and sleek digital experiences
              </h1>
              <p className="mt-4 max-w-xl text-pretty text-zinc-300">
                I architect, develop, and optimize end‑to‑end solutions. Blending cyberpunk minimalism with clean UX to ship performant products.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <NeonButton href="#projects">View Projects</NeonButton>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10">
                  <Github size={16} /> GitHub
                </a>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10">
                  <Linkedin size={16} /> LinkedIn
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative h-[420px] w-full md:h-[520px]">
            <div className="absolute inset-0 overflow-hidden rounded-xl border border-white/10 bg-black/30 shadow-[0_0_50px_rgba(147,51,234,0.25)]">
              {mounted && (
                <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              )}
            </div>
            <div className="pointer-events-none absolute -inset-4 -z-0 rounded-2xl bg-gradient-to-tr from-fuchsia-600/20 via-purple-600/10 to-blue-600/20 blur-2xl" />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="mb-4 text-2xl font-semibold text-white">About</h2>
            <p className="text-zinc-300">
              I specialize in designing scalable architectures, crafting maintainable codebases, and translating business requirements into robust technical solutions. My toolkit spans modern frontend frameworks, backend services, and cloud-native systems.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-3xl font-bold text-white">7+</p>
              <p className="text-xs text-zinc-400">Years Experience</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-3xl font-bold text-white">25+</p>
              <p className="text-xs text-zinc-400">Projects Shipped</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-3xl font-bold text-white">99.9%</p>
              <p className="text-xs text-zinc-400">Uptime Designed</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-center">
              <p className="text-3xl font-bold text-white">∞</p>
              <p className="text-xs text-zinc-400">Curiosity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-6 text-2xl font-semibold text-white">Skills</h2>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {[
            ['React', 'Frontend'],
            ['TypeScript', 'Frontend'],
            ['Node.js', 'Backend'],
            ['FastAPI', 'Backend'],
            ['PostgreSQL', 'Data'],
            ['MongoDB', 'Data'],
            ['Docker', 'DevOps'],
            ['Kubernetes', 'DevOps'],
            ['CI/CD', 'DevOps'],
            ['System Design', 'Architecture'],
            ['Observability', 'SRE'],
            ['Security', 'Trust'],
          ].map(([name, cat]) => (
            <div key={name} className="rounded-lg border border-white/10 bg-zinc-900/40 p-4 hover:border-fuchsia-500/40">
              <p className="text-white">{name}</p>
              <p className="text-xs text-zinc-400">{cat}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold text-white">Selected Projects</h2>
          <a href="#contact" className="text-sm text-fuchsia-300 hover:text-fuchsia-200">Let’s collaborate →</a>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <ProjectCard
            title="Telemetry Dashboard"
            description="Real-time analytics platform with event pipelines, role-based access control, and fine-grained alerting."
            tags={["React", "FastAPI", "Kafka", "ClickHouse"]}
            link="#"
            repo="#"
          />
          <ProjectCard
            title="E‑commerce Platform"
            description="Modular microservices with resilient payments, catalog, and inventory systems."
            tags={["Next.js", "Node", "PostgreSQL", "Redis"]}
            link="#"
            repo="#"
          />
          <ProjectCard
            title="Incident Automation"
            description="Runbook automation and chatops integrations to reduce MTTR across services."
            tags={["Python", "Slack", "Terraform", "AWS"]}
            link="#"
            repo="#"
          />
          <ProjectCard
            title="Design System"
            description="Accessible component library themed for cyberpunk minimalism."
            tags={["Storybook", "Tailwind", "Radix"]}
            link="#"
            repo="#"
          />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="relative mx-auto max-w-6xl px-4 py-20">
        <h2 className="mb-6 text-2xl font-semibold text-white">Experience</h2>
        <div className="space-y-8 border-l border-white/10 pl-6">
          <ExperienceItem
            role="Senior Fullstack Engineer"
            company="Nebula Systems"
            period="2022 — Present"
            points={[
              'Led the design of event-driven architecture processing 10M+ msgs/day',
              'Drove performance improvements that reduced p95 latency by 40%',
              'Partnered with analysts to translate KPIs into actionable dashboards',
            ]}
          />
          <ExperienceItem
            role="System Analyst"
            company="QuantumWorks"
            period="2019 — 2022"
            points={[
              'Mapped complex business processes into domain-driven models',
              'Introduced observability standards and incident workflows',
              'Championed threat modeling and secure development practices',
            ]}
          />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative mx-auto max-w-6xl px-4 py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold text-white">Let’s build something extraordinary</h2>
            <p className="mt-3 text-zinc-300">Open to freelance, consulting, and full-time opportunities.</p>
            <div className="mt-5 flex items-center gap-3">
              <a href="mailto:you@example.com" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10">
                <Mail size={16} /> you@example.com
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10">
                <Github size={16} /> GitHub
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200 hover:bg-white/10">
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </div>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
            <div className="grid grid-cols-1 gap-4">
              <input className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Name" />
              <input className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Email" type="email" />
              <textarea rows={5} className="rounded-md border border-white/10 bg-black/40 px-3 py-2 text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40" placeholder="Project details" />
            </div>
            <div className="mt-4">
              <NeonButton href="#">Send Message</NeonButton>
            </div>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Alex Nova. All rights reserved.</p>
          <p>Crafted with care · Cyberpunk minimal</p>
        </div>
      </footer>
    </div>
  )
}
