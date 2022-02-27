import React from 'react';
import  FeedWidget from '../widget/FeedWidget'
import  InputWidget from '../widget/InputWidget'
import  ProfileWidget from '../widget/ProfileWidget'
import  RecentWidget from '../widget/RecentWidget'
import  Post from '../components/Post'

import Layout from '../shared/Layout';
import './Home.css'
import PromotedWidgetCard from '../components/PromotedWidgetCard';


function Home() {
  return (
        <Layout>
            <aside className='side-widget'>
                <ProfileWidget />
                <RecentWidget />
            </aside>
            <div className='feed-input__container'>
                <InputWidget />
                <div className='feed-container'>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
            <aside className='side-widget__wide'>
                <FeedWidget />
                <PromotedWidgetCard/>
            </aside>
        </Layout>
    )
}

export default Home;
