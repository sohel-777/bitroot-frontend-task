import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Modal from "./components/Modal";

function App() {
  const [data, setData] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    fetch(
      "https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts"
    )
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container">
      {data.map((item) => (
        <Card key={item.id} data={item} onLearnMore={() => openModal(item)}/>
      ))}

      {selectedItem && <Modal item={selectedItem} onClose={closeModal} />}
    </div>
  );
}

export default App;
