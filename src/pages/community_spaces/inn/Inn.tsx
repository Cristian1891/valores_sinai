import { PosadaBookingSection } from "../../../components/community_spaces/inn/PosadaBookingSection"
import { PosadaCTASection } from "../../../components/community_spaces/inn/PosadaCTASection"
import { PosadaHeroSection } from "../../../components/community_spaces/inn/PosadaHeroSection"
import { PosadaPoliciesSection } from "../../../components/community_spaces/inn/PosadaPoliciesSection"
import { PosadaRoomsSection } from "../../../components/community_spaces/inn/PosadaRoomsSection"
import { PosadaServicesSection } from "../../../components/community_spaces/inn/PosadaServicesSection"
import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"

export const Inn = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <PosadaHeroSection/>
                <PosadaRoomsSection/>
                <PosadaServicesSection/>
                <PosadaPoliciesSection/>
                <PosadaBookingSection/>
                <PosadaCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
