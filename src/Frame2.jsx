import React from 'react'

const Frame2 = ({setSearch}) => {
  return (
    <div>
      <header className='inicio'>
        <h1 className="cabeca">Code<span className='cabeca dois'>Lab</span></h1>
        <input className="busca" placeholder='Busque aqui' onChange={event => setSearch(event.target.value)} />
      </header>
    </div>
  )
}

export default Frame2;