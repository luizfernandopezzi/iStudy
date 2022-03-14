import React, { useState } from 'react';

import Form from './components/Form';
import Lista from './components/Lista';
import { Timer } from './components/Timer';

import style from './App.module.scss';
import InterfaceTarefa from './types/InterfaceTarefa';

function App() {
  const [tarefas, setTarefas] = useState<InterfaceTarefa[]>([]);
  const [selecionado, setSelecionado] = useState<InterfaceTarefa>();

  function selecionaTarefa(tarefaSelecionada: InterfaceTarefa){
    setSelecionado(tarefaSelecionada);

    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }

  function finalizarTarefa() {
    if(selecionado) {
        setTarefas(tarefasAnteriores =>
        tarefasAnteriores.map(tarefa => {
            if(tarefa.id === selecionado.id) {
                return {
                    ...tarefa,
                    selecionado: false,
                    completado: true
                }
            }
            return tarefa;
        }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas}/>
      <Lista tarefas={tarefas} selecionaTarefa={selecionaTarefa}/>
      <Timer selecionado={selecionado} finalizarTarefa={finalizarTarefa}/>
    </div>
  );
}

export default App;
