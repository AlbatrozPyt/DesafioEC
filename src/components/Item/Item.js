import { useDispatch, useSelector } from "react-redux";
import { MdModeEdit, MdDelete } from "react-icons/md";
import "./styles.css";
import { ButtonIcon } from "../Button/Button";
import { deleteTask, editTask } from "../../features/page/pageSlice";
import { useState } from "react";
import { Form } from "../Form/Form";

export const Item = ({ obj, index }) => {

  const dataF = useSelector((state) => state.page.data);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [description, setDescription] = useState('');
  const [task, setTask] = useState(null);

  const inputs = [
    {
      label: "Editar descrição",
      id: "editardescricao",
      setState: setDescription
    }
  ];

  const updateTask = (e) => {
    e.preventDefault();
    dispatch(editTask({ description, index }));
    setShowModal(false)
  }

  return (
    <div
      className="container-item"
      onDrag={() => setTask(obj)}
      draggable={true}
    >
      <p>{obj.description}</p>

      <div className="buttons">
        <ButtonIcon onClick={() => dispatch(deleteTask(index))}><MdDelete size={18} /></ButtonIcon>
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
