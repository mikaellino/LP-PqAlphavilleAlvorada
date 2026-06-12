export type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  note: string;
  width: number;
  height: number;
  className: string;
};

export const galleryItems: GalleryItem[] = [
  {
    src: '/images/praca-travessia-clean.webp',
    alt: 'Praça Travessia com área de piquenique cercada por paisagismo',
    title: 'Praça Travessia',
    note: 'Perspectiva ilustrada · Área de piquenique',
    width: 1600,
    height: 742,
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    src: '/images/parque-linear-fitness-clean.webp',
    alt: 'Área fitness ao ar livre integrada ao parque linear',
    title: 'Parque linear',
    note: 'Perspectiva ilustrada · Fitness',
    width: 1600,
    height: 613,
    className: 'md:col-span-5',
  },
  {
    src: '/images/ciclovia.webp',
    alt: 'Ciclovia arborizada ao lado de via do bairro planejado',
    title: 'Ciclovia',
    note: 'Perspectiva ilustrada',
    width: 1600,
    height: 792,
    className: 'md:col-span-5',
  },
  {
    src: '/images/parque-linear.webp',
    alt: 'Parque linear arborizado com espaços de convivência',
    title: 'Natureza no cotidiano',
    note: 'Perspectiva ilustrada · Parque linear',
    width: 1600,
    height: 737,
    className: 'md:col-span-4',
  },
  {
    src: '/images/churrasqueira.webp',
    alt: 'Espaço de churrasqueira com mesas e integração ao jardim',
    title: 'Churrasqueira',
    note: 'Perspectiva ilustrada · Terras Alpha Alvorada 1',
    width: 1600,
    height: 844,
    className: 'md:col-span-4',
  },
  {
    src: '/images/piscina.webp',
    alt: 'Piscina do residencial com vista para o paisagismo',
    title: 'Piscina',
    note: 'Perspectiva ilustrada · Terras Alpha Alvorada 1',
    width: 1600,
    height: 1394,
    className: 'md:col-span-4',
  },
  {
    src: '/images/portaria.webp',
    alt: 'Portaria contemporânea do residencial',
    title: 'Portaria',
    note: 'Perspectiva ilustrada',
    width: 1600,
    height: 1307,
    className: 'md:col-span-6',
  },
  {
    src: '/images/clube.webp',
    alt: 'Vista aérea ilustrada do clube com piscina e áreas verdes',
    title: 'Clube',
    note: 'Perspectiva aérea ilustrada · Terras Alpha Alvorada 2',
    width: 1600,
    height: 800,
    className: 'md:col-span-6',
  },
  {
    src: '/images/salao-festas.webp',
    alt: 'Salão de festas com amplas aberturas para o jardim',
    title: 'Salão de festas',
    note: 'Perspectiva ilustrada',
    width: 1600,
    height: 1370,
    className: 'md:col-span-6',
  },
  {
    src: '/images/academia.webp',
    alt: 'Academia equipada com vista para as áreas verdes',
    title: 'Academia',
    note: 'Perspectiva ilustrada',
    width: 1600,
    height: 1378,
    className: 'md:col-span-6',
  },
];
