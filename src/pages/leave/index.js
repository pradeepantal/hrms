import { useEffect } from 'react';
import { getLoginSession } from '../../helper/helper';
import { useRouter } from 'next/router';

export default function Leave() {
  const router = useRouter();

  useEffect(() => {
    const userData = getLoginSession();

    if (!userData?.isLoggedIn) {
      router.push('/login');
    }
  }, [router]);

  return (
    <div>
      {getLoginSession()?.isLoggedIn && <div>LEAVE PAGE</div>}
    </div>
  );
}
