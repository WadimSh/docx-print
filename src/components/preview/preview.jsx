import { useContext } from "react";
import { StateContext, ConfigContext } from "../../contexts/contexts";

import ImgPreview from "../../ui/img-preview/img-preview";

const Preview = () => {
  const config = useContext(ConfigContext);
  const { sharedValue } = useContext(StateContext);
  
  if (!sharedValue.logic) return <main />;

  return (
    <main>
      {config.map((item, index) => (
        <ImgPreview key={index} optionsArray={item.options} value={sharedValue.check} />
      ))}
    </main>
  );
};

export default Preview;