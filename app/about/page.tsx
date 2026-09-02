import { Lightbulb, Target, Handshake, TrendingUp, Search, PenTool, Rocket, FileText, Download } from "lucide-react";
import CTASection from "@/components/CTA";

const values = [
  {
    icon: Lightbulb,
    title: "Creative Thinking",
    description:
      "We approach every project with fresh ideas, not templates — solving problems in ways that make your brand stand out.",
  },
  {
    icon: Target,
    title: "Strategic Approach",
    description:
      "Every decision, creative, material,  or digital is backed by a clear understanding of your goals,  audience, and market position.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnerships",
    description:
      "We aim to grow with you, not just deliver a one-off project — staying involved as your business evolves.",
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description:
      "Everything we build is measured against one question: does this actually move your business forward?",
  },
];

const process = [
  {
    icon: Search,
    step: "01",
    title: "Discover",
    description: "We learn your business, your audience, and what success looks like for you.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Create",
    description: "We shape strategies, campaigns, and materials tailored to your brand and goals from concepts to production-ready assets.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Deliver",
    description: "We launch, produce, and support you as your business grows across digital, print, and every touchpoint your brand shows up in.",
  },
];

const team = [
  {
    name: "Ishmael Khalako",
    role: "Founder & CEO",
    image: "/Ishmael.jpg",
  },
  {
    name: "Faham Banda",
    role: "Marketing Officer",
    image: "/Faham.jpg",
  },
  {
    name: "Abdul-Aziz Canada",
    role: "Finance Officer",
    image: "/Aziz.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-28 pb-20 bg-[#000f22] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#e01e41]/20 blur-[140px] rounded-full" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          
          <h1 className="mt-6 text-4xl md:text-6xl font-extrabold text-white leading-tight">
            A Malawian <span className="text-primary">marketing and brand agency</span> built for ambitious businesses<span className="text-primary">.</span>
          </h1>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            We help businesses build credibility, tell their story clearly, and grow with confidence.
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white py-14 border-b border-[#000f22]/10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-3 gap-6 text-center">

          <div>
            <p className="text-3xl md:text-5xl font-extrabold text-[#e01e41]">2020</p>
            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#000f22]/60">
              Year Founded
            </p>
          </div>

          <div>
            <p className="text-3xl md:text-5xl font-extrabold text-[#e01e41]">25+</p>
            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#000f22]/60">
              Projects Delivered
            </p>
          </div>

          <div>
            <p className="text-3xl md:text-5xl font-extrabold text-[#e01e41]">Serving</p>
            <p className="mt-2 text-sm uppercase tracking-[0.15em] text-[#000f22]/60">
              Local &amp; International Clients
            </p>
          </div>

        </div>
      </section>

      {/* OUR STORY + MISSION/VISION */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT — STORY */}
          <div>
            <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41] font-medium">
              Our Story
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#000f22] leading-tight">
              Why Nexus Brands exists<span className="text-primary">.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-[#000f22]/70">
              Nexus Brands started in 2020 with a simple belief
              that Malawian businesses deserve the same calibre of brand and
              marketing thinking as any agency abroad, delivered with local
              understanding. What began as design and brand identity work
              quickly grew as clients asked for more: campaigns, digital
              platforms, and eventually the branded materials and stationery
              that carry a brand into the real world.
            </p>

            <p className="mt-6 text-lg leading-relaxed text-[#000f22]/70">
              Since then, we've worked with businesses and
              organisations across sectors delivering various projects for local
              and international clients. Today, Nexus Brands operates as a
              full-service marketing and brand partner: strategy, creative,
              branded materials, and digital, working together under one
              roof.
            </p>
          </div>

          {/* RIGHT — MISSION & VISION */}
          <div className="space-y-6">

            <div className="p-8 rounded-4xl border-1 bg-primary">
              <span className="font-semibold text-white text-l my-5 bg-secondary/70 px-4 pb-1 pt-1 rounded-full">
                Our Vision
              </span>
              <p className="mt-7 text-white/90 leading-relaxed ">
                To be Malawi's most trusted marketing and brand partner helping
                businesses of every size build brands that compete confidently,
                locally and beyond
              </p>
            </div>

            <div className="p-8 rounded-4xl border-1 bg-primary">
              <span className="font-semibold text-white text-l my-5 bg-secondary/70 px-4 pb-1 pt-1 rounded-full">
                Our Mission
              </span>
              <p className="mt-7 text-white/90 leading-relaxed ">
                We help businesses build strong brands and reach their audiences
                through strategic thinking, creative execution, branded
                materials, and digital presence delivered with consistency,
                care, and measurable results.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-secondary py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41] font-medium">
              What Drives Us
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-accent">
              Our Values<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-6 rounded-xl border border-accent/20 hover:border-[#e01e41]/40 transition"
              >
                <v.icon className="text-primary mb-4" size={28} />
                <h3 className="font-bold text-accent">{v.title}</h3>
                <p className="mt-3 text-sm text-white/60 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-accent py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41] font-medium">
              Our Process
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-secondary">
              How We Work<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {process.map((p) => (
              <div key={p.step} className="text-center">
                <div className="w-14 h-14 mx-auto rounded-full bg-[#e01e41]/10 flex items-center justify-center">
                  <p.icon className="text-[#e01e41]" size={24} />
                </div>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-secondary/70">
                  Step {p.step}
                </p>
                <h3 className="mt-2 text-xl font-bold text-secondary">{p.title}</h3>
                <p className="mt-3 text-sm text-secondary/60 leading-relaxed max-w-xs mx-auto">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="bg-secondary py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <span className="uppercase tracking-[0.2em] text-sm text-[#e01e41] font-medium">
              Our Team
            </span>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold text-white">
              The people behind the work<span className="text-primary">.</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-[280px] w-full object-cover"
                />

                <div className="p-5">
                  <h3 className="font-bold text-white">{member.name}</h3>
                  <p className="text-sm text-white/60">{member.role}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* COMPANY PROFILE */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-[#000f22]/10 p-10 flex flex-col sm:flex-row items-center gap-8 text-center sm:text-left">

            <div className="w-16 h-16 rounded-xl bg-[#e01e41]/10 flex items-center justify-center flex-shrink-0">
              <FileText className="text-[#e01e41]" size={28} />
            </div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#000f22]">
                Want the full picture?
              </h3>
              <p className="mt-2 text-[#000f22]/60 leading-relaxed">
                Download our company profile for a detailed overview of who we are, what we do, and
                how we can work together.
              </p>
            </div>

            <a
              href="/nexus-brands-company-profile.pdf"
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#e01e41] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition flex-shrink-0"
            >
              <Download size={18} />
              Download Profile
            </a>

          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
      
      {/* BOTTOM WHITE LINE */}
      <div className="mt-16 h-px w-full bg-accent/20" />

    </>
  );
}