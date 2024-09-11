import { useDispatch, useSelector } from "react-redux";
import { MdModeEdit, MdDelete } from "react-icons/md";
import "./styles.css";
import { ButtonIcon } from "../Button/Button";
import { deleteTask, editTask } from "../../features/page/pageSlice";
import { useState } from "react";
import { Form } from "../Form/Form";
import { setItem } from "../../features/itemDrag/itemSlice";

export const Item = ({ obj, index, currentPage }) => {

  // State global
  const dataF = useSelector((state) => state.page.data);
  const dispatch = useDispatch();

  // State global para arrastar o item
  const itemActions = useSelector(state => state.itemDrag.item);
  const dispatchItem = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState('');

  // Inputs do formulário
  const inputs = [
    {
      label: "Editar descrição",
      id: "editardescricao",
      setState: setDescription
    }
  ];

  // Função para atualizar uma tarefa
  const updateTask = (e) => {
    e.preventDefault();
    dispatch(editTask({ description, index }));
    setShowModal(false)
  }

  return (
    <div
      className="container-item"
      onDrag={() => {
        dispatchItem(setItem({item: obj, index: index, currentPage}))
      }}
      draggable={true}
    >
      <p>{obj.description}</p>

      <div className="buttons">
        {/* Botão de deletar uma tarefa */}
        <ButtonIcon onClick={() => dispatch(deleteTask(index))}><MdDelete size={18} /></ButtonIcon>

        {/* Botão de editar uma tarefa */}
        <ButtonIcon onClick={() => setShowModal(true)}><MdModeEdit size={18} /></ButtonIcon>
      </div>

      {showModal && (
        <Form
          formName={"Editar tarefa"}
          inputs={inputs}
          onSubmit={updateTask}
        />
      )}
    </div>
  );
};
