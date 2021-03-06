import React from 'react';
import { motion } from 'framer-motion';

const HeroSvg = () => (
  <svg
    width='310'
    height='258'
    viewBox='0 0 310 258'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 252.531C-1.34769e-07 256.694 4.79082 259.034 8.07427 256.474L166.292 133.122C168.859 131.12 168.859 127.237 166.292 125.235L8.07428 1.88296C4.79084 -0.676941 8.12056e-06 1.66274 7.98579e-06 5.82617L6.46089e-06 52.9349C6.41101e-06 54.4759 0.710503 55.9307 1.92573 56.8781L89.6038 125.235C92.1714 127.237 92.1714 131.12 89.6038 133.122L1.92573 201.479C0.710499 202.426 1.57478e-06 203.881 1.5249e-06 205.422L0 252.531Z'
      fill='#C4C4C4'
    />
    <motion.rect
      x='168'
      y='212'
      width='142'
      height='46'
      rx='5'
      fill='#C4C4C4'
      initial={{ opacity: 0.2 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.1, loop: Infinity }}
    />
  </svg>
);

export default HeroSvg;
