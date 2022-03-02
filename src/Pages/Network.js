import React from 'react';
import ConnectCard from '../components/ConnectCard';
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
            <div className='network-content__bodyCardHeader'>
              <h4>People you may know from Federal University Of Agriculture, Abeokuta</h4>
              <button>See all</button>
            </div>
            <div className='network-content__bodyCardGrid'>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
              <ConnectCard/>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Network;
