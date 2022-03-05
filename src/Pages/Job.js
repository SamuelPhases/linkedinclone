import React from 'react';

import Layout from '../shared/Layout';
import JobNav from '../components/JobNav';
import './Job.css';



function Job() {
  return (
    <Layout>
      <aside className='job-nav'>
        <JobNav/>
      </aside>
      <div className='job-container'>
        <div className='job-containerRecent'>
          <div className='job-containerRecent__header'>
            <h4></h4>
          </div>
        </div>
        <div className='job-container'></div>
      </div>
    </Layout>
  )
}

export default Job;
