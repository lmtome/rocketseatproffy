import React from 'react';
import whatsappIcon from '../../images/icons/whatsapp.svg';
import './style.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/12103558?s=460&u=46158b04a7380bad6d1b86b727e750c411f8b99a&v=4" alt="Foto Luciano M Tome" ></img>
        <div>
            <strong>Luciano M Tome</strong>
            <span>Matematica</span>
        </div>
        </header>
        <p>Entusiasta das melhores tecnologias com base matematica estatistica.
            <br /><br />
        Apaixonado por explodir coisas em lanoratorios e por mudar a vida das pessoas atraves de experiencias e resultados de pesquisas. Mais de 200mil pessoas ja passaram por uma de suas experiencias.
        </p>

        <footer>
            <p>
                Preço/hora
                <strong>R$ 20,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="Icone do Whatsapp" />
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;