import { useDispatch, useSelector } from "react-redux";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Button, ButtonIcon } from "../Button/Button";
import { Item } from "../Item/Item"
import { useEffect, useState } from "react";
import { addTask, deletePage, moveTask } from "../../features/page/pageSlice";
import { Form } from "../Form/Form";

import "./styles.css";

export const Page = ({ data, index }) => {
  const [description, setDescription] = useState("");

  // States para o drag and drop;
  const [initialPage, setInitalPage] = useState(null);

  // Inputs do formulário
  const inputs = [
    {
      label: "Descrição da tarefa",
      id: "descricao",
      setState: setDescription
    }
  ]

  // State e funções
  const dataF = useSelector((state) => state.page.data);
  const dispatch = useDispatch();

  // State global para arrastar o item
  const item = useSelector(state => state.itemDrag.item);
  const indexItem = useSelector(state => state.itemDrag.index);
  const currentPageItem = useSelector(state => state.itemDrag.currentPage);
  const dispatchItem = useDispatch();

  const [showModal, setShowModal] = useState(false);

  // Criar uma nova tarefa
  const newTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ index, description }));
    setShowModal(false)
  };

  return (
    <div
      className={`box-page ${index}`}
      onDragOver={e => e.preventDefault()}
      onDrop={e => {
        console.log(item, indexItem, currentPageItem, index)
      }}
    >
      <article className="container-itens">
        <div className="container-itens__top">
          <h1>{data.name}</h1>

          {/* Botão de deletar a página */}
          <ButtonIcon className={'btn-icon'} onClick={() => dispatch(deletePage(index))}><MdDelete color="#ff4000" size={24} /></ButtonIcon>
        </div>

        {/* Itens da página */}
        {
          (data.tasks).map((x, i) => {
            return <Item obj={x} index={i} currentPage={index}/>
          })
        }
      </article>

      {/* Botão que mostra o formulário */}
      <Button className={"btn-item"} onClick={() => setShowModal(true)}>Nova tarefa</Button>

      {/* Formulário Modal */}
      {showModal && (
        <Form
          formName={"Cadastrar tarefa"}
          inputs={inputs}
          onSubmit={newTask}
        />
      )}
    </div>
  );
};
