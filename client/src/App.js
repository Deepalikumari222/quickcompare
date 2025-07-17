import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/compare?product=milk')
      .then(res => setData(res.data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Price Comparison</h1>
      {data ? (
        <table className="table-auto border border-gray-400">
          <thead>
            <tr>
              <th className="border p-2">Platform</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Stock</th>
            </tr>
          </thead>
          <tbody>
            {['Zepto', 'Blinkit', 'Instamart'].map(platform => (
              <tr key={platform}>
                <td className="border p-2">{platform}</td>
                <td className="border p-2">₹{data[platform].price}</td>
                <td className="border p-2">{data[platform].stock}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : <p>Loading...</p>}
    </div>
  );
}

export default App;
