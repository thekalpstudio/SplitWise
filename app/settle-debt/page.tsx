import { useState } from 'react';
import { settleDebt } from '../utils/splitwise';
import { SettleDebtArgs } from '../types/splitwise';

export default function SettleDebtPage() {
  const [formData, setFormData] = useState<SettleDebtArgs>({
    from: '',
    to: '',
    expenseID: '',
  });
  const [result, setResult] = useState<any>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await settleDebt(formData);
      setResult(response.data);
    } catch (error) {
      console.error(error);
      alert('Error settling debt.');
    }
  };

  return (
    <div>
      <h1>Settle Debt</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="From"
          value={formData.from}
          onChange={(e) => setFormData({ ...formData, from: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="To"
          value={formData.to}
          onChange={(e) => setFormData({ ...formData, to: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Expense ID"
          value={formData.expenseID}
          onChange={(e) => setFormData({ ...formData, expenseID: e.target.value })}
          required
        />
        <button type="submit">Settle Debt</button>
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