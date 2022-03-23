import * as React from 'react';
import { Container, Box, LinearProgress } from '@mui/material';
import VirtualizedList from 'src/components/List/VirtualizedList';
import useLoadItems from 'src/hooks/useLoadItems';
import ErrorAlert from 'src/components/Alert/Error';

export default function Index() {
	const [items, error, loading] = useLoadItems({ term: 'this' });
	let markup;
	if (loading) {
		markup = <LinearProgress />;
	} else if (error) {
		markup = <ErrorAlert message={error} />;
	} else {
		markup = <VirtualizedList items={items} />;
	}

	return (
		<Container maxWidth="sm">
			<Box sx={{ m: 2 }}>{markup}</Box>
		</Container>
	);
}
