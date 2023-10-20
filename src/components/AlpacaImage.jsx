const AlpacaImage = ({ alpacaImage }) => {
	return (
		<div className='alpaca-generator__images js-alpaca-image'>
			{Object.keys(alpacaImage).map(
				(image, index) =>
					alpacaImage[image] && (
						<img
							className={`alpaca-generator__image alpaca-generator__image--${image}`}
							key={index}
							src={`src/assets/images/${image}/${alpacaImage[image]}.png`}
							alt={`The alpaca's ${image}`}
						/>
					)
			)}
			<img className='alpaca-generator__image alpaca-generator__image--nose' src='src/assets/images/nose.png' alt="The alpaca's nose" />
		</div>
	);
};

export default AlpacaImage;
