import React, { useState } from 'react';
import style from '../styles/form.module.scss'
import InterfaceTarefa from '../types/InterfaceTarefa';
import { Button } from './Button';
import { v4 as uuidv4 } from 'uuid'; 

// export default class Form extends React.Component<{
//         setTarefas: React.Dispatch<React.SetStateAction<InterfaceTarefa[]>>
//     }>{
        
//     state = {
//         tarefa: '',
//         tempo: '00:00:00'
//     }

//     adicionarTarefa(event: React.FormEvent<HTMLFormElement>){
//         event.preventDefault();
//         this.props.setTarefas(oldTarefas => [
//             ...oldTarefas, 
//                 {
//                     ...this.state,
//                     selecionado: false,
//                     completado: false,
//                     id: uuidv4()
//                 }
//         ])
        
//         this.setState({
//             tarefa: '',
//             tempo: '00:00:00'
//         })
//     }

//     render(){
//         return(  
//             // <form className={style.novaTarefa} onSubmit={event => this.adicionarTarefa(event)}>
//             <form className={style.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
//                 <div className={style.inputContainer}>
//                     <label htmlFor="tarefa">Novo estudo</label>
//                     <input 
//                         type="text"
//                         name="tarefa"
//                         id="tarefa"
//                         value={this.state.tarefa}
//                         onChange={
//                             event => this.setState({...this.state, tarefa: event.target.value})
//                         }
//                         placeholder="O que você quer estudar"
//                         required
//                     />
//                 </div>
//                 <div className={style['inputContainer']}>
//                     <label htmlFor="tempo">Tempo</label>
//                     <input
//                         type="time"
//                         step="1"
//                         name="tempo"
//                         value={this.state.tempo}
//                         onChange={
//                             event => this.setState({...this.state, tempo: event.target.value})
//                         }
//                         id="tempo"
//                         min="00:00:00"
//                         max="09:30:00"
//                         required
//                     />
//                 </div>

//                 {/* <Button texto='Adicionar'/> */}
//                 <Button type="submit">Adicionar</Button>
//             </form>
//         )
//     }
// }

interface Props { 
    setTarefas: React.Dispatch<React.SetStateAction<InterfaceTarefa[]>>
}

export default function Form({ setTarefas }: Props) {
    const [tarefa, setTarefa] = useState("");
    const [tempo, setTempo] = useState("00:00")

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>) {
        evento.preventDefault();
        setTarefas(tarefasAntigas => 
            [
                ...tarefasAntigas,
                {
                    tarefa,
                    tempo,
                    selecionado: false,
                    completado: false,
                    id: uuidv4()
                }
            ]
        );

    setTarefa("");
    setTempo("00:00")
    }

    return(  
        // <form className={style.novaTarefa} onSubmit={event => this.adicionarTarefa(event)}>
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">Novo estudo</label>
                <input 
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={tarefa}
                    onChange={
                        event => setTarefa(event.target.value)
                    }
                    placeholder="O que você quer estudar"
                    required
                />
            </div>
            <div className={style['inputContainer']}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    step="1"
                    name="tempo"
                    value={tempo}
                    onChange={
                        event => setTempo(event.target.value)
                    }
                    id="tempo"
                    min="00:00:00"
                    max="09:30:00"
                    required
                />
            </div>
            {/* <Button texto='Adicionar'/> */}
            <Button type="submit">Adicionar</Button>
        </form>
    )
}
