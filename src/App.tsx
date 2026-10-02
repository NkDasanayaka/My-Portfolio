import { useState, useEffect } from "react";

const NAV_LINKS = ["Home", "About", "Skills", "Projects", "Contact"];

const SKILLS = [
  { name: "Java", level: 85, icon: "☕" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "JavaScript", level: 75, icon: "🟨" },
  { name: "React", level: 70, icon: "⚛️" },
  { name: "Node.js", level: 70, icon: "🟩" },
  { name: "SQL", level: 75, icon: "🗄️" },
  { name: "Git & GitHub", level: 75, icon: "🐙" },
  { name: "HTML & CSS", level: 85, icon: "🎨" },
];

const PROJECTS = [
  {
    title: "Learning Management System",
    description:
      "A full-stack web application to manage student records, grades, and attendance. Built with Java Spring Boot and React frontend with MySQL database.",
    tech: ["MongoDB", "Express", "React", "Node.js", ],
    
    gradient: "from-violet-500 to-purple-600",
    github: "https://open-study-frontend.vercel.app/",
    live: "https://open-study-frontend.vercel.app/",
  },

  {
    title: "Task Manager App",
    description:
      "A productivity app with real-time task tracking, priority management, and deadline notifications. Features drag-and-drop UI built with React.",
    tech: ["React", "Firebase", "CSS3"],
    icon: "✅",
    gradient: "from-emerald-500 to-teal-600",
    github: "#",
    live: "#",
  },


  {
    title: "Portfolio Website",
    description:
      "This very portfolio website — designed and built from scratch using React and Tailwind CSS with smooth animations and responsive design.",
    tech: ["React", "Tailwind CSS", "Vite"],
    icon: "💼",
    gradient: "from-indigo-500 to-violet-600",
    github: "#",
    live: "#",
  },
];

const TIMELINE = [
  {
    year: "2023",
    title: "Started BSE Degree",
    desc: "Enrolled at The Open University of Sri Lanka to pursue my passion for software development and technology.",
    icon: "🏫",
  },
  {
    year: "2024",
    title: "First Programming Projects",
    desc: "Completed foundational projects in Java and Python, gaining hands-on experience in OOP and algorithms.",
    icon: "💻",
  },
  {
    year: "2025",
    title: "Web Development Journey",
    desc: "Dove deep into full-stack web development, learning React, Node.js and modern CSS frameworks.",
    icon: "🌐",
  },
  {
    year: "2026",
    title: "Building Real-World Apps",
    desc: "Working on complex projects, collaborating with peers, and contributing to open-source repositories on GitHub.",
    icon: "🚀",
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("Home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV_LINKS.map((n) => n.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(NAV_LINKS[i]);
          if (sections[i] === "skills") setAnimatedSkills(true);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (section: string) => {
    const el = document.getElementById(section.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="bg-[#0a0a14] text-white font-sans overflow-x-hidden">
      {/* ── NAVBAR ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a14]/90 backdrop-blur-md shadow-lg shadow-violet-900/20 border-b border-violet-900/30"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
            &lt;Nisal /&gt;
          </span>
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`text-sm font-medium transition-colors duration-200 hover:text-violet-400 ${
                    activeSection === link ? "text-violet-400" : "text-slate-300"
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
          {/* Hire Me button */}
          <a
            href="mailto:nisal@example.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold hover:opacity-90 transition"
          >
            Hire Me 🚀
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0f0f20]/95 backdrop-blur-md border-t border-violet-900/30 px-6 py-4 flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(link)}
                className="text-left text-slate-200 hover:text-violet-400 transition font-medium"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a14]/70 via-[#0a0a14]/50 to-[#0a0a14]" />

        {/* Floating blobs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-500 blur-md scale-110 opacity-70 animate-pulse" />
              <img
                src="/images/Pro.jpeg"
                alt="Nisal Dasanayaka"
                className="relative w-36 h-36 rounded-full object-cover border-4 border-violet-500 shadow-2xl shadow-violet-900"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet-500/40 bg-violet-900/20 text-violet-300 text-sm mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for internships & collaborations
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Nisal
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
            Software Engineering Undergraduate
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Passionate about building clean, efficient, and user-friendly software.
            I love turning complex problems into elegant digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("Projects")}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-base hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-violet-900/50"
            >
              View My Work ✨
            </button>
            <button
              onClick={() => scrollTo("Contact")}
              className="px-8 py-3 rounded-full border border-violet-500/50 text-violet-300 font-semibold text-base hover:bg-violet-900/30 hover:scale-105 transition-all duration-200"
            >
              Get In Touch →
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="mt-16 flex justify-center animate-bounce">
            <svg className="w-6 h-6 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
        <SectionHeader tag="Who I Am" title="About Me" />

        <div className="mt-14 grid md:grid-cols-2 gap-14 items-center">
          {/* Image side */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-violet-500/40 shadow-2xl shadow-violet-900/30">
                <img
                  src="/images/Pro.jpeg"
                  alt="Nisal Dasanayaka"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative corner */}
              <div className="absolute -bottom-4 -right-4 w-72 h-72 md:w-80 md:h-80 rounded-2xl border-2 border-violet-500/20 -z-10" />
              {/* Badge */}
              <div className="absolute -bottom-5 -left-5 bg-[#13132a] border border-violet-500/40 rounded-xl px-4 py-3 shadow-xl">
                <p className="text-2xl font-bold text-violet-400">3+</p>
                <p className="text-xs text-slate-400">Years Coding</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-white">
              Nisal Dasanayaka
            </h3>
            <p className="text-slate-400 leading-relaxed">
              I'm a dedicated Software Engineering undergraduate with a strong passion for
              developing innovative software solutions. Currently pursuing my Bachelor's degree,
              I've been steadily building expertise across multiple programming languages and
              modern frameworks.
            </p>
            <p className="text-slate-400 leading-relaxed">
              I thrive on solving real-world problems through code. Whether it's designing
              scalable backend systems, building responsive frontends, or crafting clean
              algorithms — I'm always eager to learn and improve.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              {[
                { label: "Name", value: "Nisal Dasanayaka" },
                { label: "Degree", value: "BSE Software Engineering" },
                { label: "Email", value: "nisalkavindikadasanayaka@gmail.com" },
                { label: "Status", value: "Open to Opportunities" },
              ].map(({ label, value }) => (
                <div key={label} className="bg-[#13132a] rounded-xl p-4 border border-violet-900/40">
                  <p className="text-xs text-violet-400 font-semibold uppercase tracking-widest mb-1">{label}</p>
                  <p className="text-sm text-slate-200 font-medium">{value}</p>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold text-sm hover:opacity-90 transition"
            >
              📄 Download CV
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <h3 className="text-xl font-bold text-center text-slate-200 mb-12">My Journey</h3>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500 to-transparent" />
            <div className="flex flex-col gap-10">
              {TIMELINE.map((item, i) => (
                <div key={i} className={`flex gap-8 items-start ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"} relative`}>
                  <div className="flex-1 flex justify-end">
                    {i % 2 === 0 ? (
                      <div className="bg-[#13132a] border border-violet-900/40 rounded-xl p-5 max-w-xs w-full shadow-lg">
                        <span className="text-xs text-violet-400 font-bold">{item.year}</span>
                        <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    ) : <div className="flex-1" />}
                  </div>
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1a1a35] border-2 border-violet-500 text-2xl shrink-0 z-10">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    {i % 2 !== 0 ? (
                      <div className="bg-[#13132a] border border-violet-900/40 rounded-xl p-5 max-w-xs w-full shadow-lg">
                        <span className="text-xs text-violet-400 font-bold">{item.year}</span>
                        <h4 className="text-white font-semibold mt-1">{item.title}</h4>
                        <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                      </div>
                    ) : <div className="flex-1" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="py-28 px-6 bg-[#0d0d1f]">
        <div className="max-w-6xl mx-auto">
          <SectionHeader tag="What I Know" title="Skills & Technologies" />

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {SKILLS.map((skill, i) => (
              <div key={skill.name} className="bg-[#13132a] rounded-xl p-5 border border-violet-900/30 hover:border-violet-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <span className="text-slate-200 font-semibold">{skill.name}</span>
                  </div>
                  <span className="text-violet-400 font-bold text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-[#1e1e40] rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-2.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-1000 ease-out"
                    style={{
                      width: animatedSkills ? `${skill.level}%` : "0%",
                      transitionDelay: `${i * 80}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tech Badges */}
          <div className="mt-14">
            <h3 className="text-center text-slate-400 text-sm font-semibold uppercase tracking-widest mb-6">Also familiar with</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Node.js", "Express.js", "MongoDB", "Git", "GitHub", "TypeScript", "Figma", , "Postman", "VS Code", "IntelliJ IDEA"].map((tech) => (
                <span key={tech} className="px-4 py-2 rounded-full bg-[#1a1a35] border border-violet-900/40 text-slate-300 text-sm hover:border-violet-500/50 hover:text-violet-300 transition cursor-default">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
        <SectionHeader tag="What I've Built" title="My Projects" />

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="group bg-[#13132a] border border-violet-900/30 rounded-2xl overflow-hidden hover:border-violet-500/50 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-violet-900/30 flex flex-col"
            >
              {/* Card Header */}
              <div className={`h-3 w-full bg-gradient-to-r ${project.gradient}`} />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{project.description}</p>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs font-medium bg-[#1e1e40] text-violet-300 border border-violet-900/40">
                      {t}
                    </span>
                  ))}
                </div>
                {/* Links */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-violet-400 transition"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-28 px-6 bg-[#0d0d1f]">
        <div className="max-w-4xl mx-auto">
          <SectionHeader tag="Let's Talk" title="Get In Touch" />

          <div className="mt-14 grid md:grid-cols-2 gap-10">
            {/* Info */}
            <div className="space-y-6">
              <p className="text-slate-400 leading-relaxed text-lg">
                I'm always open to new opportunities, internships, collaborations,
                or just a friendly chat about tech. Feel free to reach out!
              </p>
              <div className="space-y-4 mt-8">
                {[
                  { icon: "📧", label: "Email", value: "nisalkavindikadasanayaka@example.com" },
                  { icon: "📍", label: "Location", value: "Sri Lanka" },
                  { icon: "🎓", label: "University", value: "BSE Software Engineering" },
                ].map(({ icon, label, value }) => (
                  <div key={label} className="flex items-center gap-4 bg-[#13132a] border border-violet-900/30 rounded-xl p-4">
                    <span className="text-2xl">{icon}</span>
                    <div>
                      <p className="text-xs text-violet-400 font-semibold uppercase tracking-widest">{label}</p>
                      <p className="text-slate-200 text-sm font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex gap-4 pt-4">
                {[
                  { label: "GitHub", href: "#", icon: "🐙" },
                  { label: "LinkedIn", href: "#", icon: "💼" },
                  { label: "Twitter", href: "#", icon: "🐦" },
                ].map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#13132a] border border-violet-900/40 text-slate-300 text-sm hover:border-violet-500 hover:text-violet-300 transition"
                  >
                    {icon} {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-400 mb-1 font-medium">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#13132a] border border-violet-900/40 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500 transition text-sm"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1 font-medium">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#13132a] border border-violet-900/40 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500 transition text-sm"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm text-slate-400 mb-1 font-medium">Message</label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[#13132a] border border-violet-900/40 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-600 focus:outline-none focus:border-violet-500 transition text-sm resize-none"
                  placeholder="Hi Nisal, I'd love to connect..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold hover:opacity-90 hover:scale-[1.01] transition-all duration-200 shadow-lg shadow-violet-900/40"
              >
                {submitted ? "✅ Message Sent!" : "Send Message 🚀"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-6 border-t border-violet-900/30 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-lg font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            &lt;Nisal /&gt;
          </span>
          <p className="text-slate-500 text-sm">
            © 2025 Nisal Dasanayaka. Built with ⚛️ React & 💜 Passion.
          </p>
          <div className="flex gap-4">
            {["GitHub", "LinkedIn", "Twitter"].map((s) => (
              <a key={s} href="#" className="text-slate-500 hover:text-violet-400 text-sm transition">
                {s}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="text-center">
      <span className="inline-block px-4 py-1.5 rounded-full bg-violet-900/30 border border-violet-500/30 text-violet-400 text-xs font-semibold uppercase tracking-widest mb-4">
        {tag}
      </span>
      <h2 className="text-4xl md:text-5xl font-extrabold text-white">
        {title}
      </h2>
      <div className="mt-4 flex justify-center">
        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />
      </div>
    </div>
  );
}
