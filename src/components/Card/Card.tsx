import clsx from 'clsx';

import { CardPropsType } from '@/types/CardType';

import Image from '../Image/Image';
import styles from './Card.module.css';

const Card = ({ className, description, image, logo, title }: CardPropsType) => {
  return (
    <div className={clsx(styles.Card, className)}>
      <figure className='relative aspect-[398/299]'>
        {image ? (
          <Image alt={image?.alt} height={500} src={image?.filename} width={500} />
        ) : (
          <Image alt='certificate' height={500} src='/400.svg' width={500} />
        )}
      </figure>

      <div className='flex mt-5 gap-4'>
        {logo && (
          <div className='relative w-[40px] h-[40px] '>
            <Image alt={logo?.alt} className='object-contain' height={40} src={logo?.filename} width={40} />
          </div>
        )}
        <div>
          {title && <p className='text-white font-semibold'>{title}</p>}
          {description && <p className=' text-sm font-medium text-[#707586]'>{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
