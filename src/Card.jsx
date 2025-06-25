import React from 'react'

const Card = ({infor}) => {
  return (
    <div>
      <div>{infor.data}</div>
      <h3>{infor.titulo}</h3>
      <p>{infor.conteudo}</p>
      <img src={infor.imagem_capa} alt="" />
    </div>
  )
}

export default Card;
