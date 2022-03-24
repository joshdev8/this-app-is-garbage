import * as React from 'react';
import { Box } from '@mui/material';
import Main from 'layout/Main';
import Container from 'components/Container';

export default function Contact() {

	return (
		<Container>
			<Main>
				<Box sx={{ m: 2 }}>This is the contact page</Box>
			</Main>
		</Container>
	);
}
