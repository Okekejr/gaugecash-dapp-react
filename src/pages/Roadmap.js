import React from 'react';
import Layout from '../components/Layout';
import FloatingButton from '../components/FloatingButton'; 
import roadmapimage from '../static/Figma-roadmap.svg'

// CSS IMPORT //
import '../styles/roadmap.css';

export default function roadmap() {
    return (
        <Layout>
            <div>
                <FloatingButton />
                {/* Header */}
                <h1>Roadmap</h1>

                {/* Roadmap Tree */}
                <div className='roadmapCont'>
                    <img className='roadmapImage' src={roadmapimage} alt='roadmap' />
                </div>
            </div>
        </Layout>
        
    )
}
