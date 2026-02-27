import Hero from '../components/Hero'
import InsuranceTypes from '../components/InsuranceTypes'
import HowItWorks from '../components/HowItWorks'
import WhyUs from '../components/WhyUs'
import TrustSection from '../components/TrustSection'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <InsuranceTypes />
      <HowItWorks />
      <WhyUs />
      <TrustSection />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
