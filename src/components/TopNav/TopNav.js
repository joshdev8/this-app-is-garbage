import React from 'react';
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import Link from 'components/Link';
// import Typography from '@mui/material/Typography';

import ThemeModeToggler from 'components/ThemeModeToggler';

const TopNav = ({ colorInvert = false }) => {
	return (
		<Box display={'flex'} justifyContent={'flex-end'} alignItems={'center'}>
			<Box marginRight={{ xs: 1, sm: 2 }}>
				<Link href="/" to="/" passHref underline="none">
					<Button
						sx={{
							color: colorInvert ? 'common.white' : 'text.primary',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						Home
					</Button>
				</Link>
			</Box>
			<Box marginRight={{ xs: 1, sm: 2 }}>
				<Link href="/about" to="/about" passHref underline="none">
					<Button
						sx={{
							color: colorInvert ? 'common.white' : 'text.primary',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						About
					</Button>
				</Link>
			</Box>
			<Box marginRight={{ xs: 1, sm: 2 }}>
				<Link href="/contact" to="/contact" passHref underline="none">
					<Button
						sx={{
							color: colorInvert ? 'common.white' : 'text.primary',
							display: 'flex',
							alignItems: 'center',
						}}
					>
						Contact
					</Button>
				</Link>
			</Box>
			<Box>
				<ThemeModeToggler />
			</Box>
		</Box>
	);
};

TopNav.propTypes = {
	colorInvert: PropTypes.bool,
};

export default TopNav;
