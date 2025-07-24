import { ConferenceCTASection } from "../../../components/community_spaces/conference_room/ConferenceCTASection"
import { ConferenceHeroSection } from "../../../components/community_spaces/conference_room/ConferenceHeroSection"
import { ConferenceLayoutSection } from "../../../components/community_spaces/conference_room/ConferenceLayoutSection"
import { ConferencePackagesSection } from "../../../components/community_spaces/conference_room/ConferencePackagesSection"
import { ConferenceServicesSection } from "../../../components/community_spaces/conference_room/ConferenceServicesSection"
import { ConferenceTechSection } from "../../../components/community_spaces/conference_room/ConferenceTechSection"
import { ConferenceTestimonialsSection } from "../../../components/community_spaces/conference_room/ConferenceTestimonialsSection"
import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"

export const Conference_Room = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <ConferenceHeroSection/>
                <ConferenceTechSection/>
                <ConferenceLayoutSection/>
                <ConferenceServicesSection/>
                <ConferencePackagesSection/>
                <ConferenceTestimonialsSection/>
                <ConferenceCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </> 
  )
}
