import { ContactFormSection } from "../../components/contact/ContactFormSection"
import { ContactHeroSection } from "../../components/contact/ContactHeroSection"
import { ContactInfoSection } from "../../components/contact/ContactInfoSection"
import { ScheduleSection } from "../../components/contact/ScheduleSection"
import { ServicesContactSection } from "../../components/contact/ServicesContactSection"
import { WhatsAppFloating } from "../../components/contact/WhatsAppFloating"

export const Contact = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
                {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <ContactHeroSection/>
                <ContactFormSection/>
                <ContactInfoSection/>
                <ServicesContactSection/>
                <WhatsAppFloating/>
                <ScheduleSection/>


            </div>
        </div>
    </>
  )
}
