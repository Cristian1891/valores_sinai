import { AquaticActivitiesSection } from '../../../components/community_spaces/swimming_pool_changing_rooms/AquaticActivitiesSection'
import { ChangingRoomsSection } from '../../../components/community_spaces/swimming_pool_changing_rooms/ChangingRoomsSection'
import { PoolCTASection } from '../../../components/community_spaces/swimming_pool_changing_rooms/PoolCTASection'
import { PoolFeaturesSection } from '../../../components/community_spaces/swimming_pool_changing_rooms/PoolFeaturesSection'
import { PoolHeroSection } from '../../../components/community_spaces/swimming_pool_changing_rooms/PoolHeroSection'
import { PoolRulesSection } from '../../../components/community_spaces/swimming_pool_changing_rooms/PoolRulesSection'
import { SeasonalInfoSection } from '../../../components/community_spaces/swimming_pool_changing_rooms/SeasonalInfoSection'

export const Swimming_Pool_Changing_Rooms = () => {
  return (
    <>
        <div className="min-h-screen bg-white dark:bg-[#010101]">
                {/* Espaciado para el navbar fijo */}
            <div className="pt-16">
                <PoolHeroSection/>
                <PoolFeaturesSection/>
                <ChangingRoomsSection/>
                <AquaticActivitiesSection/>
                <PoolRulesSection/>
                <SeasonalInfoSection/>
                <PoolCTASection/>
            </div>
        </div>
    </>
  )
}
