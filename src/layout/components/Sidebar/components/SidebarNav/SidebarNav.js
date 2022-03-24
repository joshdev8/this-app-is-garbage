import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import transparentLogo from '../../../../../../public/img/thinLogo.webp';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
	const { recycling, composting } = pages;

	return (
		<Box>
			<Box width={1} paddingX={2} paddingY={1}>
				<Box
					display={'flex'}
					component="a"
					href="/"
					title="This app is Garbage"
					width={{ xs: 210, md: 120 }}
				>
					<Box component={Image} src={transparentLogo} height={1} width={1} />
				</Box>
			</Box>
			<Box paddingX={2} paddingY={2}>
				<Box>
					<NavItem title={'Recycling'} items={recycling} />
				</Box>
				<Box>
					<NavItem title={'Composting'} items={composting} />
				</Box>
				<Box marginTop={1}>
					<Button
						size={'large'}
						variant="contained"
						color="primary"
						fullWidth
						component="a"
						href="/contact"
						passHref
					>
						Contact
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

SidebarNav.propTypes = {
	pages: PropTypes.object.isRequired,
};

export default SidebarNav;
