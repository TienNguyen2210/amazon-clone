import React from 'react';
import './Home.css';
import Product from './Product.js';

function Home() {
  return (
    <div className='home'>
         <div className="home_container">
            <img className="home_image"
            src="https://pbs.twimg.com/media/FBMMfSyVIAYeMmi.jpg:large"
            alt="" />
          
    
			<div className="home_row">
				<Product 
				id='12321341'
				title='The lean startup: How Constant Innovation Creates Radically Successful Businesses Paperback'
				price={29.99}
				image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
				rating={5}
				/>

				<Product 
				id="49538094"
				title="UtechSmart Venus Pro RGB Wireless MMO Gaming Mouse, 16,000 DPI Optical Sensor, 2.4 GHz Transmission Technology, 
				Ergonomic Design, 16M Chroma RGB Lighting, 16 programmable Buttons, Up to 70 Hours"
				price={25.99}
				rating={4}
				image="https://m.media-amazon.com/images/I/61EoZYj1SjL._AC_SX679_.jpg"
				/>
			</div>
				
			<div className="home_row">
				<Product 
					id='49033850'
					title="Apple Watch Series 9 [GPS 41mm] Smartwatch with Starlight Aluminum Case with Starlight Sport Band S/M. 
					Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display"
					price={98.99}
					image="https://m.media-amazon.com/images/I/61fyMOZWp8L._AC_SX522_.jpg"
					rating={3}
					/>

					<Product 
					id="23445930"
					title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
					price={98.99}
					rating={5}
					image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>

					<Product 
					id="3245123123"
					title="New Apple iPad Pro (12.3-inch), Wi-Fi, 128GB) - Silver (4th Gerneration)"
					price={598.99}
					rating={4}
					image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
					/>
					
			</div>

			<div className="home_row">
			<Product 
					id='90829332'
					title="Hisense 75-Inch Class U7 Series Mini-LED ULED 4K UHD Google Smart TV (75U7K, 2023 Model) - 
					QLED, Native 144Hz, 1000-Nit, Dolby Vision IQ, 
					Full Array Local Dimming, Game Mode Pro, Alexa Compatibility"
					price={997.99}
					image="https://m.media-amazon.com/images/I/81uKxud3BrL._AC_SX679_.jpg"
					rating={3}
					/>
			</div>
		</div>
    </div>
  )
}

export default Home