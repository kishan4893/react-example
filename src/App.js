import React, { useState } from 'react';
import './App.css';
import icontoggle from './images/ICON-MENU.svg';
import iconback from './images/ICON-MORE.svg';
import Bitcoin from './images/Bitcoin.svg';
import Arrow from './images/ARROW.svg';
import Sell from './images/Sell.svg';
import Buy from './images/Buy.svg';
import EXPLORE from './images/ICON-EXPLORE.svg';
import NOTIFICATION from './images/ICON-NOTIFICATION.svg';
import SETTINGS from './images/ICON-SETTINGS.svg';
import WALLET from './images/ICON-WALLET.svg';
import Chart from './Chart';
import Tabs from './Tabs';
function App() {
	const [isDivVisible, setDivVisible] = useState(false);
	const [isDivDropdown, setDivDropdown] = useState(false);
  const handleDivToggle = () => {
    setDivVisible(!isDivVisible);
  };
  const handleDropdown = () => {
    setDivDropdown(!isDivDropdown);
  };
  return (
    <div className="Mobile">
      <header className="Mobile-header">
	  	<div className="Mobile-title">
			<div className="back-btn">
				<a className="back-link" href=""><img src={icontoggle} alt="toggle" /></a>
			</div>
			<h1 className="Heading">Bitcoin Wallet1</h1>
			<div className="Header-toogle">
				<a className="toogle-link" href onClick={handleDropdown}><img src={iconback} alt="toggle" /></a>
				<div className={`Dropdown ${isDivDropdown ? 'visible-div' : 'hidden-div'}`}>
					<ul>
						<li><a href="#">Edit</a></li>
						<li><a href="#">Courier Info</a></li>
						<li><a href="#">Share</a></li>
						<li><a href="#">Remove</a></li>
					</ul>
				</div>
			</div>
		</div>
      </header>
	  <div className="Wallet Common-padding">
	  <div className="Common-widget">
	  	<div className="Wallet-meta">
			<div className="Currency">
				<span><img src={Bitcoin} alt="Bitcoin" /></span>
				<span>Bitcoin</span>
			</div>
			<div className="Currency-field">
				BTC
			</div>
		</div>
		<div className="Wallet-price">3.529020 BTC</div>
		<div className="Wallet-meta">
			<div className="USD-price">$19.153 USD</div>
			<div className="price-portfolio"><span className="status">- 2.32%</span></div>
		</div>
		<div className="Wallet-addon">
			<a className="toogle-link" href onClick={handleDivToggle}><img src={Arrow} alt="Arrow" /></a>
			<div className={`toggle-div ${isDivVisible ? 'visible' : 'hidden'}`}>
					<div className="btn-sec">
						<div className="btn-item buy"><a href="#">Buy BTC</a></div>
						<div className="btn-item sell"><a href="#">Sell BTC</a></div>
					</div>
			  </div>
		</div>
		</div>
	  </div>
	  <Tabs>
        <div label="Day">
           <div className="Wallet Common-padding">
	  <div className="Common-widget">
	  		<div className="price-sec">
						<div className="btn-item low">Lower: $4.895</div>
						<div className="btn-item high">Higher: $6.857</div>
					</div>
	  		<div className="chart">
	        	<Chart />
			</div>
			</div>
			</div>
        </div>
        <div label="Week">
           <div className="Wallet Common-padding">
	  <div className="Common-widget">
	  		<div className="price-sec">
						<div className="btn-item low">Lower: $5.895</div>
						<div className="btn-item high">Higher: $6.857</div>
					</div>
	  		<div className="chart">
	        	<Chart />
			</div>
			</div>
			</div>
        </div>
        <div label="Month">
           <div className="Wallet Common-padding">
	  		<div className="Common-widget">
	  		<div className="price-sec">
						<div className="btn-item low">Lower: $7.895</div>
						<div className="btn-item high">Higher: $10.857</div>
					</div>
	  		<div className="chart">
	        	<Chart />
			</div>
			</div>
			</div>
        </div>
		<div label="Year">
           <div className="Wallet Common-padding">
	  		<div className="Common-widget">
	  		<div className="price-sec">
						<div className="btn-item low">Lower: $34.895</div>
						<div className="btn-item high">Higher: $56.857</div>
					</div>
	  		<div className="chart">
	        	<Chart />
			</div>
			</div>
			</div>
        </div>
      </Tabs>

	  <div className="Wallet-action Common-padding">
	  	<div className="Wallet-buy Wallet-action-item">
			<div className="Common-widget">
				<div className="action-icon"><a href=""><img src={Buy} alt="Buy BTC" /></a></div>
				<div className="action-name"><a href="">Buy BTC</a></div>
			</div>
		</div>
		<div className="Wallet-buy Wallet-action-item">
			<div className="Common-widget">
				<div className="action-icon"><a href=""><img src={Sell} alt="Sell BTC" /></a></div>
				<div className="action-name"><a href="">Sell BTC</a></div>
			</div>
		</div>
	  </div>
	  <div className="Menu-sticky">
		<ul>
		<li><a href="#"><img src={WALLET} alt="WALLET" /></a></li>
		<li><a href="#"><img src={NOTIFICATION} alt="NOTIFICATION" /></a></li>
		<li><a href="#"><img src={EXPLORE} alt="EXPLORE" /></a></li>
		<li><a href="#"><img src={SETTINGS} alt="SETTINGS" /></a></li>
		</ul>
	</div>
    </div>
	
  );
}

export default App;
