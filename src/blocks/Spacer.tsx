import { storyblokEditable } from '@storyblok/react';

const Spacer = ({ blok }: any) => <div {...storyblokEditable(blok)} className='h-20' />;

export default Spacer;
