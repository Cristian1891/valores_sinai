import { Hero } from '../../../components/community_spaces/green_spaces/Hero'
import { StatsSection } from '../../../components/community_spaces/green_spaces/StatsSection'
import { MainGreenAreasSection } from '../../../components/community_spaces/green_spaces/MainGreenAreasSection'
import { SportsSection } from '../../../components/community_spaces/green_spaces/SportsSection'
import { KidsSection } from '../../../components/community_spaces/green_spaces/KidsSection'
import { CTASection } from '../../../components/community_spaces/green_spaces/CTASection'
import { OverviewSection } from '../../../components/community_spaces/green_spaces/OverviewSection'
import { ImageGallery } from '../../../components/community_spaces/green_spaces/ImageGallery'
import { WhatsAppFloating } from '../../../components/contact/WhatsAppFloating'

export const Green_Spaces = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
          <div className="pt-16">
              <Hero/>
              <StatsSection />
              <OverviewSection/>
              <MainGreenAreasSection />
              <SportsSection />
              <KidsSection />
              <ImageGallery/>
              <CTASection />
              <WhatsAppFloating/>
          </div>
        </div>
    </>
  )
}
