import React, { FC } from "react";

import { Container } from "./styles";

interface IPaginateProps {
  currentPage: number;
  totalPages: number;
  nextPage: () => void;
  previousPage: () => void;
}

const Paginate: FC<IPaginateProps> = ({ currentPage, totalPages, nextPage, previousPage }) => {
  return (
    <Container>
      <button type="button" disabled={!(currentPage > 1)} onClick={previousPage} className="previosButton">
        <i className="fa fa-chevron-left" />
      </button>
      <div>
          <span>{String(currentPage)}</span>
      </div>
      <button type="button" disabled={!(currentPage < totalPages)} onClick={nextPage} className="nextButton">
        <i className="fa fa-chevron-right" />
      </button>
    </Container>
  );
};

export default Paginate;
