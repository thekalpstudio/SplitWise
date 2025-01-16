import { useState } from 'react';
import { createExpense } from '../utils/splitwise';
import { CreateExpenseArgs } from '../types/splitwise';

export default function CreateExpensePage() {
  const [formData, setFormData] = useState<CreateExpenseArgs>({
    expenseID: '',
    description: '',
    amount: 0,
    payer: '',
    participants: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await createExpense(formData);
      alert(`Expense Created: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error(error);
      alert('Error creating expense.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense ID"
        value={formData.expenseID}
        onChange={(e) => setFormData({ ...formData, expenseID: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={formData.description}
        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) => setFormData({ ...formData, amount: parseInt(e.target.value) })}
        required
      />
      <input
        type="text"
        placeholder="Payer"
        value={formData.payer}
        onChange={(e) => setFormData({ ...formData, payer: e.target.value })}
        required
      />
      <textarea
        placeholder="Participants (comma-separated)"
        value={formData.participants.join(',')}
        onChange={(e) => setFormData({ ...formData, participants: e.target.value.split(',') })}
        required
      ></textarea>
      <button type="submit">Create Expense</button>
    </form>
  );
}