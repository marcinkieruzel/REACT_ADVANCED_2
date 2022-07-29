import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { addCredit, selectBank } from "../bank/BankSlice";
import { addDeposit } from "../bank/BankSlice";

const Client = () => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const bank = useSelector(selectBank);
  const inputDeposit = useRef(null);
  const inputCredit = useRef(null);

  console.log(location, params, bank);

  return (
    <section className="container">
      <h1>Witaj {params?.client}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <input ref={inputCredit} className="form-control" type="number" />
        </div>
        <button
          onClick={(e) => {
            dispatch(
              addCredit({
                name: params?.client,
                amount: Number(inputDeposit.current.value),
              })
            );
          }}
          className="btn btn-primary"
        >
          Dodaj kredyt
        </button>
      </form>
      <br />
      <br />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group">
          <input ref={inputDeposit} className="form-control" type="number" />
        </div>
        <button
          onClick={(e) => {
            dispatch(
              addDeposit({
                name: params?.client,
                amount: Number(inputDeposit.current.value),
              })
            );
          }}
          className="btn btn-primary"
        >
          Dodaj lokatę
        </button>
      </form>
    </section>
  );
};

export default Client;
