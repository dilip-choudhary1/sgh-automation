// import React from 'react';

// interface InventoryItem {
//   name: string;
//   quantity: number;
//   size: string;
// }

// const InventoryPage = () => {
//   const [inventoryItems, setInventoryItems] = React.useState<InventoryItem[]>([]);

//   const handleAddItem = (item: InventoryItem) => {
//     setInventoryItems((prevItems) => [...prevItems, item]);
//   };

//   const handleRemoveItem = (index: number) => {
//     setInventoryItems((prevItems) => prevItems.filter((item, i) => i !== index));
//   };

//   return (
//     <div className="max-w-md mx-auto p-4 mt-4">
//       <h1 className="text-2xl font-bold mb-4">All Inventories</h1>
//       <form className="flex flex-col mb-4">
//         <input
//           type="text"
//           placeholder="Name of Object"
//           className="py-2 pl-10 text-sm text-gray-700"
//         />
//         <input
//           type="number"
//           placeholder="Quantity"
//           className="py-2 pl-10 text-sm text-gray-700"
//         />
//         <input
//           type="text"
//           placeholder="Size"
//           className="py-2 pl-10 text-sm text-gray-700"
//         />
//         <button
//           type="button"
//           className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded"
//           onClick={() => handleAddItem({ name: '', quantity: 0, size: '' })}
//         >
//           Create Stock
//         </button>
//       </form>
//       <table className="w-full">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Name of Object</th>
//             <th className="px-4 py-2">Quantity</th>
//             <th className="px-4 py-2">Size</th>
//           </tr>
//         </thead>
//         <tbody>
//           {inventoryItems.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="border px-4 py-2">{item.name}</td>
//               <td className="border px-4 py-2">{item.quantity}</td>
//               <td className="border px-4 py-2">{item.size}</td>
//               <td className="border px-4 py-2">
//                 <button
//                   type="button"
//                   className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
//                   onClick={() => handleRemoveItem(index)}
//                 >
//                   Remove
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default InventoryPage;



import  { useState } from 'react';

interface InventoryItem {
  name: string;
  quantity: number;
  size: string;
}

const InventoryPage = () => {
  const [inventoryItems, setInventoryItems] = useState<InventoryItem[]>([]);
  const [newItem, setNewItem] = useState<InventoryItem>({ name: '', quantity: 0, size: '' });

  // Function to add a new item to the inventory
  const handleAddItem = () => {
    if (newItem.name && newItem.quantity && newItem.size) {
      setInventoryItems((prevItems) => [...prevItems, newItem]);
      setNewItem({ name: '', quantity: 0, size: '' }); // Reset form fields
    }
  };

  // Function to remove an item from the inventory by index
  const handleRemoveItem = (index: number) => {
    setInventoryItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  return (
    <div className="h-full flex-1 pl-[18vw] overflow-y-scroll">
      {/* Title */}
      <h1 className="text-2xl font-bold text-blue-2 dark:text-blue-2-dark mb-6">All Inventories</h1>

      {/* Form Inputs */}
      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Name of Object"
          value={newItem.name}
          onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
          className="bg-blue-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-4 text-blue-700 w-1/3 placeholder-blue-500"
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={(e) => setNewItem({ ...newItem, quantity: parseInt(e.target.value) })}
          className="bg-blue-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-4 text-blue-700 w-1/3 placeholder-blue-500"
        />
        <input
          type="text"
          placeholder="Size"
          value={newItem.size}
          onChange={(e) => setNewItem({ ...newItem, size: e.target.value })}
          className="bg-blue-100 border border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-4 text-blue-700 w-1/3 placeholder-blue-500"
        />
      </div>

      {/* Button to Create Stock */}
      <div className="flex justify-center mb-8">
        <button
          onClick={handleAddItem}
          className="bg-pink text-white dark:text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
        >
          Create Stock
        </button>
      </div>

      {/* Inventory Table */}
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-2 dark:bg-blue-2-dark">
            <tr>
              <th className="text-left p-4 text-white">Name of Object</th>
              <th className="text-left p-4 text-white">Quantity</th>
              <th className="text-left p-4 text-white">Size</th>
              <th className="text-left p-4 text-white">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-blue-50 text-blue-800">
            {inventoryItems.length === 0 ? (
              <tr>
                <td colSpan={4} className="p-4 text-center">No inventory items available</td>
              </tr>
            ) : (
              inventoryItems.map((item, index) => (
                <tr key={index} className="border-b border-blue-100">
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.quantity}</td>
                  <td className="p-4">{item.size}</td>
                  <td className="p-4">
                    <button
                      onClick={() => handleRemoveItem(index)}
                      className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition duration-300"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InventoryPage;
