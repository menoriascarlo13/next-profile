// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

import getItems from '../../../services/endpoints/getItems';

type CartResponseType = {
  discounts: {
    anyDiscount: boolean;
    automaticDiscounts?: string[];
    discount: string;
    discountAsNumber: number;
  };
  items: [];
  totals: {
    grandTotalPrice: string;
    grandTotalPriceAsNumber: number;
    grandTotalPriceTax: string;
    grandTotalPriceTaxAsNumber: number;
    handlingCostAddedToShippingPrice: boolean;
    itemsTotalPrice: string;
    itemsTotalPriceAsNumber: number;
    shippingPrice: string;
    shippingPriceAsNumber: number;
    taxAdded: boolean;
    taxAddedAsNumber: boolean;
    taxDeducted: boolean;
    taxDeductedAsNumber: boolean;
    taxPercent: number;
    totalDiscountPrice: boolean;
    totalDiscountPriceAsNumber: boolean;
    totalQuantity: number;
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<CartResponseType>) {
  const { body } = req;
  const { item, quantity } = JSON.parse(body);
  const apiKey = process.env.NEXT_PUBLIC_CHECKOUT_API_KEY;

  const { selection } = (await getItems({
    apiKey,
    cookies: req.cookies,
    item,
    quantity
  })) as { selection: CartResponseType };

  const { discounts, items, totals } = selection;

  res.status(200).json({
    discounts: {
      anyDiscount: false,
      automaticDiscounts: undefined,
      discount: '',
      discountAsNumber: 0
    },
    ...discounts,
    items,
    ...totals,
    totals
  });
}
