import { useLocation, useParams } from "react-router-dom";

const Client = () => {
  const location = useLocation();
  const params = useParams()

  console.log(location, params);

  return (
    <section className="container">
      <h1>Witaj {params?.client}</h1>
    </section>
  );
};

export default Client;
