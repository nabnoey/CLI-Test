import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

   useEffect(() => {
    fetch("http://localhost:3001/hello")  // เรียก backend
      .then((res) => res.text())
      .then((data) => setMessage(data))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    fetch("/api") 
    .then((res) => res.text())
    .then((data) => setMessage(data));
  }, []);

    return (
    <div>
      <h1>Frontend ของเนย 🎨</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;