import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.body}>
      <Head>
        <title>Página Inicial </title>
      </Head>
      <Header />
      <main className={styles.main}>

        <h2 className={styles.texto}> Bem-vindo!</h2>
     
        <p className={styles.paragrafo}>
          Este projeto é uma exploração fascinante dos brasões e símbolos associados aos times de futebol.
          Descubra as características únicas de cada emblema que representa a paixão pelo futebol em todo o mundo.
          Cada página contém detalhes interessantes para que você possa aprender sobre os elementos visuais que tornam cada time único.
        </p>
  
        <p>
          Clique no link abaixo para começar a explorar os símbolos envolventes do mundo do futebol.
        </p>

        <Link href="/objetos">
          <p className={styles.Link}>Ir para a Página com os brasões dos clubes. </p>
        </Link>
      </main>
      <Footer />
    </div>
  );
}
