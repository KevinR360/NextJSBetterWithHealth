import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { FC, useCallback, useEffect, useState } from "react";
import api from 'services/api';
import { Background } from 'components';
import { Container } from 'styles/page/Post.styles';
import { pushToUrl } from "../../utils/pushToUrl";
import { strings } from "../../res";

interface IPushToUrl {
  valueSearch?: string;
  goToPage?: number;
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
  content: JSX.Element;
  categories: ICategory[];
  metas: any;
}

interface IPostProps {
  post: IPost;
}

const Post: FC<IPostProps> = ({ post }) => {
  const [value, setValue] = useState("");
  
  const route = useRouter();
  
  console.log(route, post);

  const handleToUrl = useCallback(
    ({ valueSearch = "", goToPage = 0 }: IPushToUrl) => {
      route.push(pushToUrl({valueSearch, goToPage}));
    },
    []
  );

  return (
    <Background
      pageTitle={post && post.title ? post.title : null}
      description={post && post.headline ? post.headline : null}
      metaTags={post && post.metas ? post.metas : null}
      inputPlaceholder={strings.es.search}
      inputValue={value}
      onChange={e => setValue(e.target.value)}
      onSearch={() => handleToUrl({ valueSearch: value })}
    >

    <Container>
      {post && post.title ? <h1 className="titlePost">{post.title}</h1> : null }
      {post && post.content && String(post?.content)?.length ?  <div dangerouslySetInnerHTML={{ __html : `${post.content}`}} /> : null}
    </Container>
    </Background>
  );
}

export default Post;

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { data: posts },
  } = await api.get(`wp-json/mc/v2/posts?per_page=6`);

  const paths =  posts.map(post => {
    return {
      params: { slug: String(post.id) }
    }
  });

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<IPostProps> = async (context) => {

  const { slug } = context.params;

  const { data } = await api.get(`wp-json/mc/v1/posts/${slug}`);

  return {
    props: {
      post: data,
    },
    revalidate: 60,
  };
}
