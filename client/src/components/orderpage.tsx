// import React from 'react';

const OrdersPage = () => {
  return (
    <div className="h-full flex-1 pl-[18vw] overflow-y-scroll">
      <h1 className="capitalize text-blue-2 dark:text-blue-2-dark font-semibold text-[2rem] mb-4">All Orders</h1>

      <div className="flex justify-between items-center mb-4">
        {/* View Toggle */}
        <div className="space-x-4">
          <button className="bg-pink text-white px-4 py-2 rounded-lg shadow hover:bg-pink-600 transition duration-200">
            Table View
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        {/* Filters */}
        <div className="flex space-x-4 w-full">
          <input
            type="text"
            placeholder="Order ID / Name "
            className="capitalize text-blue-2 dark:text-blue-2-dark w-2/3 text-[1.3rem] p-2 w-64"
          />
          <select className="capitalize text-blue-2 dark:text-blue-2-dark w-1/3  text-[1.3rem] rounded-lg p-2">
            <option>Category</option>
          </select>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4">
        {/* Filters */}
        <div className="flex space-x-4 w-full">
          <select className="capitalize text-blue-2 dark:text-blue-2-dark w-1/3 text-[1.3rem] rounded-lg p-2">
            <option>Current Status</option>
          </select>
          <select className="capitalize text-blue-2 dark:text-blue-2-dark w-1/3 text-[1.3rem] rounded-lg p-2">
            <option>Tags</option>
          </select>
          <select className="capitalize text-blue-2 dark:text-blue-2-dark w-1/3 text-[1.3rem] rounded-lg p-2">
            <option>Sort by Deadline</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className=" bg-blue-2 dark:bg-blue-2-dark rounded-lg overflow-hidden shadow-lg">
        <table className="min-w-full bg-white dark:bg-blue">
          <thead>
            <tr>
              <th className="text-left text-white p-4 bg-blue-2 dark:bg-blue-2-dark">Order ID / Name</th>
              <th className="text-left text-white p-4 bg-blue-2 dark:bg-blue-2-dark">Category</th>
              <th className="text-left text-white p-4 bg-blue-2 dark:bg-blue-2-dark">Status</th>
              <th className="text-left text-white p-4 bg-blue-2 dark:bg-blue-2-dark">Tags</th>
              <th className="text-left text-white p-4 bg-blue-2 dark:bg-blue-2-dark">Deadline</th>
            </tr>
          </thead>
          <tbody>
            {/* Dummy rows */}
            {[...Array(5)].map((_, i) => (
              <tr key={i} className=" bg-white dark:bg-white-dark p-4 border-b">
                <td className="text-black dark:text-white p-4 border-b">Order #{i + 1}</td>
                <td className=" text-black dark:text-white p-4 border-b">Category {i + 1}</td>
                <td className=" text-black dark:text-white p-4 border-b">Pending</td>
                <td className=" text-black dark:text-white p-4 border-b">Tag {i + 1}</td>
                <td className=" text-black dark:text-white p-4 border-b">Deadline {i + 1}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
