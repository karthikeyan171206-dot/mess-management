import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [serverStatus, setServerStatus] = useState("Connecting...");
  const [meal, setMeal] = useState("");
  const [members, setMembers] = useState("");

  // Connect to Render backend
  useEffect(() => {
    fetch("https://mess-management-cldu.onrender.com/api/health")
      .then((response) => response.json())
      .then((data) => {
        setServerStatus(data.status);
      })
      .catch(() => {
        setServerStatus("Server connection failed");
      });
  }, []);

  const handleOrder = () => {
    if (!meal || !members) {
      alert("Please select a meal and enter number of members.");
      return;
    }

    alert(`Order placed for ${members} members for ${meal}.`);
  };

  return (
    <div className="container">
      <h1>Mess Management System</h1>

      <p>Order food for your family functions and rituals</p>

      <div className="status">
        <b>Backend Status:</b> {serverStatus}
      </div>

      <div className="order-box">
        <h2>Food Order</h2>

        <label>Select Meal:</label>

        <div className="meal-buttons">
          <button onClick={() => setMeal("Breakfast")}>
            Breakfast
          </button>

          <button onClick={() => setMeal("Lunch")}>
            Lunch
          </button>

          <button onClick={() => setMeal("Dinner")}>
            Dinner
          </button>
        </div>

        {meal && (
          <p>
            Selected Meal: <b>{meal}</b>
          </p>
        )}

        <label>Number of Members:</label>

        <input
          type="number"
          min="1"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
          placeholder="Enter number of members"
        />

        <button className="order-button" onClick={handleOrder}>
          Place Order
        </button>
      </div>
    </div>
  );
}

export default App;