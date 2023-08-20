import React from 'react';

type SizeSelectorPropType = {
  className: string;
  dataValue: string;
  name: string;
  sizeSelectClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  sizeValue: string;
};

const SizeSelector = ({ className, dataValue, name, sizeSelectClick, sizeValue }: SizeSelectorPropType) => (
  <button
    className={className}
    data-value={dataValue}
    name={name}
    onClick={sizeSelectClick}
    type='button'
    value={sizeValue}
  >
    {name}
  </button>
);

export default SizeSelector;
