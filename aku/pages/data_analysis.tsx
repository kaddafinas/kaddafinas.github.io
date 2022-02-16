import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import projectImage from '../public/code.jpg'

const DataAnalysis: NextPage = () => {
  return (
    <div>
      <Image src={projectImage}/>
      <div className='mt-4'>
        </div>
      <div className='mt-4'>
        <Link href='/'>
                <a className="font-bold underline hover:text-indigo-600">Back</a>
                </Link></div>
  </div>
      )
}

export default DataAnalysis
