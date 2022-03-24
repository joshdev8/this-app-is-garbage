import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import transparentLogo from '../../../../public/img/logoTransparent.webp';

const Footer = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Box
					display={'flex'}
					justifyContent={'space-between'}
					alignItems={'center'}
					width={1}
					flexDirection={{ xs: 'column', sm: 'row' }}
				>
					<Box
						display={'flex'}
						component="a"
						href="/"
						title="theFront"
						width={80}
					>
						<Box component={Image} src={transparentLogo} height={1} width={1} />
					</Box>
					<Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
						<Box marginTop={1} marginRight={2}>
							<Link
								underline="none"
								component="a"
								href="/"
								color="text.primary"
								variant={'subtitle2'}
							>
								Home
							</Link>
						</Box>
						<Box marginTop={1} marginRight={2}>
							<Link
								underline="none"
								component="a"
								href="https://www.epa.gov/recycle/recycling-basics"
								target="_blank"
								color="text.primary"
								variant={'subtitle2'}
							>
								Why is Recycling Important?
							</Link>
						</Box>
						<Box marginTop={1}>
							<Link href="/contact" to="/contact" passHref underline="none">
								<Button
									variant="outlined"
									sx={{
										color: 'text.primary',
										display: 'flex',
										alignItems: 'center',
									}}
								>
									Contact
								</Button>
							</Link>
						</Box>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12}>
				<Typography
					align={'center'}
					variant={'subtitle2'}
					color="text.secondary"
					gutterBottom
				>
					&copy; This App is Garbage 2.0 - 2022
				</Typography>
				<Typography
					align={'center'}
					variant={'caption'}
					color="text.secondary"
					component={'p'}
				>
					Save the planet
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Footer;
