import localFont from 'next/font/local';

const helvetica = localFont({
  src: [
    {
      path: '../assets/fonts/helvetica/Helvetica-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica/Helvetica-BoldOblique.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../assets/fonts/helvetica/Helvetica-Oblique.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../assets/fonts/helvetica/Helvetica.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica/helvetica-compressed-5871d14b6903a.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica/helvetica-light-587ebe5a59211.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../assets/fonts/helvetica/helvetica-rounded-bold-5871d05ead8de.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  variable: '--font-helvetica',
});

export default helvetica;
