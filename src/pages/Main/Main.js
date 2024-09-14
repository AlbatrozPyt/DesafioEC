import { useDispatch, useSelector } from "react-redux";
import { Container } from "../../components/Container/Container";
import { Page } from "../../components/Page/Page";

import "./styles.css";
import { Button } from "../../components/Button/Button";
import { Form } from "../../components/Form/Form";
import { useState } from "react";
import { addPage } from "../../features/page/pageSlice";

export const Main = () => {
  const [namePage, setNamePage] = useState("");

  // Inputs do formulário
  const inputs = [
    {
      label: "Nome da página",
      id: "namepage",
      setState: setNamePage,
    },
  ];

  // State global e funções
  const data = useSelector((state) => state.page.data);
  const dispatch = useDispatch();

  // Controla a visibilidade do modal
  const [showModal, setShowModal] = useState(false);

  // Função de criar uma nova página
  const newPage = (e) => {
    e.preventDefault();
    dispatch(addPage({ name: namePage, tasks: [] }));
    setShowModal(false);
  };

  return (
    <main>

      <Container>
        {data.length === 0 ? <h1 className="mt-12">Nenhuma página foi adicionada</h1>: null}
        {data.map((x, index) => {
          return <Page data={x} index={index} key={index} />;
        })}
      </Container>

      <Button onClick={() => setShowModal(true)}>
        Nova página 
      </Button>

      {/* Formulário para criar um página */}
      {showModal && (
        <Form
          formName={"Cadastrar página"}
          inputs={inputs}
          onSubmit={newPage}
          closeFormModal={setShowModal}
        />
      )}
    </main>
  );
};
