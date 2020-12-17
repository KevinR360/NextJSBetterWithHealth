// import Link from 'next/link';
import React, { FC ,InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onSearch: () => void;
}

const InputSearch: FC<InputSearchProps> = ({ value, onChange, placeholder, onSearch ,...rest }) => {
  return (
    <Container>
      <input type="text" {...rest} placeholder={placeholder} value={value} onChange={onChange} />
      <button type="button" onClick={onSearch}>
        <i className="fa fa-search" />
      </button>
    </Container>
  );
}

export default InputSearch;