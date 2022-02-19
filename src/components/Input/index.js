import {
	FormGroup,
	Label,
	Input
} from './styles';
import PropTypes from 'prop-types';

export default function InputComponent(props) {
	const { noMargin,label, id, type, min, max, step, name, value, handleCurrencyChange  } = props;
	return (
		<FormGroup noMargin={noMargin}>
			{label && <Label htmlFor={id}>{label}</Label>}
			{type === 'number' ?
				<Input
					type={type}
					id={id}
					min={min}
					max={max}
					step={step}
					onChange={e => handleCurrencyChange(e.target, name)}
					value={value}
				/> :
				<Input type={type} id={id} noMargin={noMargin} />
			}
		</FormGroup>
	)
};

InputComponent.propTypes = {
	noMargin: PropTypes.bool,
	label: PropTypes.string,
	id: PropTypes.string,
	type: PropTypes.string,
	min: PropTypes.string,
	max: PropTypes.string,
	step: PropTypes.string,
	name: PropTypes.string,
	value: PropTypes.number,
	handleCurrencyChange: PropTypes.func
};
