import { Link } from "react-router-dom";

export default function UnderlineLink({ to, children }) {
  return (
    <Link className="hover:underline" to={to}>
      {children}
    </Link>
  );
}
