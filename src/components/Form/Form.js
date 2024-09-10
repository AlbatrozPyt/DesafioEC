import "./styles.css";

export const Form = ({ formName, inputs = [], onSubmit }) => {
  return (
    <div className="background-form">
      <div className="box-form">
        <h1>{formName}</h1>

        <form onSubmit={onSubmit}>
          {inputs.map((x) => {
            return (
              <div>
                <label htmlFor={x.id}>{x.label}</label>
                <input id={x.id} onChange={(e) => x.setState(e.target.value)} required={true}/>
              </div>
            );
          })}

          <button>Continuar</button>
        </form>
      </div>
    </div>
  );
};
