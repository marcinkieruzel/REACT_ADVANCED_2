import { useSelector } from "react-redux";
import { selectBank } from "./BankSlice";

const Bank = () => {
  const bank = useSelector(selectBank);

  console.log(bank);

  return (
    <section className="container">
      <h1>Bank</h1>
      <p>Bilans: {bank?.balans} zł</p>
    </section>
  );
};

export default Bank;
