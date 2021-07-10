import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';
import styled from 'styled-components';

const HeaderMessage = styled.div`
  background-color: red;
  display: flex;
  width:100%
  height: 100%
  justify-content: space-between;
  align-items: center;
  font-weight: bolder;
  font-size: 1.5rem;
  padding-left: 1rem;
  padding-right: 1rem
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ecommerce</title>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Bem vindo a nossa Loja!</h1>
        <h2>
          <Link href="/list">
            <a>Lista dos Produtos</a>
          </Link>
        </h2>
      </main>
      <footer className={styles.footer}>
        <HeaderMessage>
          <span>Ecommerce</span>
          <span>Criado por Vitor Emanoel</span>
        </HeaderMessage>
      </footer>
    </div>
  );
}
