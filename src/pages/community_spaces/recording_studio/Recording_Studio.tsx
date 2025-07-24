import { RecordingStudioHeroSection } from "../../../components/community_spaces/recording_studio/RecordingStudioHeroSection"
import { StudioCTASection } from "./StudioCTASection"
import { StudioEquipmentSection } from "./StudioEquipmentSection"
import { StudioPricingSection } from "./StudioPricingSection"
import { StudioProcessSection } from "./StudioProcessSection"
import { StudioServicesSection } from "./StudioServicesSection"
import { StudioTestimonialsSection } from "./StudioTestimonialsSection"

export const Recording_Studio = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <RecordingStudioHeroSection/>
                <StudioEquipmentSection/>
                <StudioServicesSection/>
                <StudioPricingSection/>
                <StudioProcessSection/>
                <StudioTestimonialsSection/>
                <StudioCTASection/>
            </div>
        </div>
    </>
  )
}
