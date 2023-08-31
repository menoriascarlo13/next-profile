/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/naming-convention */
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await res.revalidate('/');

    return res.status(200).send('Success!');
  } catch (err) {
    console.log(`Error at Storyblok Revalidation: ${err}`);

    return res.status(403).send('Forbidden');
  }
}
