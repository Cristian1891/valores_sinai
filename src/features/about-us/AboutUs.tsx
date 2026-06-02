import { HeroAbout } from "./components/HeroAbout";
import { PresidentMessage } from "./components/PresidentMessage";
import { MissionVision } from "./components/MissionVision";
import { Team } from "./components/Team";
import { OrganizationalValues } from "./components/OrganizationalValues";

export const AboutUs = () => {
  return (
    <>
      <HeroAbout />
      <MissionVision />
      <OrganizationalValues />
      <Team />
      <PresidentMessage />
    </>
  );
};