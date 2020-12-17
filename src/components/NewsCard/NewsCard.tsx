import React, { FC } from "react";
import Link from "next/link";

import { Container } from "./styles";

interface ICategory {
  id: number | string;
  name: string;
  slug: string;
  description: string;
}

interface INewsCardProps {
  title: string;
  img: string;
  headLine: string;
  link: string;
  categories: ICategory[];
}

const NewsCard: FC<INewsCardProps> = ({
  title,
  img,
  headLine,
  link,
  categories,
}) => {
  const { name: nameCategory } = categories.find((el) => el);

  return (
    <Link href={link}>
      <Container>
        <figure>
          <img src={img} alt={title} />
        </figure>
        <div>
          {nameCategory ? <h3>{nameCategory}</h3> : null}
          <p>{headLine}</p>
        </div>
      </Container>
    </Link>
  );
};

export default NewsCard;
