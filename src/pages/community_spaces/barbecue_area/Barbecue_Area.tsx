import { QuinchoBookingSection } from "../../../components/community_spaces/barbecue_area/QuinchoBookingSection"
import { QuinchoCapacitySection } from "../../../components/community_spaces/barbecue_area/QuinchoCapacitySection"
import { QuinchoCTASection } from "../../../components/community_spaces/barbecue_area/QuinchoCTASection"
import { QuinchoEventsSection } from "../../../components/community_spaces/barbecue_area/QuinchoEventsSection"
import { QuinchoFeaturesSection } from "../../../components/community_spaces/barbecue_area/QuinchoFeaturesSection"
import { QuinchoHeroSection } from "../../../components/community_spaces/barbecue_area/QuinchoHeroSection"
import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"


export const Barbecue_Area = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
                {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <QuinchoHeroSection/>
                <QuinchoFeaturesSection/>
                <QuinchoCapacitySection/>
                <QuinchoEventsSection/>
                <QuinchoBookingSection/>
                <QuinchoCTASection/>
                <WhatsAppFloating/>
                
            </div>
        </div>
    </>
  )
}
