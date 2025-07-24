import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
// import { ThemeProvider } from './context/ThemeContext';
// import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/home/Home';
import { Footer } from './components/layout/Footer';
import { Who_We_Are } from './pages/who_we_are/Who_We_Are';
import { Our_Vision } from './pages/our_vision/Our_Vision';
import { Our_Values } from './pages/our_values/Our_Values';
import { Green_Spaces } from './pages/community_spaces/green_spaces/Green_Spaces';
import { Barbecue_Area } from './pages/community_spaces/barbecue_area/Barbecue_Area';
import { Swimming_Pool_Changing_Rooms } from './pages/community_spaces/swimming_pool_changing_rooms/Swimming_Pool_Changing_Rooms';
import { Gym } from './pages/community_spaces/gym/Gym';
import { Coffee } from './pages/community_spaces/coffee/Coffee';
import { Event_Hall } from './pages/community_spaces/event_hall/Event_Hall';
import { Conference_Room } from './pages/community_spaces/conference_room/Conference_Room';
import { Inn } from './pages/community_spaces/inn/Inn';
import { Dining_Hall_Kitchen } from './pages/community_spaces/dining_hall_kitchen/Dining_Hall_Kitchen';
import { Recording_Studio } from './pages/community_spaces/recording_studio/Recording_Studio';
import { Corporate_Allies } from './pages/corporate_allies/Corporate_Allies';
import { Contact } from './pages/contact/Contact';
import { Programs } from './pages/strategic_projects/programs/Programs';
import { Current_Agreements } from './pages/strategic_projects/current_agreements/current_agreements';
import { Donations } from './pages/donations/Donations';
import { Donation_Form } from './pages/donations/Donation_Form';


const App: React.FC = () => {
  return (
    // <LanguageProvider>
    //   <ThemeProvider>
        <Router>
          <div>
            <Navbar/>
            <main>
            <Routes>
                <Route path="/" element={<Home/>} />
                
                {/* Nuestra identidad */}
                <Route path="/identidad/quienes-somos" element={<Who_We_Are/>} />
                <Route path="/identidad/nuestra-vision" element={<Our_Vision/>} />
                <Route path="/identidad/nuestros-valores" element={<Our_Values/>} />
                
                {/* Proyectos estratégicos */}
                <Route path="/proyectos/programas" element={<Programs />} />
                <Route path="/proyectos/convenios" element={<Current_Agreements/>} />
                
                {/* Espacios comunitarios */}
                <Route path="/espacios/areas-verdes" element={<Green_Spaces/>} />
                <Route path="/espacios/quincho" element={<Barbecue_Area/>} />
                <Route path="/espacios/pileta-vestuarios" element={<Swimming_Pool_Changing_Rooms/>} />
                <Route path="/espacios/gym" element={<Gym/>} />
                <Route path="/espacios/cafe" element={<Coffee/>} />
                <Route path="/espacios/salon-eventos" element={<Event_Hall/>} />
                <Route path="/espacios/salon-conferencia" element={<Conference_Room/>} />
                <Route path="/espacios/posada" element={<Inn/>} />
                <Route path="/espacios/comedor-cocina" element={<Dining_Hall_Kitchen/>} />
                <Route path="/espacios/estudio" element={<Recording_Studio/>} />
                
                {/* Otras páginas */}
                <Route path="/aliados" element={<Corporate_Allies />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/donar" element={<Donations />} />
                <Route path="/donacion" element={<Donation_Form />} />
              </Routes>
            </main>
            <Footer/>
          </div>
        </Router>
    //   </ThemeProvider>
    // </LanguageProvider>
  );
};

export default App;
