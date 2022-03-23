import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';

export default function ErrorAlert({ message }) {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity="error">
				<AlertTitle>Error</AlertTitle>
				{message}
			</Alert>
		</Stack>
	);
}

ErrorAlert.propTypes = {
	message: PropTypes.string,
};
ErrorAlert.defaultProps = {
	message: 'Error',
};
