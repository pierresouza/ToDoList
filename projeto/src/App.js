import { useEffect, useState } from 'react';
import './App.css';

function App() {
   let [lista, setLista] = useState([]);
   let [novoItem, setNovoItem] = useState("");

   useEffect(() => {
      setLista([])
   }, []);

   // estilisar a lista


   return (
      <div className='container'>
         <div className="new-item">
            <input placeholder="Tarefa" value={novoItem} onChange={value => setNovoItem(value.target.value)} type="text" />
            <button onClick={() => adicionarNovoItem()}>Adicionar</button>
         </div>
         <ul className='todo-list'>
            {lista.map((item, index) => (
               <li key={index} className="todo-item">
                  {item}
                  <button onClick={() => deletarItem(index)}>
                     Deletar
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );

   function adicionarNovoItem() {
      if (novoItem.length <= 0) {
         alert("por favor preencha o campo");
         return;
      }

      let itemIndex = lista.indexOf(novoItem)
      if (itemIndex >= 0) {
         alert("Tarefa com nome repetido, Por favor altere o nome ");
         return;
      }


      setLista([...lista, novoItem]);
      setNovoItem("");
   }

   function deletarItem(index) {
      let tmpArray = [...lista];
      tmpArray.splice(index, 1);

      setLista(tmpArray);
   }
}

export default App;
