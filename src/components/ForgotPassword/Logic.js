import { useRef, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

function Logic() {
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const { changePassword } = useAuth();

  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value.includes("@")) {
      setError("Inssert a valid email");
      return;
    }

    try {
      setError("");
      setLoading(true);
      await changePassword(emailRef.current.value);
      setMessage("Check your email");
      window.setTimeout(() => {
        history.push("/login");
      }, 4000);
    } catch {
      setError("Something went wrong, check your spelling");
    }
    setLoading(false);
  };

  return { emailRef, handleSubmit, error, message, loading };
}

export default Logic;
