import React from 'react'
import Card from './Card';

function Content({search}) {

  const [infor, setInfor] = React.useState([]);
    
  const URL = './public/posts.json';

    React.useEffect(() => {
        async function contentPost(){
          const contResponse = await fetch(URL)
          const contentJSON = await contResponse.json();
          setInfor(contentJSON);
      }
      contentPost();
    }, []);
    
    // arumar outro jeito de fazer busca
  return <div>
     {infor.map((info, index) => (
      info.titulo.toLowerCase().includes(search.toLowerCase()) ||
      info.conteudo.toLowerCase().includes(search.toLowerCase()) ?
     (<Card key={index} info={info} />) : null
))}
    </div>
  
}

export default Content;