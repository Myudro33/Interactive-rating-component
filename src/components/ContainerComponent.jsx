import { useState } from "react";
import RatingComponent from "./RatingComponent";
import ThanksComponent from './ThanksComponent'

function ContainerComponent() {
  const [array, setArray] = useState([
    {
      id: 1,
      selected: false,
    },
    {
      id: 2,
      selected: false,
    },
    {
      id: 3,
      selected: false,
    },
    {
      id: 4,
      selected: false,
    },
    {
      id: 5,
      selected: false,
    },
  ]);
  const [selected, setSelected] = useState(false);
  const [submited, setSubmited] = useState(false);
  return (
    <div className="w-[28rem] h-[25rem] rounded-3xl bg-[#19202a] p-10">
      {submited ? (
        <ThanksComponent array={array} />
      ) : (
        <RatingComponent
          array={array}
          setArray={setArray}
          selected={selected}
          setSelected={setSelected}
          setSubmited={setSubmited}
        />
      )}
    </div>
  );
}

export default ContainerComponent;
