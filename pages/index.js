import Divider from '../components/Divider';
import Layout from '../components/Layout';
import Image from 'next/image'

export default function Index() {
  return (
    <Layout title="">
      <div className="flex w-1/2 mx-auto">
        <img className="mask" width={200} src='/images/polar_bear.png'></img>
      </div>
      <div className='flex justify-center'>
        <div className='w-1/2'>
          <p className='text-5xl'>Welcome, I'm Coleman </p>
          <p className='text-2xl pl-20 pt-5'>I am a software developer with too many hobbies. I love to create - apps, websites, screenwritings... Let's learn some new things together.</p>
        </div>
      </div>
    </Layout>
  )
}
