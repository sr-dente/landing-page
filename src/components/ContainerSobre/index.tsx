import styles from "./ContainerSobre.module.scss";
import CardRow from "../CardRow";

export default function ContainerSobre() {
    return (
        <div className={styles.rows}>
            <CardRow
                tituloRows="<strong>SOBRE</strong> O PROJETO PIPOCA"
                titulo1="Quando surgiu"
                texto1="Projeto Simulação Ágil, criado por Ibson Cabral em 2023."
                titulo2="Objetivo"
                texto2="Projeto ágil, visando oferecer uma experiência realística de uma equipe Scrum para aprender com erros, sempre buscando coesão e produtividade."
                titulo3="Público alvo"
                texto3="Pessoas em transição de carreira, e interessados no Universo Ágil, inclusive, profissionais que já trabalham ou interesse em trabalhar com agilidade."
            />
            <CardRow
                tituloRows="NOSSO<strong> DESAFIO DA VEZ </strong> "
                titulo1="Tema do projeto"
                texto1="Um site educativo odontológico que apresente recursos visuais e interativos para instruir pacientes sobre condições, procedimentos e higiene bucal."
                titulo2="Objetivo"
                texto2="Desenvolvimento de um produto (página web) para auxiliar pais, mães e responsáveis no gerenciamento da saúde bucal da família."
                titulo3="Cronograma"
                texto3="Reuniões semanais às quartas-feiras, às 22h, para toda a equipe. Além disso, encontros extras com colegas da equipe conforme disponibilidade, a tarde, noite ou no sábado."
            />
        </div>

    );

}