import React from 'react';
import NetworkCard from '../components/NetworkCard';
import Layout from '../shared/Layout';
import InvitationWidget from '../widget/InvitationWidget';
import './Network.css'



function Network() {
  return (
    <Layout>
      <aside className='network-nav'>
        <NetworkCard/>
      </aside>
      <div className='network-content'>
        <div className='network-content__body'>
          <div className='network-content__bodyInvite'>
            <InvitationWidget/>
          </div>
          <div className='network-content__bodyCard'>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Network;
