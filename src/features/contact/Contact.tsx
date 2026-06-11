import { ContactForm } from "./components/ContactForm";
import { ContactHero } from "./components/ContactHero";
import { ContactMethods } from "./components/ContactMethods";

export const Contact = () => {
  return (
    <>
      <ContactHero />
      <ContactForm/>
      <ContactMethods />
    </>
  );
};