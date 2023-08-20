import { storyblokEditable } from '@storyblok/react';

import Button from '@/components/Button/Button';
import Headline from '@/components/Headline/Headline';
import Links from '@/components/Links/Links';

const Stylesheet = ({ blok }: any) => {
  const DUMMYLINK_DATA = [{ _uid: 'test', label: 'CALL TO ACTION', link: { url: '#' } }];

  return (
    <div {...storyblokEditable(blok)}>
      <Headline blok={blok}>
        <h1>Stylesheet</h1>
      </Headline>
      <section className='container'>
        <div>
          <h3>Typography</h3>
          <h1>h1 The quick brown fox jumps over the lazy dog</h1>
          <h2>h2 The quick brown fox jumps over the lazy dog</h2>
          <h3>h3 The quick brown fox jumps over the lazy dog</h3>
          <h4>h4 The quick brown fox jumps over the lazy dog</h4>
          <h5>h5 The quick brown fox jumps over the lazy dog</h5>
          <p>paragraph The quick brown fox jumps over the lazy dog</p>
        </div>
      </section>
      <section className='container mt-10'>
        <h3>Buttons</h3>
        <div className='flex gap-4'>
          <Button label='Button Primary' variant='primary' />
          <Button label='Button Secondary' variant='secondary' />
        </div>
      </section>
      <section className='container mt-10'>
        <h3>Links</h3>
        <div className='flex gap-4'>
          <Links data={DUMMYLINK_DATA} />
        </div>
      </section>
      {/* <section className='container mt-10'>
        <h3>Inputs</h3>
        <div className='flex gap-4'>
          <Checkbox htmlFor='gdpr' label='Accept Data Collection' />
        </div>
      </section> */}
      {/* <section className='container mt-10'>
        <h3>Radio</h3>
        <div className='flex gap-4'>
          <Radio htmlFor='test' label='test' name='test' />
          <Radio htmlFor='test 2' label='test 2' name='test' />
          <Radio htmlFor='test 3' label='test 3' name='test' />
        </div>
      </section> */}
      {/* <section className='container mt-10'>
        <h3>Accordion</h3>
        <div className='w-1/2'>
          <Accordion />
        </div>
      </section> */}
    </div>
  );
};

export default Stylesheet;
