/* eslint-disable func-names */
/* eslint-disable camelcase */
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { FormEvent, MouseEvent, useCallback, useContext, useMemo, useState } from 'react';
import Swiper, { Controller, Navigation } from 'swiper';

import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs';
import Button from '@/components/Button/Button';
import Carousel from '@/components/Carousel/Carousel';
import Image from '@/components/Image/Image';
import RelatedProducts from '@/components/RelatedProducts/RelatedProducts';
import SizeSelector from '@/components/SizeSelector/SizeSelector';
import { ProductService } from '@/context/ProductService';
import ArrowLeft from '@/icons/ArrowLeft';
import Loader from '@/icons/Loader';
import getProductBreadcrumbs from '@/tools/getProductBreadcrumbs';
import { CentraProductSizeType } from '@/types/CentraProductType';

import styles from './SelectedProduct.module.css';

const SelectedProduct = () => {
  const {
    addToCart,
    cart,
    centra: { product }
  } = useContext(ProductService);

  const {
    categories,
    description,
    items,
    media,
    name,
    price,
    priceBeforeDiscount,
    relatedProducts,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    sh_swatch,
    showAsOnSale
  } = product;
  const router = useRouter();
  const [currentSize, setCurrentSize] = useState<string>('');

  const [isSizeRequired, setIsSizeRequired] = useState(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<Swiper>();

  const [firstSwiper, setFirstSwiper] = useState(null);

  const categoryList = useMemo(() => getProductBreadcrumbs(categories), [categories]);

  const sizeSelectClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setCurrentSize(e.currentTarget.dataset.value as string);
  };

  const formSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentSize.length !== 0) {
      cart({ item: currentSize, quantity: 1 });
    } else {
      setIsSizeRequired(true);
    }

    // setIsAddingItems(true);

    // if (currentSize) {
    //   await fetch('/api/centra/cart', {
    //     body: JSON.stringify({
    //       action: 'adding',
    //       size: currentSize
    //     }),
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST'
    //   })
    //     .then((response) => response.json())
    //     .then((data) => {
    //       const { totals } = data;
    //       setItemTotalQuantity(totals.totalQuantity);
    //       setTimeout(() => {
    //         setIsAddingItems(false);
    //       }, 2000);
    //       setIsSizeRequired(false);
    //     })
    //     .catch((error) => {
    //       // eslint-disable no-console
    //       console.log('Unable to add product', error);

    //       return error;
    //     });
    // } else {
    //   setIsSizeRequired(true);
    // }
  };

  const thumbHandler: any = useCallback((e: Swiper) => setThumbsSwiper(e), [setThumbsSwiper]);

  return (
    <>
      <section className={styles.Container}>
        <button className={styles.BackButton} onClick={() => router.back()} type='button'>
          <ArrowLeft />
          Back
        </button>
      </section>
      <section className={styles.SelectedProduct}>
        <div className={styles.Image}>
          {media.standard ? (
            <>
              <Carousel
                className={styles.Carousel}
                controller={{ control: thumbsSwiper }}
                initialSlide={0}
                modules={[Controller, Navigation]}
                navigation
                onSwiper={setFirstSwiper}
                pagination={{ clickable: true }}
                slidesPerView='auto'
                speed={500}
              >
                {media.standard.map((array: Element, index: number) => (
                  <figure key={media.standard[index]}>
                    <Image alt={name} height={500} src={media.standard[index]} width={500} />
                  </figure>
                ))}
              </Carousel>
              {/* <Thumbnail media={media} setThumbnail={thumbHandler} /> */}
              {media.standard.length > 1 && (
                <div className={styles.Thumbnail}>
                  <Carousel
                    className={`swiper-slide-image-w-auto ${styles.Carousel}`}
                    controller={{ control: firstSwiper }}
                    initialSlide={0}
                    modules={[Controller]}
                    onSwiper={thumbHandler}
                    slidesPerView='auto'
                    speed={500}
                  >
                    {media.standard.map((array: Element, index: number) => (
                      <figure key={media.standard[index]}>
                        <Image alt='test' height={500} src={media.standard[index]} width={500} />
                      </figure>
                    ))}
                  </Carousel>
                </div>
              )}
            </>
          ) : (
            <figure>
              <Image alt={name} />
            </figure>
          )}
        </div>
        <div className={styles.Form}>
          <form onSubmit={formSubmitHandler}>
            <Breadcrumbs links={categoryList} slug='/c/' />
            <div className={styles.ProductInfo}>
              {name && <h1 className={styles.Title}>{name}</h1>}

              {description && <p>{description}</p>}

              {!!sh_swatch && (
                <div className='flex items-center justify-center gap-2'>
                  <p className={styles.Title}>Color: </p>
                  <div className={styles.Color}>
                    <div className={styles.ColorItem} style={{ color: sh_swatch.hex }} />
                  </div>
                </div>
              )}

              {items?.length > 0 && (
                <div>
                  <div className='flex items-center justify-center gap-2'>
                    <p className={styles.Title}>Sizes: </p>

                    <div className={styles.Sizes}>
                      {items.map(({ item, name: itemName, sizeId }: CentraProductSizeType) => (
                        <SizeSelector
                          key={sizeId}
                          className={clsx('button', styles.SizeButton, {
                            [styles.SizeButton__Active]: item === currentSize
                          })}
                          dataValue={item}
                          name={itemName}
                          sizeSelectClick={sizeSelectClickHandler}
                          sizeValue={item}
                        />
                      ))}
                    </div>
                  </div>
                  {isSizeRequired && <p className={styles.Required}>*Size is Required</p>}
                </div>
              )}

              <div className={styles.PriceInfo}>
                <p className={clsx({ [styles.Sale]: showAsOnSale })}>{price}</p>
                {showAsOnSale && (
                  <p className={clsx({ [styles.Strikethrough]: showAsOnSale })}>{priceBeforeDiscount}</p>
                )}
              </div>

              <Button
                className={clsx('button-cart', addToCart && 'active')}
                disabled={addToCart}
                type='submit'
                variant='primary'
              >
                {addToCart ? (
                  <>
                    <Loader className='w-5 h-5' /> <span>Adding</span>
                  </>
                ) : (
                  'Add to Cart'
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
      {relatedProducts.length > 0 && <RelatedProducts relatedProducts={relatedProducts} />}
    </>
  );
};

export default SelectedProduct;
