import { useState } from 'react';
import { splitExpense } from '../utils/splitwise';

export default function SplitExpensePage() {
  const [expenseID, setExpenseID] = useState<string>('');
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await splitExpense(expenseID);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert('Error splitting expense.');
    }
  };

  return (
    <div>
      <h1>Split Expense</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Expense ID"
          value={expenseID}
          onChange={(e) => setExpenseID(e.target.value)}
          required
        />
        <button type="submit">Split Expense</button>
      </form>
      {result && (
        <table border="1">
          <thead>
            <tr>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{JSON.stringify(result)}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}