import React from 'react';
import Layout from '../shared/Layout';
import DmWidget from '../widget/DmWidget';
import './Dm.css'
// M
function Dm() {
  return (
    <Layout>
      <div className='dm-container'>
        <DmWidget/>
        <div className='dm-containerDetails'></div>
      </div>
      <div className='dm-premium'></div>
    </Layout>
  )
}

export default Dm;
