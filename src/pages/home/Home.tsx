import { About } from "../../components/home/about/About"
import { Community_Summary } from "../../components/home/community_summary/Community_Summary"
import { Contact } from "../../components/home/contact/Contact"
import { Donation_Summary } from "../../components/home/donation_summary/Donation_Summary"
import { Hero } from "../../components/home/hero/Hero"
import { InstagramFeed } from "../../components/home/instagram_feed/Instagram_Feed"
import { Facebook_Feed } from "../../components/home/facebook_feed/Facebook_Feed"
import { X_Feed } from "../../components/home/x_feed/X_Feed"
import { WhatsAppFloating } from "../../components/contact/WhatsAppFloating"


const Home = () => {
  return (
    <>
      <Hero></Hero> 
      <About></About>
      <Donation_Summary></Donation_Summary>
      <Community_Summary></Community_Summary>
      <Contact></Contact>
      <InstagramFeed></InstagramFeed>
      <Facebook_Feed></Facebook_Feed>
      <X_Feed></X_Feed>
      <WhatsAppFloating/>
    </>
  )
}

export default Home
