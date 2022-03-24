import * as React from 'react';
import { Box } from '@mui/material';
// import VirtualizedList from 'components/List/VirtualizedList';
// import useLoadItems from 'hooks/useLoadItems';
// import ErrorAlert from 'components/Alert/Error';
import Main from 'layout/Main';
import Container from 'components/Container';
import VirtualizedList from 'components/List/VirtualizedList';

export default function Index() {
	// const [items, error, loading] = useLoadItems({ term: 'this' });
	// let markup;
	// if (loading) {
	// 	markup = <LinearProgress />;
	// } else if (error) {
	// 	markup = <ErrorAlert message={error} />;
	// } else {
	// 	markup = <VirtualizedList items={items} />;
	// }

	return (
		<Container>
			<Main>
				<Box sx={{ m: 2 }}>
					<VirtualizedList />
				</Box>
			</Main>
		</Container>
	);
}
