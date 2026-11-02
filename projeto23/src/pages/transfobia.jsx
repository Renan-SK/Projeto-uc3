import styles from '../assets/componentes/css/transfobia.module.css'
import Header from '../assets/componentes/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Transfobia(){
    return (
        <div>
            <Header/>

            <div className={styles.linha}></div>
            <p className={styles.ajuste_texto}>
                A transfobia é uma forma de preconceito e discriminação contra pessoas transgênero, travestis e outras pessoas cuja 
                identidade de gênero não corresponde às expectativas tradicionais da sociedade. Ela pode se manifestar por meio de 
                ofensas, piadas preconceituosas, ameaças, agressões físicas e exclusão social.
            <br />
            <br />
               Esse tipo de discriminação pode ocorrer em diversos ambientes, como escolas, locais de trabalho, hospitais e 
               espaços públicos. Muitas pessoas trans enfrentam dificuldades para conseguir emprego, receber atendimento adequado 
               e ter seus direitos respeitados. Além disso, a transfobia pode causar sofrimento emocional, prejudicar a autoestima 
               e aumentar o sentimento de insegurança e isolamento.
            <br />
            <br />
               A transfobia está relacionada a preconceitos sociais e à ideia de que todas as pessoas devem seguir padrões 
               rígidos de gênero. A falta de informação e o desrespeito à diversidade contribuem para a continuidade dessas 
               atitudes, que podem resultar em violência e desigualdade.
            <br />
            <br />
                No Brasil, em 2019, o Supremo Tribunal Federal decidiu enquadrar atos de homofobia e transfobia nos termos da 
                legislação sobre racismo. Além disso, o dia 29 de janeiro é celebrado como o Dia Nacional da Visibilidade Trans, 
                uma data importante para promover o respeito, a inclusão e a conscientização sobre os direitos das pessoas trans.
            <br />
            <br />
                Combater a transfobia é responsabilidade de todos. Promover a educação, respeitar a identidade de gênero de 
                cada pessoa e rejeitar atitudes discriminatórias são medidas essenciais para construir uma sociedade mais justa, 
                segura e inclusiva, na qual todos possam viver com dignidade e liberdade.
                Fontes consultadas: 
            <br />
            <br />
                <a href="https://pt.wikipedia.org/wiki/Transfobia">Wikipedia</a>
            </p>
            <div className={styles.linha}></div>
        </div>
    )
}

export default Transfobia