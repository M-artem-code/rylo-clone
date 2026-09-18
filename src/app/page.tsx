import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export default function Home() {
  return <><SiteHeader /><main>
    <section className="home-hero">
      <Image src="/images/hero-sky-background.qaFu5Zgx_1wsytD.avif" alt="" fill priority className="hero-bg" sizes="100vw" />
      <div className="hero-overlay"><p className="eyebrow">Technology for better connection</p><h1>Hear life<br /><em>your way.</em></h1><p className="hero-copy">Rylo makes beautiful, accessible tools that bring people closer to the conversations and moments that matter.</p><Link className="pill-button" href="/download">Explore Rylo <span>↗</span></Link></div>
      <div className="hero-caption">Designed with the Deaf and hard-of-hearing community.</div>
    </section>
    <section className="intro-section"><p className="eyebrow">Our products</p><h2>More ways to be part of the moment.</h2><div className="product-grid"><Link href="/live-transcribe" className="product-card card-blue"><span>Live Transcribe</span><strong>See every word.</strong><span className="card-arrow">↗</span></Link><Link href="/sidekick" className="product-card card-coral"><span>Sidekick</span><strong>Your conversation companion.</strong><span className="card-arrow">↗</span></Link><Link href="/sign" className="product-card card-sky"><span>Sign</span><strong>Language without limits.</strong><span className="card-arrow">↗</span></Link></div></section>
    <section className="statement"><p>We believe accessibility is not an add-on. It is a better way to design the world.</p><Link href="/about">Meet Rylo ↗</Link></section>
  </main><SiteFooter /></>;
}
