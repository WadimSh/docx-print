import { useContext } from "react";
import { StateContext } from "../../contexts/contexts";

const Preview = () => {
  const { sharedValue } = useContext(StateContext);
  return (
    <main className="preview">
      {sharedValue}
    </main>
  )
};

export default Preview;