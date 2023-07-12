import { FC, ReactNode } from 'react';

import Head from 'next/head';
import styled from 'styled-components';
import { Header } from '../Header';

interface IMainLayout {
  title: string;
  desc: string;
  children: ReactNode;
}

const Main = styled.main``;

export const MainLayout: FC<IMainLayout> = ({ title, desc, children }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta name="keywords" content="content" />
      </Head>
      <Header />
      <Main>{children}</Main>
    </>
  );
};
