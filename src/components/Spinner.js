import React, { useContext } from "react";
import LoadingContext from "../context/Loading.Context";

const Spinner = () => {
  const { loadingCount } = useContext(LoadingContext);
  return (
    <>
      {loadingCount > 0 && (
        <div class="spinner">
          <div />
          <div />
          <div />
        </div>
      )}
    </>
  );
};

export default Spinner;
