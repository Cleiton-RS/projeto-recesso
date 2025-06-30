import React from 'react'
import Card from './Card';

function Content({search}) {

  const [infor, setInfor] = React.useState([]);
    
  const URL = './public/posts.json';

        async function contentPost(){
          try{
          const contResponse = await fetch(URL, {
            headers: {
              'Accept': 'aplication/json'
            }
          })
          const contentJSON = await contResponse.json();
          return setInfor(contentJSON);
          }
          catch(err){
            console.log(err)
          }
        }

        React.useEffect(() =>{
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