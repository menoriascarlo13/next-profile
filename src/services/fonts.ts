/* eslint-disable import/prefer-default-export */
import { Figtree } from 'next/font/google';
import localFont from 'next/font/local';

export const figtree = Figtree({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-figtree'
});

export const anicons = localFont({
  display: 'swap',
  src: '../fonts/Anicons_webfont_kit/AniconsGX.ttf',
  variable: '--font-anicons'
});
