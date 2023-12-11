import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/objetos.module.css';
import Link from 'next/link';

function Objetos({ simbolos }) {
    return (
        <div className={styles.body}>
            <Head>
                <title>Conheça os brasões</title>
            </Head>
            <Header />
            <div className={styles.container}>
                <h1 className={styles.title}> Lista dos simbolos do futebol </h1>
                <div className={styles.symbolList}>
                    {simbolos.map((simbolo) => (
                        <Link href='/profile/[id]' as={`/profile/${simbolo._id}`} key={simbolo._id}>
                            <div className={styles.symbolItem}> 
                            <p> {simbolo.nome} </p> 
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol');
    const repo = await res.json();
    const simbolos = await repo;

    return {
        props: { simbolos },
    };
};

export default Objetos;
