import styles from './Card.module.scss';
import check from '/check.png';

interface IContainerCardProps {
    titulo: string;
    texto: string;
}
export default function Card ({titulo,texto}: IContainerCardProps){
    return(
        <div className={styles.card}>
            <div className={styles.tituloCard}>
                <img src={check} alt="icone de confere" />
                <h1 className={styles.tituloTexto}>{titulo}</h1>
            </div>
            <p>{texto}</p>
        </div>
    );
}