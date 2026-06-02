// ═══════════════════════════════════════════════════════════════
//  INSTRUCCIONES DE INTEGRACIÓN
// ═══════════════════════════════════════════════════════════════

// ── 1. ESTRUCTURA FINAL DE ARCHIVOS ──────────────────────────
//
// src/features/donations/
// ├── DonationsPage.tsx
// ├── config/
// │   └── paymentLinks.ts
// └── components/
//     ├── DonationHero.tsx
//     ├── DonationCategorySelector.tsx
//     ├── AcademyDonationPanel.tsx
//     ├── GeneralDonationPanel.tsx
//     ├── DonationForm.tsx
//     ├── AmountSelector.tsx
//     ├── FrequencySelector.tsx
//     ├── PaymentMethodSelector.tsx
//     ├── BankTransferInfo.tsx
//     └── DonationImpactSummary.tsx
//
// src/i18n/locales/
// ├── es/donations.json   ← contenido de es_donations.json
// ├── en/donations.json   ← contenido de en_donations.json
// └── pt/donations.json   ← contenido de pt_donations.json

// ── 2. REGISTRAR NAMESPACE EN i18n/index.ts ──────────────────
//
// Agregar las importaciones:
//   import esDonations from './locales/es/donations.json';
//   import enDonations from './locales/en/donations.json';
//   import ptDonations from './locales/pt/donations.json';
//
// Y en el objeto resources:
//   es: { common: esCommon, home: esHome, donations: esDonations },
//   en: { common: enCommon, home: enHome, donations: enDonations },
//   pt: { common: ptCommon, home: ptHome, donations: ptDonations },
//
// Y en el array ns:
//   ns: ['common', 'home', 'donations'],

// ── 3. AGREGAR RUTA EN router.tsx ────────────────────────────
//
// import { DonationsPage } from '../features/donations/DonationsPage'
//
// Agregar dentro del array children:
//   { path: 'donaciones', Component: DonationsPage },

// ── 4. AGREGAR LINK EN NAVBAR ────────────────────────────────
//
// En src/constants/navigation.ts, asegurarse de que exista:
//   { key: 'donate', url: '/donaciones' }
//
// (El botón "Donar" del Navbar ya linkea a "/donar" — cambiar
//  a "/donaciones" o mantener según preferencia)

// ── 5. CREAR ARCHIVO .env ────────────────────────────────────
//
// En la raíz del proyecto crear .env:
//
//   VITE_STRIPE_ACADEMY_ONCE=https://buy.stripe.com/TU_LINK
//   VITE_STRIPE_ACADEMY_MONTHLY=https://buy.stripe.com/TU_LINK
//   VITE_STRIPE_SOLIDARITY_ONCE=https://buy.stripe.com/TU_LINK
//   VITE_STRIPE_SOLIDARITY_MONTHLY=https://buy.stripe.com/TU_LINK
//   VITE_MP_ACADEMY=https://mpago.la/TU_LINK
//   VITE_MP_SOLIDARITY=https://mpago.la/TU_LINK
//
// Asegurarse de que .env esté en .gitignore

// ── 6. CREAR CUENTA EN STRIPE ────────────────────────────────
//
// 1. Ir a stripe.com → Create account
// 2. Completar el proceso de verificación de la asociación civil
//    (necesitarás el CUIT/CUIL y documentación)
// 3. Dashboard → Payment Links → Create Link
//    - Tipo: One-time para "Una vez"
//    - Tipo: Recurring para "Mensual"
//    - Ajustar descripción: "Donación Academia Valores Sinaí"
//    - URL de éxito: https://tu-dominio.com/donaciones?success=true
//    - URL de cancelación: https://tu-dominio.com/donaciones
// 4. Repetir para cada combinación (4 links)

// ── 7. CREAR CUENTA EN MERCADO PAGO ─────────────────────────
//
// 1. Ir a mercadopago.com.ar → Crear cuenta empresarial
// 2. Completar verificación
// 3. Panel → Herramientas → Crear link de pago
//    - Nombre: "Donación Academia Valores Sinaí"
//    - El Checkout Pro incluye automáticamente: tarjetas AR, Pix (BR), etc.
// 4. Repetir para el Fondo Solidario

// ── 8. PÁGINA DE ÉXITO (OPCIONAL PERO RECOMENDADO) ──────────
//
// Crear src/features/donations/DonationSuccessPage.tsx
// que muestre un mensaje de agradecimiento cuando la URL
// contenga ?success=true (Stripe lo agrega automáticamente).
//
// Ejemplo:
//   const isSuccess = new URLSearchParams(location.search).get('success');
//   if (isSuccess) return <DonationSuccessPage />;

//export {};