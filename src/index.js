import React from 'react'
import ReactDOM from 'react-dom'
import {faker} from '@faker-js/faker'
import Comment from './components/Comentario'
import AprovalCard from './components/AprovalCard' 


const App=()=>{

    return(<>
    <div className="ui-comments">
        <AprovalCard>
        
        <Comment 
        author="manuel"
        text="meu texto próprio"
        date="hoje"
        avatar={faker.image.avatar()}
        />
        </AprovalCard>
        <AprovalCard><Comment author="evandro" text="meu próprio" date="ontem" avatar={faker.image.avatar()}/></AprovalCard>
        <AprovalCard><Comment author="carlos" text="meu texto" date="hoje" avatar={faker.image.avatar()}/></AprovalCard>
        <AprovalCard><Comment author="julia" text="meu caderno" date="amanhã" avatar={faker.image.avatar()}/></AprovalCard>
        </div>
        </>
        )

}


ReactDOM.render(<App/>,document.getElementById('root'))