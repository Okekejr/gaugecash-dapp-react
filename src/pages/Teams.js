import React from 'react';
import FloatingButton from '../components/FloatingButton';
import Layout from '../components/Layout';

import chainlinkLogo from '../static/chainlink_logo.svg';
import polygonLogo from '../static/polygon02_logo.svg';
import linkpoolLogo from '../static/linkPool_logo.svg';
import currencyLayer from "../static/currencylayer_logo.svg";
import oneForge from "../static/1forge_logo.svg";
import openExchange from "../static/open_exchange_rates_logo.svg";
import avalanche from "../static/avalanche.svg";
import linkedIn from "../static/linkedlin icon.svg";
import fede from "../static/fede.png";
import manuel from '../static/manuel.png';

// CSS IMPORT //
import '../styles/teams.css';

export default function teams() {
    return (
        <Layout>
            <div>
                {/* Tech Team */}
                <section id='Team'>
                    {/* Header */}
                    <h1>TECH TEAM</h1>

                    <FloatingButton />

                    <div className='techTeam'>
                        <div className='logos'>
                            <a href="https://chain.link/" rel="noreferrer" target="_blank"><img className='logoImg' src={chainlinkLogo} alt="chainlink logo" /></a>
                            <a href="https://polygon.technology/" rel="noreferrer" target="_blank"><img className='logoImg' src={polygonLogo} alt="polygon logo" /></a>
                            <a href="https://linkpool.io/" rel="noreferrer" target="_blank"><img className='logoImg' src={linkpoolLogo} alt="linkpool logo" /></a>
                        </div>
                        <div className='logos1'>
                            <a href="https://currencylayer.com/" rel="noreferrer" target="_blank"><img className='logoImg' src={currencyLayer} alt="currencylayer logo" /></a>
                            <a href="https://1forge.com/" rel="noreferrer" target="_blank"><img className='logoImg' src={oneForge} alt="1forge logo" /></a>
                            <a href="https://openexchangerates.org/" rel="noreferrer" target="_blank"><img className='logoImg' src={openExchange} alt="open rates logo" /></a>
                            <a href="https://www.avalabs.org/" rel="noreferrer" target="_blank"><img className='logoImg' src={avalanche} alt="avalanche logo" /></a>
                        </div>
                    </div>

                    {/* Founder Header */}
                    <h1>FOUNDERS</h1>

                    <div className='founders'>
                        <div className='card-team'>
                            <img className='founderImg' src={manuel} alt="MANUEL BLANCO Founder" />
                            <h3 className='iconText'>MANUEL BLANCO</h3>
                            <p className='iconText textSize'>Founder</p>
                            <hr />
                            <a href="https://www.linkedin.com/in/manuel-blanco-appleby-2a61a157/" rel="noreferrer" target="_blank"><img className='linkIcon' src={linkedIn}alt="linkedin icon" /></a>
                        </div>
                        <div class="card-team">
                            <img className='founderImg' src={fede} alt="FEDERICO CHARLES Founder" />
                            <h3 className='iconText'>FEDERICO CHARLES</h3>
                            <p className='iconText textSize'>Co-Founder</p>
                            <hr />
                            <a href="https://www.linkedin.com/in/federicocharles/" rel="noreferrer" target="_blank"><img className='linkIcon' src={linkedIn}alt="linkedin icon" /></a>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
        
    )
}
