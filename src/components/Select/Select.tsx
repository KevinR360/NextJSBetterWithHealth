import React, { useState } from "react";
import { strings } from "../../res";

import { Container } from "./styles";

interface ISelectData {
  title: string;
  value: string;
}

interface ISelectProps {
  selected?: ISelectData;
  data: ISelectData[];
  onSelect: (el: ISelectData) => void;
}

const Select: React.FC<ISelectProps> = ({ data, onSelect, selected }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <Container
      type="button"
      showDropDown={showDropDown}
      onClick={() => setShowDropDown((state) => !state)}
    >
      <span>{selected?.title ? selected.title : strings.es.orderBy}</span>
      <i className={showDropDown ? "fa fa-angle-up" : "fa fa-angle-down"} />
      {showDropDown ? <div className="dropdown">
        <ul>
          {data.map((el) => (
            <li>
              <button type="button" onClick={async () => {
                await setShowDropDown(false);
                onSelect(el); 
                }}>
                {el.title}
              </button>
            </li>
          ))}
        </ul>
      </div> : null}
    </Container>
  );
};

export default Select;
