import { useState } from 'react';
import { getExpense } from '../utils/splitwise';

export default function GetExpensePage() {
  const [expenseID, setExpenseID] = useState('');
  const [expense, setExpense] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await getExpense(expenseID);
      setExpense(response.data);
    } catch (error) {
      console.error(error);
      alert('Error fetching expense.');
    }
  };

  return (
    <div>
      <h1>Get Expense</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense ID"
          value={expenseID}
          onChange={(e) => setExpenseID(e.target.value)}
          required
        />
        <button type="submit">Fetch Expense</button>
      </form>
      {expense && (
        <table border="1">
          <thead>
            <tr>
              <th>Field</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(expense).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>{JSON.stringify(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}