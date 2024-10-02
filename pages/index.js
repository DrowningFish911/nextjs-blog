import Divider from '../components/Divider';
import Layout from '../components/Layout';
import Image from 'next/image'

export default function Index() {
  return (
    <Layout title="">
      <div className="flex w-3/5 mx-auto">
        <img className="mask" width={200} src='/images/polar_bear.png'></img>
      </div>
      <div className='flex justify-center'>
        <div className='w-3/5'>
          <p className='text-5xl pl-10'>Welcome, I'm Coleman </p>
          <p className='text-2xl px-20 pt-5'>I am a software developer with too many hobbies. I love to create - apps, websites, screenwritings... Let's learn some new things together.</p>
          <p className='text-2xl px-20 pt-5'>Why the polar bear? I like them.</p>
        </div>
      </div>
    </Layout>
  )
}
