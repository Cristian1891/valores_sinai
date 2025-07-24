import { WhatsAppFloating } from '../../components/contact/WhatsAppFloating'
import { FamilySection } from '../../components/our_identity/our_vision/family_section/Family_Section'
import { HeroVision } from '../../components/our_identity/our_vision/hero/Hero'
import { ImpactTestimony } from '../../components/our_identity/our_vision/impact_testimony/Impact_Testimony'
import { MissionAreas } from '../../components/our_identity/our_vision/mission_areas/Mission_Areas'

export const Our_Vision = () => {
  return (
    <>
        <HeroVision></HeroVision>
        <MissionAreas></MissionAreas>
        <FamilySection></FamilySection>
        <ImpactTestimony></ImpactTestimony>
        <WhatsAppFloating/>
    </>
  )
}
