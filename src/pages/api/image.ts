import { DiskCache, imageLoader } from 'remix-image/server';

const config = {
  cache: new DiskCache(),
  selfUrl: 'http://localhost:3000'
};

const loader = (request: any) => {
  return imageLoader(config, request);
};

export default loader;
