import React from "react";

const conteudos = [
    {
      conteudo: 'High Order Functions',
      bloco: 8,
      status: 'Aprendido'
    },
    {
      conteudo: 'Composicao de Componentes',
      bloco: 11,
      status: 'Aprendendo',
    },
    {
      conteudo: 'Composicao de Estados',
      bloco: 12,
      status: 'Aprenderei'
    },
    {
      conteudo: 'Redux',
      bloco: 16,
      status: 'Aprenderei'
    },
  ];

class Content extends React.Component {
    render() {
      return conteudos.map((event) => {
        return <div className='card-item'>
          <p>O conteúdo é: {event.conteudo}</p>
          <p>Status: {event.status}</p>
          <p>Bloco: {event.bloco}</p>
          <br />
        </div>
})}}

export default Content