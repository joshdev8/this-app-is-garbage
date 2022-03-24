import * as React from 'react';
import { Box } from '@mui/material';
import Main from 'layout/Main';
import Container from 'components/Container';

export default function About() {
	return (
		<Container>
			<Main>
				<Box sx={{ m: 2 }}>This is the about page</Box>
			</Main>
		</Container>
	);
}
