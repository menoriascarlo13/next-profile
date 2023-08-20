import { Url } from 'url';

export type LinkType = {
  cached_url?: string | Url;
  target?: string;
  url?: string | Url;
};

export type LinksDataType = {
  _uid?: string;
  label?: string;
  link: LinkType;
};

export type LinksPropsType = {
  className?: string;
  data?: LinksDataType[] | LinksDataType;
  variant?: 'primary' | 'secondary';
};
