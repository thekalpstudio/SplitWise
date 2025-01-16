import { useState } from 'react';
import { queryAllDebts } from '../utils/splitwise';

export default function QueryAllDebtsPage() {
  const [debts, setDebts] = useState<any[]>([]);

  const handleFetch = async () => {
    try {
      const response = await queryAllDebts();
      setDebts(response.data || []);
    } catch (error) {
      console.error(error);
      alert('Error fetching debts.');
    }
  };

  return (
    <div>
      <h1>Query All Debts</h1>
      <button onClick={handleFetch}>Fetch All Debts</button>
      {debts.length > 0 ? (
        <table border="1">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {debts.map((debt, index) => (
              <tr key={index}>
                <td>Debt {index + 1}</td>
                <td>{JSON.stringify(debt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No debts found.</p>
      )}
    </div>
  );
}