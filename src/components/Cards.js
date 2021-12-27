import React from 'react'
import CardItem from './CardItem'
import './Cards.css';

function Cards() {
		return (
				<div className="cards">
					<h1>:)</h1>
					<div className="cards__container">
						<div className="cards__wrapper">
							<ul className="cards__items">
								<CardItem 
									src="images/img-9.jpg"
									text="sdkfkds kdjklsdf odsfkpdokfpdsokf ldsfk pdkfodksfopdkf"
									label="sdksadkpsa dpsádk dsap sp´dkpsdk sp´dkpsdkasp´dsk"
									path="/services"
								/>
								<CardItem 
									src="images/img-2.jpg"
									text="sdkfkds kdjklsdf o"
									label="sdksadkpsa dpsád"
									path="/services"
								/>
							</ul>
							<ul className="cards__items">
								<CardItem 
									src="images/img-3.jpg"
									text="sdkfkds kdjklsdf odsfkpdokfpdsokf ldsfk pdkfodksfopdkf"
									label="sdksadkpsa dpsádk dsap sp´dkpsdk sp´dkpsdkasp´dsk"
									path="/services"
								/>
								<CardItem 
									src="images/img-4.jpg"
									text="sdkfkds kdjklsdf o"
									label="sdksadkpsa dpsád"
									path="/products"
								/>
								<CardItem 
									src="images/img-8.jpg"
									text="sdkfkds kdjklsdf o"
									label="sdksadkpsa dpsád"
									path="/sign-up"
								/>
							</ul>
						</div>
					</div>
				</div>
		);
}

export default Cards
