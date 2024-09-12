import { useDispatch, useSelector } from "react-redux";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Button, ButtonIcon, ButtonNewTask } from "../Button/Button";
import { Item } from "../Item/Item"
import { useEffect, useState } from "react";
import { addTask, deletePage, moveTask } from "../../features/page/pageSlice";
import { Form } from "../Form/Form";

import "./styles.css";

export const Page = ({ data, index }) => {
  // Descrição de uma tarefa
  const [description, setDescription] = useState("");

  // Inputs do formulário
  const inputs = [
    {
      label: "Descrição da tarefa",
      id: "descricao",
      setState: setDescription
    }
  ]

  // State global para a lista de páginas
  const dataF = useSelector((state) => state.page.data);
  const dispatch = useDispatch();

  // State global de um item que está sendo arrastado
  const item = useSelector(state => state.itemDrag.item);
  const indexTask = useSelector(state => state.itemDrag.index);
  const initialPage = useSelector(state => state.itemDrag.currentPage);
  const dispatchItem = useDispatch();

  // Controla a visibilidade do formulário/modal
  const [showModal, setShowModal] = useState(false);

  // Criar uma nova tarefa
  const newTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ index, description }));
    setShowModal(false)
  };

  return (
    <div
      className="
        grid
        justify-items-center gap-8
        w-[300px]
        border-2 border-black
        px-5 py-5
        rounded
      "
      onDragOver={e => e.preventDefault()}
      onDrop={e => dispatch(moveTask({ indexTask, initialPage, item, finalPage: index }))}
    >
      <article className="container-itens">
        <div className="container-itens__top">
          <h1>{data.name}</h1>

          {/* Botão de deletar a página */}
          <ButtonIcon className={'btn-icon'} onClick={() => dispatch(deletePage(index))}><MdDelete color="#ff4000" size={30} /></ButtonIcon>
        </div>

        {/* Itens da página */}
        {
          (data.tasks).map((x, i) => {
            return <Item obj={x} index={i} currentPage={index} />
          })
        }
      </article>

      {/* Botão que mostra o formulário */}
      <ButtonNewTask
        onClick={() => setShowModal(true)}
      >
        Nova tarefa
      </ButtonNewTask>

      {/* Formulário Modal */}
      {showModal && (
        <Form
          formName={"Cadastrar tarefa"}
          inputs={inputs}
          onSubmit={newTask}
          closeFormModal={setShowModal}
        />
      )}
    </div>
  );
};
