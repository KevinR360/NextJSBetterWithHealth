import React, { FC, useCallback, useEffect, useState } from "react";
import api from "services/api";

import { NewsCard, Background, Paginate, Select } from "components";
import { useRouter } from "next/router";
import { Container } from "../styles/page/Home.styles";
import { GetServerSideProps } from "next";
import { pushToUrl } from "../utils/pushToUrl";
import { strings } from "../res";

export interface IPushToUrl {
  valueSearch?: string;
  goToPage?: number;
  orderBy?: string;
}

interface ICategory {
  id: number | string;
  name: string;
  slug: string;
  description: string;
}

interface IPost {
  id: number;
  title: string;
  slug: string;
  headline: string;
  featured_media: {
    thumbnail: string;
    medium: string;
  };
  categories: ICategory[];
}

interface IHomeProps {
  posts: IPost[];
  pages: number;
}

const Home: FC<IHomeProps> = ({ posts, pages: totalPages }) => {
  // const [postsArray, setPostsArray] = useState<IPost[]>([]);
  const [value, setValue] = useState("");
  const route = useRouter();
  const { page, search, orderby } = route.query;

  const orderBy = [
    {
      title: strings.es.author,
      value: "author",
    },
    {
      title: strings.es.relevance,
      value: "relevance",
    },
    {
      title: strings.es.byDate,
      value: "date",
    },
  ];

  const currentPage = page ? Number(page) : 1;

  const handleToUrl = useCallback(
    ({ valueSearch = "", goToPage = 0, orderBy = '' }: IPushToUrl) => {
      route.push(pushToUrl({ valueSearch, goToPage, orderBy }));
    },
    []
  );

  return (
    <Background
      inputPlaceholder={strings.es.search}
      inputValue={value}
      onChange={(e) => setValue(e.target.value)}
      onSearch={() => {
        handleToUrl({ valueSearch: value });
      }}
      pageTitle={strings.es.siteName}
      description={strings.es.siteDescription}
    >
      <Container>
        <div className="selectOrder">
          <Select
            data={orderBy}
            onSelect={(el) => {
              handleToUrl({ valueSearch: value, goToPage: 1, orderBy: el.value });}
            }
          />
        </div>
        <ul className="ItemsList">
          {posts.length ? (
            posts.map((post, index) => (
              <NewsCard
                key={String(index)}
                title={post.title}
                headLine={post.headline}
                img={post.featured_media.medium}
                categories={post.categories}
                link={`/Posts/${post.id}`}
              />
            ))
          ) : (
            <div className="emptyData">
              <h1>{strings.es.emptySearch}</h1>
            </div>
          )}
        </ul>
        <Paginate
          currentPage={currentPage}
          totalPages={totalPages}
          previousPage={() =>
            handleToUrl({ valueSearch: value, goToPage: currentPage - 1 })
          }
          nextPage={() => {
            handleToUrl({ valueSearch: value, goToPage: currentPage + 1 });
          }}
        />
      </Container>
    </Background>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps<IHomeProps> = async ({
  query,
}) => {
  const { search, page, orderby } = query;

  const searchQuery = search ? `search=${search}&` : "";

  const pageQuery = page ? `page=${page}&` : "";
  
  const orderQuery = orderby ? `orderby=${orderby}&` : "";

  const { data } = await api.get(
    `/wp-json/mc/v2/posts?${searchQuery}${pageQuery}${orderQuery}per_page=12`
  );

  return {
    props: {
      posts: data.data,
      pages: data.pages,
    },
  };
};
