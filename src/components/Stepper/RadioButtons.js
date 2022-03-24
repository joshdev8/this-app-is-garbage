import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';

const ControlledRadioButtonsGroup = ({
	label,
	options,
	handleChange,
	value,
}) => {
	const handleOnChange = event => {
		handleChange(event.target.value);
	};

	return (
		<FormControl>
			<FormLabel id="demo-controlled-radio-buttons-group">{label}</FormLabel>
			<RadioGroup
				aria-labelledby="demo-controlled-radio-buttons-group"
				name="controlled-radio-buttons-group"
				value={value}
				onChange={handleOnChange}
			>
				{options &&
					options.map(option => (
						<FormControlLabel
							key={option}
							value={option}
							control={<Radio />}
							label={option}
						/>
					))}
			</RadioGroup>
		</FormControl>
	);
};

ControlledRadioButtonsGroup.propTypes = {
	options: PropTypes.arrayOf(PropTypes.string).isRequired,
	label: PropTypes.string.isRequired,
	handleChange: PropTypes.func.isRequired,
	value: PropTypes.string,
};
ControlledRadioButtonsGroup.defaultProps = {
	value: '',
};

export default ControlledRadioButtonsGroup;
