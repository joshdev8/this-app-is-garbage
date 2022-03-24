import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { alpha, useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import Image from 'next/image';
import Link from 'components/Link';
import transparentLogo from '../../../../public/img/thinLogo.webp';

import { NavItem } from './components';

const Topbar = ({ onSidebarOpen, pages, colorInvert = false }) => {
	const theme = useTheme();
	const { recycling, composting } = pages;

	return (
		<Box
			display={'flex'}
			justifyContent={'space-between'}
			alignItems={'center'}
			width={1}
		>
			<Box
				display={'flex'}
				component={Link}
				href="/"
				passHref
				title="This App is Garbage 2.0"
				width={{ xs: 100, md: 120 }}
			>
				<Box component={Image} src={transparentLogo} height={1} width={1} />
			</Box>
			<Box sx={{ display: { xs: 'none', md: 'flex' } }} alignItems={'center'}>
				<Box>
					<NavItem
						title={'Recycling'}
						id={'recycling-pages'}
						items={recycling}
						colorInvert={colorInvert}
						external
					/>
				</Box>
				<Box marginLeft={4}>
					<NavItem
						title={'Composting'}
						id={'composting-pages'}
						items={composting}
						colorInvert={colorInvert}
						external
					/>
				</Box>
				<Box marginLeft={4}>
					<Button
						variant="contained"
						color="primary"
						component="a"
						target="blank"
						href="https://cswd.net/chittenden-county-solid-waste-facilities/drop-off-centers/"
						size="large"
					>
						Find Waste Facilities
					</Button>
				</Box>
			</Box>
			<Box sx={{ display: { xs: 'block', md: 'none' } }} alignItems={'center'}>
				<Button
					onClick={() => onSidebarOpen()}
					aria-label="Menu"
					variant={'outlined'}
					sx={{
						borderRadius: 2,
						minWidth: 'auto',
						padding: 1,
						borderColor: alpha(theme.palette.divider, 0.2),
					}}
				>
					<MenuIcon />
				</Button>
			</Box>
		</Box>
	);
};

Topbar.propTypes = {
	onSidebarOpen: PropTypes.func,
	pages: PropTypes.object,
	colorInvert: PropTypes.bool,
};

export default Topbar;
