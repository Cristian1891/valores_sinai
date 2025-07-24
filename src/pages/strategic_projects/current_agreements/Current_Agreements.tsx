import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"
import { ConveniosDestacadosSection } from "../../../components/strategic_projects/current_agreements/ConveniosDestacadosSection"
import { ConveniosHeroSection } from "../../../components/strategic_projects/current_agreements/ConveniosHeroSection"
import { ConveniosImpactSection } from "../../../components/strategic_projects/current_agreements/ConveniosImpactSection"
import { ConveniosListSection } from "../../../components/strategic_projects/current_agreements/ConveniosListSection"
import { ConveniosProcessSection } from "../../../components/strategic_projects/current_agreements/ConveniosProcessSection"

export const Current_Agreements = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <ConveniosHeroSection/>
                <ConveniosDestacadosSection/>
                <ConveniosListSection/>
                <ConveniosProcessSection/>
                <ConveniosImpactSection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </> 
  )
}
