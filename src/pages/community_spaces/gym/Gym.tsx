import { GymHeroSection } from '../../../components/community_spaces/gym/GymHeroSection'
import { GymEquipmentSection } from '../../../components/community_spaces/gym/GymEquipmentSection'
import { GymScheduleSection } from '../../../components/community_spaces/gym/GymScheduleSection'
import { GymMembershipSection } from '../../../components/community_spaces/gym/GymMembershipSection'
import { GymTrainersSection } from '../../../components/community_spaces/gym/GymTrainersSection'
import { GymCTASection } from '../../../components/community_spaces/gym/GymCTASection'
import { WhatsAppFloating } from '../../../components/contact/WhatsAppFloating'

export const Gym = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
        {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <GymHeroSection/>
                <GymEquipmentSection />
                <GymScheduleSection/>
                <GymMembershipSection />
                <GymTrainersSection/>
                <GymCTASection/>
                <WhatsAppFloating/>
            </div>
        </div>
    </>
  )
}
