import React from "react"
import Frame2 from './Frame2'
import Content from "./Content";


function App() {
  const [search, setSearch] = React.useState("")

  /*React.useEffect(() => {
    fetch('/public/posts.json').then(response => response.json()).then(json => setInfor(json))
  }, [])*/
  

  return (
  <div> 
    <Frame2 setSearch={setSearch} />
    <div className='fieldList'>
    <Content search={search} />
    </div>
  
  </div>  
  );
  

}

export default App
