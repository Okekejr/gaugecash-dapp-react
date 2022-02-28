import React from 'react'
import Layout from '../components/Layout';
import FloatingButton from '../components/FloatingButton';
import investOne from '../static/invest 1.svg';
import investTwo from '../static/invest 2.svg';
import investThree from '../static/invest 3.svg';

// CSS IMPORT //
import '../styles/about.css';

export default function about() {
    return (
        <Layout>
            <div>
                {/* Hero Text */}
                <h1 className='about-h1'>Why you should invest in GAUGECASH?</h1>
                <FloatingButton />

                <section id='investSection'>
                    <div className='investContents'>
                        <img className='investImg1' src={investOne} alt="The problem" />
                        <p className='investText'>In the last century-plus, there have been around thirty Non-Domestic Currency Debt Crisis (typically inflationary deleveraging), causing millions of people to lose their wealth and transactional value. <br /><br /> Within the crypto-space, the solution has been pegging tokens to the USD which doesn't solve the problem of Decentralization and long-term stability of the Asset.
                        </p>
                    </div>
                    <div class="investContents">
                        <img className='investImg2' src={investTwo} alt="What makes Guagcash special" />
                        <p className='investText'>We have created an Index coming from the Final Market Making of the Forex Market that is more stable than any other currency in the world including Gold and Silver. Stability means less volatility on average on any single period of time. <br /><br /> Also, we have backed up the value of the GAUGECASH by the blockchain class in itself, taking advantage of its economic scarcity property.
                        </p>
                    </div>
                    <div class="investContents">
                        <img className='investImg1' src={investThree} alt="What Gaugecash offers" />
                        <p className='investText'>This creates a self-reinforcing economic system that brings unbelievable value for investors and users in a Decentralized and Immutable Fashion. <br /><br /> This can be the most profitable venture in history for investors around the world, just because we are after the largest financial market in the world, the EUR/USD who transact 6 Trillion USD per day. 
                        </p>
                    </div>
                </section>
            </div>
        </Layout>     
    )
}
