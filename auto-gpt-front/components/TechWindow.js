

const TechWindow = ({ technology, onClose}) => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black border-2 border-red-500 rounded-lg p-6 text-white w-9/12">
          <div className="relative">
            <button className="absolute top-1 right-1 bg-red-500 text-white px-2 py-1 rounded-md" onClick={onClose}>Close</button>
            <h2 className="text-xl font-bold mb-4">Technology Details</h2>
            <p className="mb-0">Name: {technology}</p>
          </div>
        </div>
      );      
};

export default TechWindow;
