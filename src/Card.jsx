import React from 'react'
import Modal from './Modal'

const Card = ( {info} ) => {

  const [isActive, setIsActive] = React.useState(false)
  const [modalActive, setModalactive] = React.useState(false)
  
  //mouse por cima do card
  const dentroCont = () => {
    setIsActive(false)
  }
  const foraCont = () => {
    setIsActive(true)

  }

  //abrir e fechar modal
  const openModal = () => {
    setModalactive(true)
  }

  const closeModal = () => {
    setModalactive(false)
  }

    const divida = React.useRef();

  return (
    <div>
        <div className={`${isActive ? "card sobre" : "card"}`}
        onMouseOver={foraCont} onMouseLeave={dentroCont} 
        onClick={openModal}
        ref={divida}>
          <div className='datar'>
            <p className='dat'>{info.data}</p>
          </div>
          <div className='content'>
            <h3 className='titulo'>{info.titulo}</h3>
            <p className='intro'>{info.conteudo.slice(0, 80)}...</p>
          </div>
      </div><br /><br />

      <div>
      {modalActive && <Modal modalActive={modalActive}  info={info} closeModal={closeModal} />}
      </div>
      

    </div>


  );
}

export default Card;

  /*const url = ('/public/posts.json')
  fetch(url, {
    method: 'GET'
  }).then(r => r.json()).then((json) => setInfor(r))
    <h1>{infor.titulo}</h1>
      <p>{infor.data}</p>
      <p>{infor.conteudo}</p>
      <img src={infor.imagem_capa} alt="" />
  */