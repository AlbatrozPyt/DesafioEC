import { Button, ButtonForm } from "../Button/Button"
import "./styles.css";

export const Form = ({ formName, inputs = [], onSubmit, closeFormModal }) => {
  return (
    <div className="background-form">
      <div className="box-form cursor-default">
        <h1>{formName}</h1>

        <form onSubmit={onSubmit}>
          {inputs.map((x) => {
            return (
              <div>
                <label htmlFor={x.id}><p>{x.label}</p></label>
                <input
                  className="
                    px-5
                    border-2 border-black
                    w-full  h-[38px]           
                    rounded
                  "
                  id={x.id}
                  required={true}
                  onChange={(e) => x.setState(e.target.value)}
                />
              </div>
            );
          })}

          <div className="grid justify-items-center gap-5 w-[80%]">
            <ButtonForm>Continuar</ButtonForm>
            <ButtonForm type={'button'} onClick={() => closeFormModal(false)}>Cancelar</ButtonForm>
          </div>
        </form>
      </div>
    </div>
  );
};
