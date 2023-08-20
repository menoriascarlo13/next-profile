import { CustomDataReturnType } from '@/types/CustomDataTypes';

export type PagePropType = {
  cookies: any;
  hasCookies: boolean;
  hasQuery: boolean;
  header: any;
  prop?: CustomDataReturnType;
  story?: any;
  storyKey: number;
};
