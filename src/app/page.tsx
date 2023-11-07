import { redirect } from 'next/navigation';

export default function Home() {
  /* protected route here */
  redirect('/home');
  return;
}
