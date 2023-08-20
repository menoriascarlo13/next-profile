import { EnvironmentType } from '@/types/EnvironmentType';

import { LinkType } from './Links';

export type MenuListPropsType = {
  content: {
    header_menu: {
      _uid: string;
      environment: EnvironmentType;
      label: string;
      link: LinkType;
    }[];
  };
};
