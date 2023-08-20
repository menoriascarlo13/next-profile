import { BRAND_NAME } from '@/configs/const';
import Consoler from '@/services/consoler';

const getHeadTitleResolver = ({ pageProps }: any): string => {
  try {
    const { story } = pageProps;

    return `${story.name}`;
  } catch (error) {
    Consoler({
      message: `Unable to process handling head title resolver throwing default head title instead => ${BRAND_NAME}: ${JSON.stringify(
        error
      )}`,
      type: 'info'
    });

    return BRAND_NAME;
  }
};

export default getHeadTitleResolver;
