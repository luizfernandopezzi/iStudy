import React from 'react'

import style from '../styles/lista.module.scss'
import InterfaceTarefa from '../types/InterfaceTarefa'
import Item from './Item'

interface Props {
    tarefas: InterfaceTarefa[],
    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void
}

// function Lista( { tarefas }: {tarefas: Array<InterfaceTarefa}){
function Lista(
     { tarefas, selecionaTarefa }: Props
     ){
    // interface Tarefas {
    //     tarefa: string;
    //     tempo: string
    // }

    // const tarefas: Tarefas[] = [
    //     {
    //     tarefa: 'React',
    //     tempo: '02:00:00'
    //     },
    //     {
    //     tarefa: 'Javascript',
    //       tempo: '01:00:00'
    //     }
    // ]

    //Simple using interferd type:
    // const tarefas = [{
    //     tarefa: 'React',
    //     tempo: '02:00:00'
    // }]
    
    return(
        <aside className={style.listaTarefas}>
            <h2>
            Estudos
            </h2> 
            <ul>
                {tarefas.map( (item, index: number) => {return(
                // <Item tarefa={item.tarefa} tempo={item.tempo} key={index}/>
                <Item 
                    selecionaTarefa={selecionaTarefa}
                    key={item.id}
                    {...item}/>
                )})}
            </ul>
        </aside>
    )
}

export default Lista;