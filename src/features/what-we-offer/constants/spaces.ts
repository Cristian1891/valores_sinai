import type { TFunction } from 'i18next'
import type { EspacioCardProps } from '../types/what-we-offer'

export function getEspacios(t: TFunction): EspacioCardProps[] {
  return [
    {
      nombre:      t('spaces.items.posada.nombre'),
      descripcion: t('spaces.items.posada.descripcion'),
      imagen: '/img/mejores_fotos_posada/foto_posada_exterior.jpg',
      alt:    t('spaces.items.posada.alt'),
      tag:    t('spaces.tags.accommodation'),
    },
    {
      nombre:      t('spaces.items.dormitorios.nombre'),
      descripcion: t('spaces.items.dormitorios.descripcion'),
      imagen: '/img/mejores_fotos_dormitorios/habitaciones_3.jpg',
      alt:    t('spaces.items.dormitorios.alt'),
      tag:    t('spaces.tags.accommodation'),
    },
    {
      nombre:      t('spaces.items.casas.nombre'),
      descripcion: t('spaces.items.casas.descripcion'),
      imagen: '/img/mejores_fotos_casas_familiares/casas_predio.jpg',
      alt:    t('spaces.items.casas.alt'),
      tag:    t('spaces.tags.accommodation'),
    },
    {
      nombre:      t('spaces.items.comedor.nombre'),
      descripcion: t('spaces.items.comedor.descripcion'),
      imagen: '/img/mejores_fotos_comedor/foto_comedor_gente_7.jpg',
      alt:    t('spaces.items.comedor.alt'),
      tag:    t('spaces.tags.gastronomy'),
    },
    {
      nombre:      t('spaces.items.cafeteria.nombre'),
      descripcion: t('spaces.items.cafeteria.descripcion'),
      imagen: '/img/mejores_fotos_cafeteria/foto_cafe_interior.jpg',
      alt:    t('spaces.items.cafeteria.alt'),
      tag:    t('spaces.tags.gastronomy'),
    },
    {
      nombre:      t('spaces.items.quincho.nombre'),
      descripcion: t('spaces.items.quincho.descripcion'),
      imagen: '/img/mejores_fotos_quincho/quincho_interior_gente_3.jpg',
      alt:    t('spaces.items.quincho.alt'),
      tag:    t('spaces.tags.gathering'),
    },
    {
      nombre:      t('spaces.items.gimnasio.nombre'),
      descripcion: t('spaces.items.gimnasio.descripcion'),
      imagen: '/img/mejores_fotos_gym/valores_sinai_476968496_17863322796340943_8558766273241420023_n.jpg',
      alt:    t('spaces.items.gimnasio.alt'),
      tag:    t('spaces.tags.sport'),
    },
    {
      nombre:      t('spaces.items.pileta.nombre'),
      descripcion: t('spaces.items.pileta.descripcion'),
      imagen: '/img/mejores_fotos_pileta/pileta_gente_2.jpg',
      alt:    t('spaces.items.pileta.alt'),
      tag:    t('spaces.tags.sport'),
    },
    {
      nombre:      t('spaces.items.canchas.nombre'),
      descripcion: t('spaces.items.canchas.descripcion'),
      imagen: '/img/mejores_fotos_canchas/partido_voley_2.webp',
      alt:    t('spaces.items.canchas.alt'),
      tag:    t('spaces.tags.sport'),
    },
    {
      nombre:      t('spaces.items.paintball.nombre'),
      descripcion: t('spaces.items.paintball.descripcion'),
      imagen: '/img/mejores_fotos_paintball/IMG_4747.jpg',
      alt:    t('spaces.items.paintball.alt'),
      tag:    t('spaces.tags.sport'),
    },
    {
      nombre:      t('spaces.items.salon.nombre'),
      descripcion: t('spaces.items.salon.descripcion'),
      imagen: '/img/mejores_fotos_salon/salon_gente_4.webp',
      alt:    t('spaces.items.salon.alt'),
      tag:    t('spaces.tags.events'),
    },
    {
      nombre:      t('spaces.items.conferencias.nombre'),
      descripcion: t('spaces.items.conferencias.descripcion'),
      imagen: '/img/mejores_fotos_salas_conferencias/sala_conferencia_2.jpeg',
      alt:    t('spaces.items.conferencias.alt'),
      tag:    t('spaces.tags.events'),
    },
    {
      nombre:      t('spaces.items.rec.nombre'),
      descripcion: t('spaces.items.rec.descripcion'),
      imagen: '/img/mejores_fotos_rec_pilar/estudio_grabacion_1.jpg',
      alt:    t('spaces.items.rec.alt'),
      tag:    t('spaces.tags.multimedia'),
    },
    {
      nombre:      t('spaces.items.taller.nombre'),
      descripcion: t('spaces.items.taller.descripcion'),
      imagen: '/img/taller_oficios.png',
      alt:    t('spaces.items.taller.alt'),
      tag:    t('spaces.tags.training'),
    },
  ]
}

export function getServicios(t: TFunction): EspacioCardProps[] {
  return [
    {
      nombre:      t('spaces.items.dea.nombre'),
      descripcion: t('spaces.items.dea.descripcion'),
      imagen: '/img/fotos_desfibrilador/DEA.jpg',
      alt:    t('spaces.items.dea.alt'),
      tag:    t('spaces.tags.safety'),
      objectPosition: '75% 25%',
    },
    {
      nombre:      t('spaces.items.juridico.nombre'),
      descripcion: t('spaces.items.juridico.descripcion'),
      imagen: '/img/fotos_estudio_juridico/estudio_juridico.jpg',
      alt:    t('spaces.items.juridico.alt'),
      tag:    t('spaces.tags.services'),
    },
  ]
}