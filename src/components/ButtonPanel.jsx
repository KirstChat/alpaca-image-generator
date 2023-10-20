const ButtonPanel = ({ buttons, buttonType, onClick, type }) => {
	return (
		<div className={`alpaca-generator__buttons-wrapper alpaca-generator__buttons-wrapper--${type}`}>
			<div className='alpaca-generator__buttons-list'>
				{buttons.map(button => (
                    <button
                        className={`alpaca-generator__button alpaca-generator__button--${button} ${
                            buttonType === 'background' && `alpaca-generator__button--background`
                        }`}
                        data-button-type={buttonType}
                        data-button={button}
                        key={`${button}-button`}
                        onClick={onClick}
                        >
                        {buttonType && buttonType === 'background' ? '' : button}
                    </button>
				))}
			</div>
		</div>
	);
};

export default ButtonPanel;
