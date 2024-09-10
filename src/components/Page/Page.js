import { useDispatch, useSelector } from "react-redux";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Button, ButtonIcon } from "../Button/Button";
import { Item } from "../Item/Item"
import { useEffect, useState } from "react";
import { addTask, deletePage } from "../../features/page/pageSlice";
import { Form } from "../Form/Form";

import "./styles.css";

export const Page = ({ data, index }) => {
  const [description, setDescription] = useState("");

  const inputs = [
    {
      label: "Descrição da tarefa",
      id: "descricao",
      setState: setDescription
    }
  ]

  const dataF = useSelector((state) => state.page.data);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const newTask = (e) => {
    e.preventDefault();
    dispatch(addTask({ index, description }));
    setShowModal(false)
  };

  return (
    <div className="box-page">
      <article className="container-itens">
        <div className="container-itens__top">
          <h1>{data.name}</h1>

          <ButtonIcon className={'btn-icon'} onClick={() => dispatch(deletePage(index))}><MdDelete color="#ff4000" size={24}/></ButtonIcon>
        </div>

        {
          (data.tasks).map((x, i) => {
            return <Item obj={x} index={i} />
          })
        }
      </article>

      <Button className={"btn-item"} onClick={() => setShowModal(true)}>Nova tarefa</Button>

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
