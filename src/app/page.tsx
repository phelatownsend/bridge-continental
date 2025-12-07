'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [open, setOpen] = useState(false); // State for mobile menu

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-neutral-900">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center">
              <Image
                src="/images/bridge-continental-logo.png"
                alt="Bridge Continental Advisory Group Logo"
                width={120}
                height={50}
                priority
              />
            </a>

            <button className="md:hidden p-2" onClick={() => setOpen(true)} aria-label="Open menu">
              ☰
            </button>

            {/* UPDATED NAV: Reduced gap to gap-2, added padding/hover styles to links */}
            <nav className="hidden md:flex items-center gap-2 text-base md:text-lg font-normal text-neutral-700">
              <a href="#about" className="px-4 py-2 rounded-full transition-colors hover:bg-[#1E3A8A] hover:text-white">About</a>
              <a href="#services" className="px-4 py-2 rounded-full transition-colors hover:bg-[#1E3A8A] hover:text-white">What We Do</a>
              <a href="#sectors" className="px-4 py-2 rounded-full transition-colors hover:bg-[#1E3A8A] hover:text-white">Engagement Areas</a>
              <a href="#team" className="px-4 py-2 rounded-full transition-colors hover:bg-[#1E3A8A] hover:text-white">Leadership</a>
              <a href="#commitment" className="px-4 py-2 rounded-full transition-colors hover:bg-[#1E3A8A] hover:text-white">Our Commitment</a>
              <a href="#how" className="px-4 py-2 rounded-full transition-colors hover:bg-[#1E3A8A] hover:text-white">How We Work</a>
              <a href="#contact" className="inline-flex items-center rounded-full bg-[#1E3A8A] px-5 py-2 font-normal text-base md:text-lg text-white hover:bg-[#27409f] transition shadow-md ml-2">
                Contact
              </a>
            </nav>
          </div>
        </div>

        {open && (
          <div className="md:hidden bg-white border-t border-neutral-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 grid gap-3">
              <div className="flex justify-end">
                 <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">✕</button>
              </div>
              <a href="#about" className="block py-2 hover:text-neutral-900" onClick={() => setOpen(false)}>About</a>
              <a href="#services" className="block py-2 hover:text-neutral-900" onClick={() => setOpen(false)}>What We Do</a>
              <a href="#sectors" className="block py-2 hover:text-neutral-900" onClick={() => setOpen(false)}>Engagement Areas</a>
              <a href="#team" className="block py-2 hover:text-neutral-900" onClick={() => setOpen(false)}>Leadership</a>
              <a href="#commitment" className="block py-2 hover:text-neutral-900" onClick={() => setOpen(false)}>Our Commitment</a>
              <a href="#how" className="block py-2 hover:text-neutral-900" onClick={() => setOpen(false)}>How We Work</a>
              <a href="#contact" className="block py-2 text-[#1E3A8A] font-medium" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="relative py-24 md:py-28 text-white overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
        >
          <source src="/my-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E55]/80 to-[#1E3A8A]/70 z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4">
          <p className="uppercase tracking-[0.22em] text-xs text-[#CBD5E1]">Strategic Advisory for a Connected World</p>
          <div className="mt-6 flex flex-col space-y-2 font-serif text-3xl md:text-5xl font-semibold leading-none">
            <span>Insight that innovates.</span>
            <span>Influence that inspires.</span>
            <span>Impact that endures.</span>
          </div>
          
          <div className="mt-6 w-full text-base md:text-lg text-[#E2E8F0] tracking-tight leading-relaxed">
            <p className="m-0 p-0">
              Bridge Continental works with governments, investors, and institutions to translate strategy into execution connecting key regions and decision&#8209;makers
              <br className="hidden md:block" />
              to advance cooperation and lasting impact across Africa and the world.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a className="inline-flex items-center rounded-full bg-white text-[#1E3A8A] px-5 py-3 font-medium hover:bg-[#E2E8F0] transition" href="mailto:contact@bcagglobal.com">Email us</a>
          </div>
        </div>
      </section>

      <main>
        {/* ===== ABOUT SECTION ===== */}
        <section id="about" className="py-24 border-t border-neutral-200 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl text-[#1E293B] font-bold">About</h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              Bridge Continental Advisory Group is a senior-led advisory firm guiding governments and institutions on strategic partnerships and execution.
            </p>
            <p className="mt-4 text-lg text-neutral-600 leading-relaxed">
              With reach across key global centers, we connect regions through access, insight, and trusted relationships.
            </p>
          </div>
        </section>

        {/* ===== WHAT WE DO SECTION ===== */}
        <section id="services" className="py-20 border-t border-neutral-200 bg-[#F8F4EF]">
          <div className="max-w-7xl mx-auto px-4 text-center">
            
            <h2 className="font-serif text-4xl text-[#1E293B] font-bold">What We Do</h2>
            
            <p className="mt-6 max-w-4xl mx-auto text-neutral-600 text-lg leading-relaxed">
              We help our clients build alignment across economies and institutions—mobilizing capital, shaping policy, strengthening systems, and advancing long-term resilience.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
              
              {/* Card 1 */}
              <div className="bg-white p-8 border border-neutral-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-4 min-h-[56px] flex items-center justify-center">
                  Capital Advisory & Partnerships
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We connect capital and opportunity through trusted relationships that enable investment across critical sectors.
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-white p-8 border border-neutral-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-4 min-h-[56px] flex items-center justify-center">
                  Government Strategy & Alignment
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We support governments and ministries in shaping priorities and policies to translate vision into action.
                </p>
              </div>

              {/* Card 3 */}
              <div className="bg-white py-8 px-2 border border-neutral-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-4 min-h-[56px] flex items-center justify-center tracking-tight">
                  Enterprise & Institutional Alignment
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed px-4">
                  We help leaders and organizations align vision, structure, and execution to build institutions that shape markets and societies.
                </p>
              </div>

              {/* Card 4 */}
              <div className="bg-white p-8 border border-neutral-200 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                <h3 className="font-serif text-xl font-bold text-[#1E293B] mb-4 min-h-[56px] flex items-center justify-center">
                  Systems & Capacity Development
                </h3>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  We guide stakeholders to shape and deliver initiatives that build resilience, empower people, and sustain lasting progress.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== ENGAGEMENT AREAS ===== */}
        <section id="sectors" className="py-24 border-t border-neutral-200 bg-white">
          <div className="max-w-6xl mx-auto px-4 text-center">
            
            {/* Header Section */}
            <h2 className="font-serif text-4xl text-[#1E293B] font-bold">Engagement Areas</h2>
            <p className="mt-6 max-w-3xl mx-auto text-neutral-600 text-lg leading-relaxed">
              Our engagement areas reflect strategic opportunities for collaboration and impact. We focus on domains where our networks, insight, and access enable meaningful results.
            </p>
            
            {/* Grid Layout */}
            <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
              
              {/* ===== Infrastructure Card ===== */}
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden">
                   <Image
                    src="/images/infra.png"
                    alt="Infrastructure background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 border-x border-b border-neutral-200 text-left flex-grow flex items-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Infrastructure & Connectivity</h3>
                </div>
              </div>

              {/* ===== Critical Raw Materials Card ===== */}
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src="/images/raw.png"
                    alt="Critical Raw Materials background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 border-x border-b border-neutral-200 text-left flex-grow flex items-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Critical Raw Materials</h3>
                </div>
              </div>

              {/* ===== Energy & Transition Card ===== */}
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src="/images/energy.png"
                    alt="Energy & Transition background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 border-x border-b border-neutral-200 text-left flex-grow flex items-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Energy & Transition</h3>
                </div>
              </div>

              {/* ===== Housing & Urban Systems ===== */}
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src="/images/housing.png"
                    alt="Housing & Urban Systems background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 border-x border-b border-neutral-200 text-left flex-grow flex items-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Housing & Urban Systems</h3>
                </div>
              </div>

              {/* ===== Financial Systems ===== */}
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src="/images/financial.png"
                    alt="Financial Systems background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 border-x border-b border-neutral-200 text-left flex-grow flex items-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Financial Systems</h3>
                </div>
              </div>

              {/* ===== Agriculture & Food Systems ===== */}
              <div className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative w-full h-64 overflow-hidden">
                  <Image
                    src="/images/farming.png"
                    alt="Agriculture & Food Systems background"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-white p-6 border-x border-b border-neutral-200 text-left flex-grow flex items-center">
                  <h3 className="font-serif text-2xl font-bold text-[#1E293B]">Agriculture & Food Systems</h3>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===== LEADERSHIP SECTION ===== */}
        <section id="team" className="py-24 border-t border-neutral-200 bg-[#F8F4EF]">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl text-[#1E293B] font-bold">Leadership</h2>
            <p className="mt-6 max-w-5xl mx-auto text-neutral-600 text-lg leading-relaxed">
              Our founding team bridges regions, disciplines, and institutions—bringing together insight in diplomacy, governance, and institutional strategy to guide alignment across economies and&nbsp;systems.
            </p>

            <div className="mt-16 grid gap-6 md:grid-cols-3 items-stretch">
              
              {/* Leader 1 */}
              <div className="bg-white p-8 border border-neutral-200 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <h3 className="font-serif text-xl font-bold text-[#1E293B]">Femi Akinbi</h3>
                <p className="text-sm text-neutral-500 font-medium mt-1">Founding Partner</p>
              </div>

              {/* Leader 2 */}
              <div className="bg-white p-8 border border-neutral-200 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <h3 className="font-serif text-xl font-bold text-[#1E293B]">Makol Malwal</h3>
                <p className="text-sm text-neutral-500 font-medium mt-1">Founding Partner</p>
              </div>

              {/* Leader 3 */}
              <div className="bg-white p-8 border border-neutral-200 text-center hover:shadow-lg transition-shadow duration-300 h-full">
                <h3 className="font-serif text-xl font-bold text-[#1E293B]">Phela Townsend, PhD</h3>
                <p className="text-sm text-neutral-500 font-medium mt-1">Founding Partner</p>
              </div>

            </div>
          </div>
        </section>

        {/* ===== COMMITMENT SECTION ===== */}
        <section id="commitment" className="py-24 border-t border-neutral-200 bg-white">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl text-[#1E293B] font-bold">Our Commitment</h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              We are committed to a future where foresight and collaboration power sustainable growth and shared prosperity. We strengthen the systems, relationships, and institutions that connect regions to their collective&nbsp;potential.
            </p>
          </div>
        </section>

        {/* ===== HOW WE WORK SECTION ===== */}
        <section id="how" className="py-24 border-t border-neutral-200 bg-[#F8F4EF]">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="font-serif text-4xl text-[#1E293B] font-bold">How We Work</h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              We operate at the intersection of insight and execution. Every engagement begins with context—political, economic, and institutional—and translates into practical strategy. We work alongside leadership to ensure clarity, coherence, and coordination across implementation, valuing discretion, precision, and measurable&nbsp;progress.
            </p>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section id="contact" className="relative py-24 border-t border-neutral-200 text-white overflow-hidden">
          
          {/* Background Image Layer */}
          <Image
            src="/images/contact_us.png"
            alt="Contact section background"
            fill
            className="object-cover object-center z-0"
            priority={false}
          />

          {/* Opacity Overlay Layer (Dark blue gradient with high opacity for readability) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E55]/95 to-[#1E3A8A]/85 z-10"></div>

          {/* Content Layer */}
          <div className="relative z-20 max-w-3xl mx-auto px-4 text-center">
            <h2 className="font-serif text-3xl md:text-5xl font-semibold">Contact</h2>
            <p className="mt-3 text-[#E2E8F0]">For confidential inquiries and collaboration opportunities, please reach out directly.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="inline-flex items-center rounded-full bg-white text-[#1E3A8A] px-6 py-3 font-medium hover:bg-[#E2E8F0] transition" href="mailto:contact@bcagglobal.com">Begin the conversation</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 text-neutral-500 text-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Bridge Continental Advisory Group</p>
            <nav className="flex items-center gap-4">
              {/* <a href="#" className="hover:text-[#1E293B]">LinkedIn</a>
              <a href="#" className="hover:text-[#1E293B]">Privacy</a>
              <a href="#" className="hover:text-[#1E293B]">Terms</a> */}
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}