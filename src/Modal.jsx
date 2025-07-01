import React from 'react'


function Modal({info, modalActive, closeModal, dia, mes, mesesNome, ano}) {  



  return (
      <section className={`${modalActive ? "modal-completo ativo" : "modal-completo"}`}>
        <div className='modal ativo'>
          <button className='fechar'
        onClick={closeModal}>X</button>
          <div className='comecar'>
            <p className='datm'>{dia} de {mesesNome[mes]} de {ano}</p>
          </div>
          <div className='contentando' >
            <h2>{info.titulo}</h2>
            <img src={info.imagem_capa} alt="" className='imagem'  />
            <p>  {info.conteudo}</p>
          </div>
        </div>
      </section>
  )
}

export default Modal