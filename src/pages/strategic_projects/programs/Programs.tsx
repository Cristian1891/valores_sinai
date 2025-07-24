import { WhatsAppFloating } from "../../../components/contact/WhatsAppFloating"
import { ProgramasActivosSection } from "../../../components/strategic_projects/programs/ProgramasActivosSection"
import { ProgramasCTASection } from "../../../components/strategic_projects/programs/ProgramasCTASection"
import { ProgramasHeroSection } from "../../../components/strategic_projects/programs/ProgramasHeroSection"
import { ProgramasImpactoSection } from "../../../components/strategic_projects/programs/ProgramasImpactoSection"

export const Programs = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <ProgramasHeroSection/>
                <ProgramasActivosSection/>
                <ProgramasImpactoSection/>
                <ProgramasCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
