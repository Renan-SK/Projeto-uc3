import styles from '../assets/componentes/css/racismo.module.css'
import Header from '../assets/componentes/header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function Racismo(){
    return (
        <div>
            <Header/>

            <div className={styles.linha}></div>
            <p className={styles.ajuste_texto}>
                O racismo é uma forma de discriminação baseada na raça, cor da pele ou origem étnica de uma pessoa. 
                Ele pode se manifestar por meio de ofensas, preconceitos, exclusão social e desigualdade de oportunidades. 
                Mesmo com os avanços na luta pela igualdade, o racismo continua presente na sociedade, afetando a vida de 
                muitas pessoas em diferentes ambientes, como escolas, locais de trabalho e espaços públicos.
            <br />
            <br />
                Além das atitudes individuais, existe o racismo sistêmico, que ocorre quando desigualdades raciais estão presentes no 
                funcionamento de instituições e estruturas sociais. Isso pode dificultar o acesso de determinados grupos à educação, 
                à saúde, ao emprego e à segurança, perpetuando injustiças históricas. Essas desigualdades não são resolvidas apenas com leis, 
                mas também com conscientização, educação e mudanças nas atitudes da sociedade.
            <br />
            <br />
                Combater o racismo é uma responsabilidade coletiva. Respeitar as diferenças, reconhecer os direitos de todos e não tolerar 
                atitudes discriminatórias são passos importantes para construir uma sociedade mais justa e inclusiva. Todas as pessoas merecem 
                ser tratadas com dignidade e ter as mesmas oportunidades, independentemente de sua raça, cor da pele ou origem étnica.
            <br />
            <br />
                Fontes consultadas: 
                <a href="https://www.unesco.org/pt/articles/racismo-o-enfrentamento-do-impensavel?utm_source">UNESCO</a>
            </p>
            <div className={styles.linha}></div>
        </div>
    )
}

export default Racismo