import ContainerMembro from "../ContainerMembro";
import styles from "./SquadSection.module.scss";
import dados from './infos';

export default function SquadSection(){
  return (
    <article className={styles.container}>
      {
        dados.map(membro => <ContainerMembro 
          key={membro.id}
          foto={membro.foto}
          funcao={membro.funcao}
          linkLinkedin={membro.linkLinkedin}
          nomeMembro={membro.nomeMembro}
          sobreMembro={membro.sobreMembro}
          primario={membro.primario}
        />)
      }
    </article>
  )
}