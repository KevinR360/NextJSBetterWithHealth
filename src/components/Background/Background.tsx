import React, { FC } from "react";

import { InputSearch } from "components";

import { Container, Header, Footer, Main } from "./styles";
import SEO from "../SEO";

interface ISEOProps {
  pageTitle: string;
  description: string;
  pageImage?: string;
  metaTags?: any;
}

interface IBackgroundProps extends ISEOProps {
  inputValue: string;
  inputPlaceholder: string;
  onSearch: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Background: FC<IBackgroundProps> = ({
  children,
  inputValue,
  inputPlaceholder,
  onSearch,
  onChange,
  pageTitle,
  description,
  metaTags,
}) => {
  return (
    <>
    <SEO
        pageTitle={pageTitle}
        description={description}
        metaTags={metaTags}
      />
    <Container>
      <Header>
        <div className="headerContent">
          <h1>Mejor con Salud</h1>
          <div>
            <InputSearch
              onSearch={onSearch}
              onChange={onChange}
              value={inputValue}
              placeholder={inputPlaceholder}
            />
          </div>
        </div>
      </Header>
      <Main>
        <div className="mainContent">{children}</div>
      </Main>
      <Footer>
        <span>Development by Kevin Richard</span>
      </Footer>
    </Container>
    </>
  );
};

export default Background;
