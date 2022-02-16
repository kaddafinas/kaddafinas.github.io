import type { NextPage } from 'next'
import Profile from '../components/profile'
import Project, {ProjectInterface} from '../components/project'

const Home: NextPage = () => {
  

  const projectMetaDataArray = []

  projectMetaDataArray.push(
    {
      title: 'Data Analysis App',
      desc: 'Processes Data in Python',
      linkUrl: '/data_analysis',
      image: '/ux.jpg'
    }
  );
  projectMetaDataArray.push(
    {
      title: 'Data Analysis App',
      desc: 'Processes Data in Python',
      linkUrl: '/data_analysis',
      image: '/dashbord.jpg'
    }
  );
projectMetaDataArray.push(
    {
      title: 'Data Analysis App',
      desc: 'Processes Data in Python',
      linkUrl: '/data_analysis',
      image: '/saham.jpg'
    }
  );

  const projectElements =[];

  for (let i = 0; i < projectMetaDataArray.length; i++) {
    const metaData = projectMetaDataArray[i];
    const element = <Project {...metaData} />;
    projectElements.push(element);
  }

  return (
    <div>

      <Profile />

      <div className='mt-4'>
        {projectElements}
    </div>
    </div>

  )
}

export default Home
