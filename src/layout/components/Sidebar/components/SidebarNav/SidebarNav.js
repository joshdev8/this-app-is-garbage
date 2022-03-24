import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Image from 'next/image';
import Link from 'components/Link';
import transparentLogo from '../../../../../../public/img/thinLogo.webp';

import NavItem from './components/NavItem';

const SidebarNav = ({ pages }) => {
	const { recycling, composting, home } = pages;

	return (
		<Box>
			<Box width={1} paddingX={2} paddingY={1}>
				<Link
					underline="none"
					href="/"
					passHref
					color="text.primary"
					variant={'subtitle2'}
				>
					<Button
						display={'flex'}
						href="/"
						passHref
						title="This app is Garbage"
						width={{ xs: 210, md: 120 }}
					>
						<Box component={Image} src={transparentLogo} height={1} width={1} />
					</Button>
				</Link>
			</Box>
			<Box marginTop={1}>
				<Link
					underline="none"
					href="/"
					passHref
					color="text.primary"
					variant={'subtitle2'}
				>
					<Button
						size={'large'}
						variant="contained"
						color="primary"
						fullWidth
						passHref
					>
						Home
					</Button>
				</Link>
			</Box>
			<Box marginTop={1}>
				<Link
					underline="none"
					href="/find"
					passHref
					color="text.primary"
					variant={'subtitle2'}
				>
					<Button
						size={'large'}
						variant="contained"
						color="primary"
						fullWidth
						passHref
					>
						Can&apos;t find an item?
					</Button>
				</Link>
			</Box>
			<Box marginTop={1}>
				<Link
					underline="none"
					href="/contact"
					passHref
					color="text.primary"
					variant={'subtitle2'}
				>
					<Button
						size={'large'}
						variant="contained"
						color="primary"
						fullWidth
						passHref
					>
						Contact
					</Button>
				</Link>
			</Box>

			<Box paddingX={2} paddingY={2}>
				<Box>
					<NavItem title={'Recycling'} items={recycling} />
				</Box>
				<Box>
					<NavItem title={'Composting'} items={composting} />
				</Box>
			</Box>
		</Box>
	);
};

SidebarNav.propTypes = {
	pages: PropTypes.object.isRequired,
};

export default SidebarNav;
