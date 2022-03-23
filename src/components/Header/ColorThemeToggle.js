import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import PropTypes from 'prop-types';

const ColorThemeToggle = ({ changeTheme }) => {
	const theme = useTheme();
	return (
		<Box
			sx={{
				display: 'flex',
				width: '100%',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'primary',
				color: 'text.primary',
				borderRadius: 1,
				p: 3,
			}}
		>
			<IconButton sx={{ ml: 1 }} onClick={changeTheme} color="inherit">
				{theme.palette.mode === 'dark' ? (
					<Brightness7Icon />
				) : (
					<Brightness4Icon />
				)}
			</IconButton>
		</Box>
	);
};

ColorThemeToggle.propTypes = {
	changeTheme: PropTypes.func.isRequired,
};

export default ColorThemeToggle;
