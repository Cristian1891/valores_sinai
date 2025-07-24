import { SalonCapacitySection } from "../../../components/community_spaces/event_hall/SalonCapacitySection"
import { SalonCTASection } from "../../../components/community_spaces/event_hall/SalonCTASection"
import { SalonEventTypesSection } from "../../../components/community_spaces/event_hall/SalonEventTypesSection"
import { SalonHeroSection } from "../../../components/community_spaces/event_hall/SalonHeroSection"
import { SalonPricingSection } from "../../../components/community_spaces/event_hall/SalonPricingSection"
import { SalonServicesSection } from "../../../components/community_spaces/event_hall/SalonServicesSection"
import { SalonTechnologySection } from "../../../components/community_spaces/event_hall/SalonTechnologySection"
import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"

export const Event_Hall = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <SalonHeroSection/>
                <SalonCapacitySection/>
                <SalonTechnologySection/>
                <SalonEventTypesSection/>
                <SalonServicesSection/>
                <SalonPricingSection/>
                <SalonCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
