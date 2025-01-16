import api from './api';
import { CreateExpenseArgs, GetExpenseArgs, SettleDebtArgs, APIResponse } from "../app/types/splitwise';

export const createExpense = async (data: CreateExpenseArgs): Promise<APIResponse<any>> => {
  return api.post('/invoke/hvGiAdp4xcNYsY5fwuUPAfiV7fSilHDB1723447369891/CreateExpense', {
    network: 'DEVNET',
    blockchain: 'KALP',
    walletAddress: '2a0f760f5458a5ba7ff36dc1f26f817bbe14ec11',
    args: data,
  });
};

export const getExpense = async (expenseID: string): Promise<APIResponse<any>> => {
  return api.post('/query/hvGiAdp4xcNYsY5fwuUPAfiV7fSilHDB1723447369891/GetExpense', {
    network: 'DEVNET',
    blockchain: 'KALP',
    walletAddress: '2a0f760f5458a5ba7ff36dc1f26f817bbe14ec11',
    args: { expenseID },
  });
};

export const splitExpense = async (expenseID: string): Promise<APIResponse<any>> => {
  return api.post('/invoke/hvGiAdp4xcNYsY5fwuUPAfiV7fSilHDB1723447369891/SplitExpense', {
    network: 'DEVNET',
    blockchain: 'KALP',
    walletAddress: '2a0f760f5458a5ba7ff36dc1f26f817bbe14ec11',
    args: { expenseID },
  });
};

export const settleDebt = async (data: SettleDebtArgs): Promise<APIResponse<any>> => {
  return api.post('/invoke/hvGiAdp4xcNYsY5fwuUPAfiV7fSilHDB1723447369891/SettleDebt', {
    network: 'DEVNET',
    blockchain: 'KALP',
    walletAddress: '2a0f760f5458a5ba7ff36dc1f26f817bbe14ec11',
    args: data,
  });
};

export const queryAllDebts = async (): Promise<APIResponse<any>> => {
  return api.post('/query/hvGiAdp4xcNYsY5fwuUPAfiV7fSilHDB1723447369891/QueryAllDebts', {
    network: 'DEVNET',
    blockchain: 'KALP',
    walletAddress: '2a0f760f5458a5ba7ff36dc1f26f817bbe14ec11',
    args: {},
  });
};