import { useEffect, useState } from "react";

const LandingPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5453/objects")  // Update the port if different
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div className="landing-container">
      <h1>Welcome to ASAP</h1>
      <p>Father Joke Generator</p>
      <h2>Data from Database:</h2>
      <ul>
        {data.length > 0 ? (
          data.map((item) => (
            <li key={item._id}>
              {item.firstName} {item.lastName} - {item.message}
            </li>
          ))
        ) : (
          <p>No data found</p>
        )}
      </ul>
    </div>
  );
};

export default LandingPage;
