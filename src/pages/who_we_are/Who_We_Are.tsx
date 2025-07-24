import { WhatsAppFloating } from "../../components/contact/WhatsAppFloating"
import { AboutUs } from "../../components/our_identity/who_we_are/about_us/AboutUs"
import { Hero } from "../../components/our_identity/who_we_are/hero/Hero"
import { Purpose } from "../../components/our_identity/who_we_are/history/Purpose"
import { Principles } from "../../components/our_identity/who_we_are/principles/Principles"
import { Team } from "../../components/our_identity/who_we_are/team/Team"

export const Who_We_Are = () => {
  return (
    <>
    <Hero></Hero>
    <AboutUs></AboutUs>
    <Principles></Principles>
    <Purpose></Purpose>
    <Team></Team>
    <WhatsAppFloating/>

    
    </>
  )
}
