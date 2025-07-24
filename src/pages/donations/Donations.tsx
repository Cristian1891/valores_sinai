import { WhatsAppFloating } from "../../components/contact/WhatsAppFloating"
import { DonationCategoriesSection } from "../../components/donations/DonationCategoriesSection"
// import { DonationFormSection } from "../../components/donations/DonationFormSection"
import { DonationHeroSection } from "../../components/donations/DonationHeroSection"
import { ImpactSection } from "../../components/donations/ImpactSection"

export const Donations = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
                {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <DonationHeroSection/>
                <DonationCategoriesSection/>
                {/* <DonationFormSection/> */}
                <ImpactSection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
