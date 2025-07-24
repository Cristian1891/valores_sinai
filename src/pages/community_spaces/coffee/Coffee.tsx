import { CafeCTASection } from "../../../components/community_spaces/coffee/CafeCTASection"
import { CafeExperienceSection } from "../../../components/community_spaces/coffee/CafeExperienceSection"
import { CafeHeroSection } from "../../../components/community_spaces/coffee/CafeHeroSection"
import { CafeMenuSection } from "../../../components/community_spaces/coffee/CafeMenuSection"
import { CafeServicesSection } from "../../../components/community_spaces/coffee/CafeServicesSection"
import { CafeTestimonialsSection } from "../../../components/community_spaces/coffee/CafeTestimonialsSection"
import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"

export const Coffee = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <CafeHeroSection/>
                <CafeMenuSection/>
                <CafeExperienceSection/>
                <CafeServicesSection/>
                <CafeTestimonialsSection/>
                <CafeCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
