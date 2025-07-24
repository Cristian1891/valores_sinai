import { ComedorCTASection } from "../../../components/community_spaces/dining_hall_kitchen/ComedorCTASection"
import { ComedorHeroSection } from "../../../components/community_spaces/dining_hall_kitchen/ComedorHeroSection"
import { ComedorKitchenSection } from "../../../components/community_spaces/dining_hall_kitchen/ComedorKitchenSection"
import { ComedorMenuSection } from "../../../components/community_spaces/dining_hall_kitchen/ComedorMenuSection"
import { ComedorScheduleSection } from "../../../components/community_spaces/dining_hall_kitchen/ComedorScheduleSection"
import { ComedorServicesSection } from "../../../components/community_spaces/dining_hall_kitchen/ComedorServicesSection"
import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"

export const Dining_Hall_Kitchen = () => {
  return ( 
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <ComedorHeroSection/>
                <ComedorServicesSection/>
                <ComedorKitchenSection/>
                <ComedorMenuSection/>
                <ComedorScheduleSection/>
                <ComedorCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
