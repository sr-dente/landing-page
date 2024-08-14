import styles from './ContainerRoxoPastel.module.scss';
import logo1 from "/logo_pipoca 1.png";
import logo2 from '/pipoca_agil.png';
import dente from '/dente1.png';

export default function ContainerRoxoPastel() {
    return (
        <>
            <header className={styles.cabecalho}>
                <img className={styles.logo1} src={logo1} alt="Logo do projeto Pipoca" />
                <img className={styles.logo2} src={logo2} alt="Logo do Pipoca Ágil" />
            </header>

            <div className={styles.home}>
                <img src={dente} alt="Imagem de um dente" className='fotoHome-dente'/>
                <div className={styles.homeTexto}>
                    <h1>Squad<br/><span>Roxo Pastel</span></h1>
                    <p>Conheça nossa equipe <span>Roxo Pastel!</span></p>
                </div>
            </div>
        </>
    );
}

