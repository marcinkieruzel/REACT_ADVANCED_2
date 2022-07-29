import { useNavigate, Link } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  return (
    <ul>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate(-1);
          }}
        >Krok w tył</a>
      </li>
      <li>
        <a
          onClick={(e) => {
            e.preventDefault();
            navigate(1);
          }}
        >Krok w przód</a>
      </li>
      <li>
        <Link to={"/bank"}> Bank </Link>
      </li>
</ul>
  );
};

export default Nav
