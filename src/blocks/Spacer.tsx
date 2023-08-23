import { storyblokEditable } from '@storyblok/react';

const Spacer = ({ blok }: any) => <div {...storyblokEditable(blok)} className=' h-10 md:h-20' />;

export default Spacer;
