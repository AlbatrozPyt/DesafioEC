import { useDispatch, useSelector } from "react-redux";
import { DeleteColumnOutlined } from "@ant-design/icons";
import "./styles.css";

export const Item = ({ obj }) => {
  const dataF = useSelector((state) => state.page.data);
  const dispatch = useDispatch();

  return (
    <div className="container-item" draggable={true}>
      <p>{obj.description}</p>

      <div className="buttons">
        <button onClick={() => {}}>Y</button>
        <button onClick={() => {}}><DeleteColumnOutlined/></button>
      </div>
    </div>
  );
};
