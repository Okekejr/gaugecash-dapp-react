import React from 'react';

import Layout from '../components/Layout';
import FloatingButton from '../components/FloatingButton';

import YouTubePlayer from 'react-player/youtube';
import ChainlinkTweet2 from '../static/Chainlink-tweet2.svg';
import ChainlinkTweet from '../static/Chainlink-tweet.svg';
import Coincodex from '../static/Coincodex.svg';
import GIF from '../static/Banner_Febrero 22.gif';
import AMA from '../static/ama.svg';

// CSS imports
import '../styles/blog.css';

export default function Blog() {
    return (
        <Layout>
            <div className='gifBanner'>
                <img className='gifImg' src={GIF} alt='GIF banner'></img>
            </div>
            <FloatingButton />
            {/* Roadmap GIF Banner */}
            <div className='heroButton'>
                <a className='gifButton' href='/roadmap'>
                    ROADMAP<i class="fas fa-arrow-right iconGif"></i>
                </a>
            </div>
            <div className='blogContents'>
                <div className='contents'>
                    <div>
                        <h4>GAUGECASH AMA February 15th</h4>
                        <img className='tweetImg' src={AMA} alt='Chainlink AMA' />
                        <p className='contentText'>GAUGECASH's AMA at CHAINLINK's Telegram channel, Held on Feb 15th, 2022</p>
                        <button id='contentButton1'><a href='https://gaugecash.medium.com/gaugecashs-ama-at-chainlink-s-telegram-channel-dc16470967b8' rel="noopener noreferrer" target="_blank">Read more</a></button>
                    </div>
                </div>
                <div className='contents'>
                    <h4>Chainlink February 8th, 2022</h4>
                    <img className='tweetImg' src={ChainlinkTweet2} alt='chainlink tweet' />
                    <p className='contentText'>@GAUGECASH has integrated #Chainlink Keepers on #Ethereum & #Polygon mainnets</p>
                    <button id='contentButton1'><a href='https://gaugecash.medium.com/gaugecash-integrates-chainlink-keepers-to-decentralize-automation-of-novel-liquidity-pool-17ec5d41cfa8' rel="noopener noreferrer" target="_blank">Read more</a></button>
                </div>
                <div className='contents'>
                    <h4>FAQ from investors on Dec 31st</h4>
                    <div className='video'>
                        <YouTubePlayer
                        url='https://youtu.be/LZRc5b7sxVI' width={350} height={200} />
                    </div>
                    <p className='contentText'>FAQ from investors answered by the founder Manuel Blanco on Dec 31st</p>
                    <button id='contentButton1'><a className='youtubelink' href='https://youtu.be/LZRc5b7sxVI' rel="noopener noreferrer" target="_blank">Watch now</a></button>
                </div>
                
            </div>
            <div className='blogContents'>
                <div className='contents'>
                    <h4>FAQ from investors on Nov 21st</h4>
                    <div className='video'>
                        <YouTubePlayer
                        url='https://youtu.be/rUKm2mmS8T4' width={350} height={200} />
                    </div>
                    <p className='contentText'>FAQ from investors answered by the founder Manuel Blanco on Nov 21st</p>
                    <button id='contentButton1'><a className='youtubelink' href='https://youtu.be/rUKm2mmS8T4' rel="noopener noreferrer" target="_blank">Watch now</a></button>
                </div>
                <div className='contents'>
                    <h4>Keynote Dubai 2021</h4>
                    <div className='video'>
                        <YouTubePlayer
                        url='https://youtu.be/Rp1vrI61mKo' width={350} height={200} />
                    </div>
                    <p className='contentText'>The future with decentralized monetary systems is a tech talk delivered by Manuel Blanco (Founder, GAUGECASH) at World Blockchain Summit - Dubai 2021.</p>
                    <button id='contentButton'><a className='youtubelink' href='https://youtu.be/Rp1vrI61mKo' rel="noopener noreferrer" target="_blank">Watch now</a></button>
                </div>
                <div className='contents'>
                    <h4>PRESS COIN CODEX</h4>
                    <img className='tweetImg' src={Coincodex} alt='chainlink tweet' />
                    <p className='contentText'>GAUGECASH, The First Decentralized Monetary System.</p>
                    <button id='contentButton1'><a href='https://coincodex.com/article/11102/gaugecash-the-first-decentralized-monetary-system-is-upgrading-its-oracle-mechanism-to-chainlink-before-going-live/' rel="noopener noreferrer" target="_blank">Learn more</a></button>
                </div>
            </div>
            <div className='blogContents'>
                <div className='contents'>
                    <h4>Chainlink's Announcement</h4>
                    <img className='tweetImg' src={ChainlinkTweet} alt='chainlink tweet' />
                    <p className='contentText'>Decentralized monetary system   @GAUGECASH to upgrade its oracle solution to #Chainlink.</p>
                    <button id='contentButton1'><a href='https://twitter.com/chainlink/status/1384845157971939331' rel="noopener noreferrer" target="_blank">Read more</a></button>
                </div>
            </div>
        </Layout>
    )
}
