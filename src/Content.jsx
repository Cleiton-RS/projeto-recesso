import React from 'react'
import Card from './Card';

function Content({search}) {

  const [infor, setInfor] = React.useState([]);
    
  const URL = './public/posts.json';

    React.useEffect(() => {
        async function contentPost(){
          const contResponse = await fetch(URL)
          const contentJSON = await contResponse.text();
          setInfor(contentJSON);
      }
      contentPost();
    }, []);
    

  return <div>
     {infor.map((info, index) => (
      info.titulo.toLowerCase().includes(search.toLowerCase()) ||
      info.conteudo.toLowerCase().includes(search.toLowerCase()) ?
     (<Card info={info} index={index} />) : null
))}
    </div>
  
}

export default Content;