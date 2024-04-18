

const TechWindow = () => {
  return (
    <div className="overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>Close</button>
        <h2>Technology Details</h2>
        <p>Name: {technology.name}</p>
        <p>Description: {technology.description}</p>
        {/* Add more details as needed */}
      </div>
    </div>
  );

};

export default TechWindow;
