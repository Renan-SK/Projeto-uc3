import styles from '../assets/componentes/css/homofobia.module.css'
import Header from '../assets/componentes/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Homofobia(){
    return(
        <div>
            <Header/>

            <div className={styles.linha}></div>
            <p className={styles.ajuste_texto}>
                A homofobia é uma forma de preconceito e discriminação contra pessoas LGBTQIA+, 
                especialmente aquelas que sentem atração por pessoas do mesmo sexo. Ela pode se manifestar 
                por meio de insultos, piadas ofensivas, agressões físicas, rejeição familiar e exclusão social. 
                Essas atitudes são frequentemente influenciadas pela falta de conhecimento, pelo machismo e por padrões 
                sociais que não respeitam a diversidade.
            <br />
            <br />
                Existem diferentes formas de homofobia. A homofobia velada, por exemplo, aparece em comentários e brincadeiras 
                preconceituosas que muitas vezes são tratados como algo normal. Já a homofobia estrutural está relacionada às 
                desigualdades presentes na sociedade, que podem dificultar o acesso de pessoas LGBTQIA+ a oportunidades e direitos. 
                Também existe a homofobia internalizada, quando a própria pessoa passa a sentir vergonha ou rejeição em relação à sua 
                orientação sexual devido ao preconceito que enfrenta.
            <br />
            <br />
                A discriminação pode trazer consequências graves para as vítimas, prejudicando sua autoestima, 
                saúde mental e qualidade de vida. Além disso, o medo de sofrer agressões ou rejeição pode fazer com que 
                muitas pessoas escondam quem são, evitando demonstrar seus sentimentos ou falar abertamente sobre sua orientação sexual.
            <br />
            <br />
                No Brasil, em 2019, o Supremo Tribunal Federal decidiu enquadrar atos de homofobia e transfobia 
                nos termos da legislação sobre racismo, enquanto não houver uma lei específica sobre o assunto. 
                Apesar desse avanço, a violência e a discriminação contra pessoas LGBTQIA+ continuam sendo desafios
                que precisam ser enfrentados.
            <br />
            <br />
                Combater a homofobia é uma responsabilidade de toda a sociedade. Promover a educação, respeitar as 
                diferenças e não tolerar atitudes preconceituosas são passos importantes para garantir que todas as 
                pessoas possam viver com dignidade, segurança e liberdade, independentemente de sua orientação sexual 
                ou identidade de gênero.
                
             <br />
            <br />
                Fontes consultadas: <a href="https://brasilescola.uol.com.br/psicologia/homofobia.html">Brasil Escola</a>
            </p>
            <div className={styles.linha}></div>
        </div>
    )
}

export default Homofobia