import { createBrowserRouter } from 'react-router'
import { Layout } from '../components/layout/Layout'
// import { Home } from '../features/home/Home'
// import { AboutUs } from '../features/about-us/AboutUs'
// import { Academy } from '../features/academy/Academy'
// import { Contact } from '../features/contact/Contact'
// import { WhatWeOffer } from '../features/what-we-offer/WhatWeOffer'
// import { DonationsPage } from '../features/donate/DonationsPage'

import { lazy, type ComponentType } from 'react'
import { NotFound } from '../components/errors/NotFound';
function lazyPage<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>
): React.LazyExoticComponent<T> {
  return lazy(importFn);
}

const Home = lazyPage(() =>
  import('../features/home/Home').then((m) => ({ default: m.Home }))
);

const AboutUs = lazyPage(() =>
  import('../features/about-us/AboutUs').then((m) => ({ default: m.AboutUs }))
);

const Academy = lazyPage(() =>
  import('../features/academy/Academy').then((m) => ({ default: m.Academy }))
);

const WhatWeOffer = lazyPage(() =>
  import('../features/what-we-offer/WhatWeOffer').then((m) => ({ default: m.WhatWeOffer }))
);

const DonationsPage = lazyPage(() =>
  import('../features/donate/DonationsPage').then((m) => ({ default: m.DonationsPage }))
);

const Contact = lazyPage(() =>
  import('../features/contact/Contact').then((m) => ({ default: m.Contact }))
);

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
      { path: 'contacto', Component: Contact },
      { path: '*', Component: NotFound }
    ]
  }
])
