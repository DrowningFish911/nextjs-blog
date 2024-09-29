import Divider from '../components/Divider';
import Layout from '../components/Layout';
import Image from 'next/image'

export default function Index() {
  return (
    <Layout title="Coleman Manchester">
      <div className="flex justify-center">
        <img className="mask mask-hexagon-2" width={200} src='/images/profile.jpeg'></img>
      </div>
      <div className='flex justify-center'>
        <div className='w-3/5'>
          <p className='text-3xl'>Software Developer</p>
          <p className='text-2xl pl-10'>Builder through Technology Succeeding through Constant Learning and Taking Myself Very Seriously</p>
          <Divider></Divider>
        </div>
      </div>
    </Layout>
  )
}
