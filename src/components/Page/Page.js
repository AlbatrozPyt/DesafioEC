import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import {Item} from "../Item/Item"
import { useEffect, useState } from "react";
import "./styles.css";
import { addTask } from "../../features/page/pageSlice";
import { Form } from "../Form/Form";

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
    dispatch(addTask({index, description}));
    setShowModal(false)
  };

  return (
    <div className="box-page">
      <article className="container-itens">
        <h1>{data.name}</h1>

        {
            (data.tasks).map((x, i) => {
                return <Item obj={x}/>
            })
        }
      </article>

      <Button className={"btn-item"} onClick={() => setShowModal(true)}>Nova tarefa</Button>

      {showModal && (
        <Form
          formName={"Cadastrar página"}
          inputs={inputs}
          onSubmit={newTask}
        />
      )}
    </div>
  );
};
