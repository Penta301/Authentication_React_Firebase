import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Logic() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { logIn } = useAuth();

  const emailRef = useRef();
  const passRef = useRef();
  const confirmRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value.includes("@")) {
      setError("Inssert a valid email");
      return;
    }

    if (passRef.current.value === "") {
      setError("Insert a valid password");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await logIn(emailRef.current.value, passRef.current.value);
      history.push("/");
    } catch {
      setError("Something went wrong");
    }
    setLoading(false);
  };

  return { emailRef, passRef, confirmRef, handleSubmit, error, loading };
}

export default Logic;
