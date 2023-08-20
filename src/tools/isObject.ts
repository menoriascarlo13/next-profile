const isObject = (value: any): Boolean => {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
};

export default isObject;
