import Section from "@/components/section";
import { CTAButtons } from "@/components/cta-buttons";
import ProjectCard from "@/components/project-card";
import VideoEmbed from "@/components/video-embed";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";



export default function HomePage() {
  return (
    <main>
      {/* HERO */}
      <Section id="home" className="pt-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
              <h1 className="text-3xl font-bold leading-tight">
                Paulo Díaz — Product Engineer
              </h1>
                <p className="text-lg text-muted-foreground mt-4 max-w-xl">
                  I’ve spent the last few years working across the entire product lifecycle — from UX design to front-end engineering to growth strategy.
                  I believe great products are built through rapid iteration, clear design, and close collaboration between vision and execution.
                </p>

            <div className="flex gap-2 flex-wrap">
                <span className="text-xs px-2 py-1 border rounded-full">Product Strategy</span>
                <span className="text-xs px-2 py-1 border rounded-full">UX Design</span>
                <span className="text-xs px-2 py-1 border rounded-full">Front-End Engineering</span>
        
                <span className="text-xs px-2 py-1 border rounded-full">MBA | Consulting Mindset</span>
              </div>
            <CTAButtons />
          </div>
          <div className="rounded-xl border">
            {/* placeholder montage; swap later */}
            <div className="relative w-full h-84">
  <Image
    src="/images/cardano.png"
    alt="Cur8 cover"
    fill
    className="object-fit rounded-t-lg transition group-hover:scale-[1.02] rounded-xl"
  />
</div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* HIGHLIGHT REEL */}
     <Section id="work">
      <h2 className="section-title">A few stories from the journey</h2>
      <p className="section-subtitle">
        Every product taught me something new — about users, systems, and speed.  
        Here are a few examples of how I helped teams move from idea to impact.
      </p>
 <div className="grid md:grid-cols-4 gap-6 mt-8">
  <ProjectCard
    title="Cur8"
    blurb="At Cur8, I explored how design can reignite momentum in a stalled platform. I joined an acquisition-stage team to re-imagine the creator journey — using fast iterations, templates, and onboarding clarity to help the product learn from its users again. This experience taught me how UX and business strategy converge when a product needs to grow quickly and intelligently."
    badges={["Product Strategy","UX Design","PLG","Iterative Growth"]}
    href="https://www.cur8.io/home"
    image="/images/figma.png"
    alt="Cur8 UX thumbnails"
  />

  <ProjectCard
    title="Metera (DeFi UX)"
    blurb="Metera challenged me to make trust and usability tangible inside DeFi. Working with engineers and protocol designers, I translated abstract blockchain logic into human language and visual confidence. It showed me that great UX isn’t just beauty or flow — it’s the foundation of adoption in complex systems."
    badges={["Fintech / DeFi","Security UX","System Thinking"]}
    href="https://www.meteraprotocol.io/"
    image="/images/metera.png"
    alt="Metera UI"
  />

  <ProjectCard
    title="Visiplay (OTT)"
    blurb="Visiplay became my laboratory for decision design. I restructured content discovery so users could move from curiosity to commitment without friction. It reminded me that growth isn’t only about features — it’s about helping users feel certain they’re in the right place."
    badges={["Media / OTT","Information Architecture","Conversion UX"]}
    href="https://www.visionsciencelabs.com/"
    image="/images/visiplay.png"
    alt="Visiplay UI"
  />

  <ProjectCard
    title="VoiceERP (Fleet AI)"
    blurb="VoiceERP united everything I’d learned — design, code, and business strategy. I partnered with a startup team to shape dispatcher and driver experiences that reduce operational noise and surface data that drives real decisions. It reinforced my belief that UX can become the operating system of a business when designed with empathy and measurable intent."
    badges={["Logistics","B2B SaaS","Data Visualization","Product Strategy"]}
    href="https://voiceerp.ai/"
    image="/images/voiceerp.png"
    alt="VoiceERP UI"
  />
</div>

</Section>


      <Separator />

      {/* CUR8 FEATURED */}
      <Section id="cur8">
        <h2 className="section-title">Cur8 — Reimagining a creator economy platform</h2>
        <p className="section-subtitle">
          I led UX to simplify creation & monetization flows, rebuilding the growth engine around time-to-value and templates.
        </p>
        <div className="mt-6">
          {/* replace URL with your actual youtube-nocookie embed */}
          <VideoEmbed url="https://www.youtube.com/embed/mI-wRFhYcsw?si=NcoDa-f3UBEm-CQa" title="Cur8 overview" />
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-8 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Problem</h3>
            <p>Strong brand, stalled UX, high drop-off during onboarding and first publish.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Approach</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Mapped friction in signup→first publish; rebuilt IA & progressive onboarding.</li>
              <li>Template-led creation for early wins.</li>
              <li>Paywall clarity + PLG loops (share, invite, duplicate).</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Impact (edit to real)</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>↓ TTV ~40%</li>
              <li>↑ D14 activation</li>
              <li>↑ Template adoption</li>
            </ul>
          </div>
        </div>
      </Section>

      <Separator />

      {/* METERA */}
      <Section id="metera">
        <h2 className="section-title">Metera — Human-centered DeFi UX</h2>
        <p className="section-subtitle">Simplified multi-step blockchain interactions into clear, low-anxiety flows.</p>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h3 className="font-semibold mb-2">Highlights</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Explainer micro-copy for risk/fees.</li>
              <li>Transaction states & error recovery.</li>
              <li>Wallet connect and signing UX; trust cues.</li>
            </ul>
          </div>
          <div className="md:col-span-2">
           
              <div className="md:col-span-2">
                <div className="relative aspect-video rounded-xl overflow-hidden border">
                  <Image
                    src="/images/metera.png"
                    alt="Metera UI"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
               
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Separator />

      {/* VISIPLAY */}
      <Section id="visiplay">
        <h2 className="section-title">Visiplay — Content discovery that converts</h2>
        <p className="section-subtitle">IA refresh, content rails, watch-next, and clearer plan selection.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="relative aspect-video rounded-xl overflow-hidden border">
            <Image
              src="/images/visiplay.png"
              alt="Visiplay UI"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="space-y-2 text-sm">
            <ul className="list-disc list-inside space-y-1">
              <li>Card hierarchy & previews.</li>
              <li>Plan selection with true cost transparency.</li>
              <li>A/B-testable upsell surfaces.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Separator />
<Separator />

<Section id="voiceerp">
  <h2 className="section-title">VoiceERP — AI-driven fleet operations</h2>
  <p className="section-subtitle">Dispatcher UX, driver scheduling, and real-time analytics.</p>
  <div className="mt-6 grid md:grid-cols-2 gap-6">
    <div className="relative aspect-video rounded-xl overflow-hidden border">
      <Image
        src="/images/voiceerp.png"
        alt="VoiceERP UI"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
    <div className="space-y-2 text-sm">
      <ul className="list-disc list-inside space-y-1">
        <li>AI dispatcher suggestions with clear state transitions.</li>
        <li>Driver scheduling constraints & conflict resolution.</li>
        <li>Geotab-style telemetry summaries and alerts.</li>
      </ul>
    </div>
  </div>
</Section>
      {/* FIGMA */}
  <Section id="figma">
  <h2 className="section-title">Figma portfolio snapshots</h2>
  <p className="section-subtitle">Design tokens, components, flows, and motion specs. Live walkthrough on call.</p>
  <div className="mt-6">
    <div className="relative aspect-[16/9] rounded-xl overflow-hidden border">
      <Image
        src="/images/figma.png"
        alt="Figma portfolio snapshots"
        fill
        sizes="100vw"
        className="object-cover"
        priority={false}
      />
    </div>
  </div>
</Section>
      <Separator />

      {/* ABOUT */}
      <Section id="about">
        <h2 className="section-title">About</h2>
        <div className="mt-4 grid md:grid-cols-3 gap-6">
          <p className="md:col-span-2 text-muted-foreground">
            MBA (IPADE/LBS). Former full-stack consultant and UX lead. I turn product stagnation into growth through clear flows,
            design systems, and PLG. Comfortable from Figma to production (React/Next).
          </p>
          <ul className="text-sm">
            <li>• Clarity over cleverness</li>
            <li>• Speed with quality gates</li>
            <li>• Measure what matters</li>
          </ul>
        </div>
      </Section>

      <Separator />

      {/* CONTACT */}
      <Section id="contact">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let’s talk about reimagining the creator experience.</p>
        <div className="mt-6 flex gap-3">
          <a className="underline" href="pdiazgay.iepaut25@london.edu">pdiazgay.iepaut25@london.edu</a>
          <a className="underline" href="https://www.linkedin.com/in/paulodiazg/" target="_blank">LinkedIn</a>
        </div>
      </Section>
    </main>
  );
}
