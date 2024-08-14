import styles from "./app.module.scss";
import ContainerRoxoPastel from "./components/ContainerRoxoPastel";
import ContainerSobre from "./components/ContainerSobre";
import Footer from "./components/Footer";
import SquadSection from './components/SquadSection';
import dentesWallpaper from "/wallpaper.png";
import fotoIbson from "/devs/ibson-host.png";
import iconLinkedin from "/linkedin-icon.png";
import linhaDivisoria from "/linhaDivisoria.svg"

function App() {
  return (
    <div className={styles.container}>
      <ContainerRoxoPastel/>
      <ContainerSobre/>
      <img src={dentesWallpaper} alt="Wallpaper de dentes" className={styles.foto}/>
      <h2 className={styles.tituloSquad}><strong>Membros</strong> da Squad</h2>
      <div className={styles.containerAuxiliar}>
        <div className={styles.containerCardIbson}>
          <div className={styles.containerCardIbson__containerFoto}>
              <img src={fotoIbson} alt="Foto do Ibson Cabral" className={styles.containerCardIbson__containerFoto__foto}/>
          </div>
          <div className={styles.containerCardIbson__containerInfos}>
            <div className={styles.containerCardIbson__containerInfos__pessoa}>
              <div>
                <h1 className={styles.containerCardIbson__containerInfos__pessoa__nome}>Ibson Cabral</h1>
                <h2 className={styles.containerCardIbson__containerInfos__pessoa__funcao}>Host</h2>
              </div>
              <a href="https://www.linkedin.com/in/ibson-cabral/" target="_blank">
                <img src={iconLinkedin} alt="teste" className={styles.imagemLinkedin}/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.linhaDivisoria}>
        <img src={linhaDivisoria} alt="Linha roxa divisória" className="linhaDivisoria"/>
      </div>
      <SquadSection />
      <Footer />
    </div>
  )
}

export default App
