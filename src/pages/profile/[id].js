import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import styles from '../../styles/id.module.css';

function Futebol({ simbolo }) {
    
    if (!simbolo) {
        return <p>Usuário não encontrado</p>;
    }

    return (
        <div className={styles.body}>
            <Head>
                <title>{simbolo.nome}</title>
            </Head>
            <Header />
            <div className={styles.descricao}>
                <h1 className={styles.texto}>{simbolo.nome}</h1>
                <p className={styles.texto}>Autor: {simbolo.usuario}</p>
                <p className={styles.texto}>Descrição: {simbolo.descricao}</p>
            </div>
            <Footer />
        </div>
    );
}

export const getStaticProps = async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol');
    const repo = await res.json();

    const simboloId = context.params.id;
    const simbolo = repo.find((simbolo) => String(simbolo._id) === simboloId);

    if (!simbolo) {
        return {
            notFound: true,
        };
    }

    return {
        props: { simbolo },
    };
};

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=futebol');
    const repo = await res.json();
    const simbolos = await repo;

    const paths = simbolos.map((simbolo) => ({
        params: { id: String(simbolo._id) }
    }));

    return {
        paths,
        fallback: false,
    };
}

export default Futebol;
