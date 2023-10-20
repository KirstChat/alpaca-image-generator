const Buttons = ({ buttons, buttonType, onClick }) => {
	return (
		<div className='alpaca-generator__buttons-list' role='tablist' aria-labelledby='styles-tablist'>
			{buttons.map((button, index) => (
				<button 
					className={`alpaca-generator__button alpaca-generator__button--${button} ${
						buttonType === 'background' && `alpaca-generator__button--background`
					}`}
					data-button-type={buttonType}
					data-button={button}
					key={`${button}-button`}
					id={button}
					onClick={onClick}
					aria-controls={`tabpanel-${index}`}
					role='tab'>
					{buttonType && buttonType === 'background' ? '' : button}
				</button>
			))}
		</div>
	);
};

export default Buttons;
