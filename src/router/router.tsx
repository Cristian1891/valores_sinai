import { createBrowserRouter } from 'react-router'
import { Layout } from '../components/layout/Layout'
import { Home } from '../features/home/Home'
import { AboutUs } from '../features/about-us/AboutUs'
import { Academy } from '../features/academy/Academy'
import { Contact } from '../features/contact/Contact'
import { WhatWeOffer } from '../features/what-we-offer/WhatWeOffer'
import { DonationsPage } from '../features/donate/DonationsPage'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'quienes-somos', Component: AboutUs },
      { path: 'academia', Component: Academy },
      { path: 'que-ofrecemos', Component: WhatWeOffer },
      { path: 'donar', Component: DonationsPage },
      { path: 'contacto', Component: Contact }
    ]
  }
])
