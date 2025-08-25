import React, { ReactElement,ReactNode } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './Footer.module.css';

type Footer={}
export const Footer:React.FC<Footer> = () => {
  return (
    <footer id='footer'>
    </footer>
  );
}