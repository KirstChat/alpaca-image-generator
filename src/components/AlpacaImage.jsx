import PropTypes from 'prop-types';

const AlpacaImage = ({ alpacaImage }) => {
    return (
        <div className='alpaca-generator__images js-alpaca-image'>
            {Object.keys(alpacaImage).map((image, index) =>
                alpacaImage[image] !== 'none' ? (
                    <img
                        className={`alpaca-generator__image alpaca-generator__image--${image} js-image-${image}`}
                        key={index}
                        src={`images/${image}/${alpacaImage[image]}.png`}
                        alt={`The alpaca's ${image}`}
                    />
                ) : null
            )}
        </div>
    );
};

AlpacaImage.propTypes = {
    alpacaImage: PropTypes.object,
};

export default AlpacaImage;
