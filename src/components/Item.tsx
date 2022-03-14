import React from 'react'
import style from '../styles/lista.module.scss'
import InterfaceTarefa from '../types/InterfaceTarefa'

// export default function Item( props: {tarefa: string, tempo: string} ){
//     const {tarefa, tempo} = props;
//     return(
//         <li className={style.item}>
//             <h3>{tarefa}</h3>
//             <span>{tempo}</span>
//         </li>
//     )
// }

interface Props extends InterfaceTarefa{
    selecionaTarefa: (tarefaSelecionada: InterfaceTarefa) => void    
}

export default function Item( 
    // { tarefa, tempo }: {tarefa: string, tempo: string} 
    { tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props
    ){
    return(
        <li  className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`}
            onClick={()=> !completado && selecionaTarefa(
                {
                    tarefa,
                    tempo,
                    selecionado,
                    completado,
                    id
                }
             )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido} aria-label="tarefa completada"></span>}
        </li>
    )
}