import styles from "./Footer.module.scss";
import { FaSpotify, FaYoutube, FaLinkedin } from "react-icons/fa";
import dentinho from "/dentinho.png";
import pipoca from "/pipoca_agil.png";
import urso from "/logo_pipoca 1.png";
import dentesFooter from "/dentes-footer.png";


export default function Footer(){
  return (
    <footer className={styles.container}>
      <img src={dentesFooter} alt="Dentes correndo" className={styles.fotoFooter}/>
      <div className={styles.container__esquerda}>
        <img src={urso} alt="Imagem de um urso" />
        <a href="https://pipocaagil.com.br/" target="_blank"><img src={pipoca} alt="Logo do Pipoca Ágil" /></a>
      </div>
      <div className={styles.container__central}>
        <div>
          <a href="https://open.spotify.com/show/5J1scP1l7m7kXK6v5RZS7J?si=27d5abb36c16408f&nd=1&dlsi=e313a2412f91422d"  target="_blank"><FaSpotify size={57} color="#1DB954"/></a>
          <a href="https://www.youtube.com/@PipocaAgil" target="_blank"><FaYoutube size={57} color="red"/></a>
          <a href="https://www.linkedin.com/company/pipoca-%C3%A1gil/"  target="_blank"><FaLinkedin size={57} color="blue"/></a>
        </div>
        <p>&copy; 2003 - 2024 Todos os direitos reservados.</p>
      </div>
      <img src={dentinho} alt="" className={styles.dentinho}/>
    </footer>
  )
}