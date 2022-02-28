import React from 'react'
import FloatingButton from '../components/FloatingButton';
import Layout from '../components/Layout'

// CSS import //
import '../styles/whitepaper.css';

export default function whitepaper() {
    return (
        <Layout>
            <div>
                {/* Header */}
                <h1>Whitepaper</h1>

                <FloatingButton />

                {/* PDF document */}
                <div className='pdfDoc'>
                    <iframe className='doc' src='https://drive.google.com/file/d/130F4fH0J90jahOZyyUnU7EKxo-zhjI6k/preview' width={600} height={1000} />
                </div>

                {/* Download button */}
                <div class="button">
                    <a href="https://drive.google.com/u/0/uc?id=130F4fH0J90jahOZyyUnU7EKxo-zhjI6k&export=download" class="btn">Download whitepaper</a>
                </div>
            </div>
        </Layout>
        
    )
}
