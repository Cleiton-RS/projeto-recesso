import React from "react"
import Frame2 from './Frame2'
import Card from './Card'

function App() {

  const [infor, setInfor] = React.useState(true);
  async function postHuman(){
    const resposta = await fetch(`/public/posts.json`)
    const json = await resposta.json()
    setInfor(json)
  }
  

  
  return (
  <div> 
    <Frame2 />
    {infor && <Card infor={infor}/>} 
  </div>  
  );


}

export default App
