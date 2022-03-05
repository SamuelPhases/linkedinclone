import React from 'react';

import Layout from '../shared/Layout';
import JobNav from '../components/JobNav';
import './Job.css';
import JobSeekerWidget from '../widget/JobSeekerWidget';
import JobWidget from '../widget/JobWidget';
import RecentJobWidget from '../widget/RecentJobWidget';



function Job() {
  return (
    <Layout>
      <aside className='job-nav'>
        <JobNav/>
      </aside>
      <div className='job-container'>
        <div className='job-containerRecent'>
          <RecentJobWidget/>
        </div>
        <div className='job-containerCards'>
          <JobWidget/>
        </div>
      </div>
      <aside className='job-seeker'>
        <JobSeekerWidget/>
      </aside>
    </Layout>
  )
}

export default Job;
