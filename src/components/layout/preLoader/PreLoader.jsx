import "./preLoader.module.css";
import { Spinner } from "react-bootstrap";

export const PreLoader = () => {
  return (
    <div className="preLoader">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};
