import { useRouter } from 'next/router';
import { getLoginSession } from '../../helper/helper'

export default function Home() {
  const router = useRouter();


  const userData = getLoginSession();

  if (!userData) {
    router.push('/leave');
    return null;
  } else {
    router.push('/login');
  }

}

