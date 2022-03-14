import React from 'react'
import style from '../styles/button.module.scss';

// TypeScript com props: {} definidas passadas através de <Button texto='Adicionar'> em Form.tsx
// export class Button extends React.Component<{ texto: string}> {
//     render(){
//         return(
//             <button className={style.botao}>
//                 {this.props.texto}
//             </button>
//         )
//     }
// }

// export class Button extends React.Component<{
//     type?: 'button' | 'submit' | 'reset' | undefined;
//     onClick?: ()=>void;
// }> {
//     render(){
//         return(
//             <button onClick={this.props.onClick} type={this.props.type} className={style.botao}>
//                 {this.props.children}
//             </button>
//         )
//     }
// }

interface Props {
    type?: "button" | "submit" | "reset" | undefined, 
    onClick?: () => void
    children?: React.ReactNode
} 

export function Button({ onClick, type, children }: Props) {
    return (
        <button onClick={onClick} type={type} className= {style.botao}>
            {children}
        </button>
    )
}