import React from "react";
// import { GlobalLoader } from "../../components/ui";
import { useLoader } from "../stores";

const LoaderProvider = () => {
  const { loading } = useLoader();
//   return <GlobalLoader loading={loading} />;
return null;
};

export default LoaderProvider;