import { WhatsAppFloating } from "../../components/contact/WhatsAppFloating"
import { CorporatePartnersHeroSection } from "../../components/corporate_allies/CorporatePartnersHeroSection"
import { ImpactStatsSection } from "../../components/corporate_allies/ImpactStatsSection"
import { PartnerBenefitsSection } from "../../components/corporate_allies/PartnerBenefitsSection"
import { PartnerCategoriesSection } from "../../components/corporate_allies/PartnerCategoriesSection"
import { PartnerCTASection } from "../../components/corporate_allies/PartnerCTASection"
import { ProgramsSection } from "../../components/corporate_allies/ProgramsSection"
import { TestimonialsSection } from "../../components/corporate_allies/TestimonialsSection"

export const Corporate_Allies = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
                {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <CorporatePartnersHeroSection/>
                <ImpactStatsSection/>
                <PartnerCategoriesSection/>
                <ProgramsSection/>
                <PartnerBenefitsSection/>
                <TestimonialsSection/>
                <PartnerCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
