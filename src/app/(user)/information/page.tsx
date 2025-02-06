import { MdEmail } from 'react-icons/md';

import { getUserInfo } from '@/actions/auth.action';
import LoginUserForm from '@/components/LoginUserForm';
import { transformData } from '@/lib/utils';

export default async function SignIn() {
 


  const userInfo = await getUserInfo();
  const formatData = transformData(userInfo)
  return (
    <div className="flex items-center justify-center bg-gradient-to-b from-blue-100 to-blue-50">


        <LoginUserForm data={formatData} />

      
    </div>
  );
}