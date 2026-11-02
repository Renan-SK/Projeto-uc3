import styles from '../assets/componentes/css/misoginia.module.css'
import Header from '../assets/componentes/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Misoginia(){
    return(
        <div>
            <Header/>

            <div className={styles.linha}></div>
            <p className={styles.ajuste_texto}>
                A misoginia é o ódio, desprezo ou preconceito contra mulheres e meninas. Ela pode se manifestar por meio de ofensas, 
                humilhações, discriminação, assédio, violência e atitudes que consideram as mulheres inferiores aos homens. 
                Esse tipo de preconceito está relacionado a desigualdades sociais e a ideias que defendem a superioridade masculina.
            <br />
            <br />
                A misoginia pode estar presente em diferentes ambientes, como escolas, locais de trabalho, 
                relacionamentos e até instituições sociais. Ela também aparece quando mulheres são impedidas 
                de participar de determinadas atividades, têm seus direitos desrespeitados ou são julgadas 
                por não seguirem os papéis tradicionais atribuídos ao gênero feminino.
            <br />
            <br />
                Ao longo da história, diversos pensadores defenderam ideias que colocavam as mulheres em uma posição inferior à dos 
                homens, contribuindo para a manutenção dessas desigualdades. Atualmente, a misoginia continua sendo um problema que 
                pode favorecer a violência contra as mulheres, incluindo agressões físicas, psicológicas e, em casos extremos, o feminicídio.
            <br />
            <br />
                Combater a misoginia é essencial para construir uma sociedade mais justa e igualitária. Promover o respeito, 
                garantir os mesmos direitos e oportunidades e denunciar atitudes discriminatórias são medidas importantes para 
                combater o preconceito e valorizar a dignidade de todas as mulheres.
            <br />
            <br />
                Fontes consultadas: <a href="https://pt.wikipedia.org/wiki/Misoginia">Wikipedia</a>
            </p>
            <div className={styles.linha}></div>
        </div>
    )
}

export default Misoginia