import Link from 'next/link';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <nav>
        <Link href="/create-expense">Create Expense</Link> | 
        <Link href="/get-expense">Get Expense</Link> | 
        <Link href="/split-expense">Split Expense</Link> | 
        <Link href="/settle-debt">Settle Debt</Link> | 
        <Link href="/query-all-debts">Query All Debts</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
