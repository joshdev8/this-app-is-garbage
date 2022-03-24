import { useRouter } from 'next/router';
import * as React from 'react';
import Main from 'layout/Main';
import Container from 'components/Container';
import PropTypes from 'prop-types';
import SingleItemComponent from 'components/Item/SingleItem';
import { getAllItemIds, findItemByItemTitle } from 'helpers/items';
import items from '../../../data/items';

const SingleItemPage = ({ item }) => {
	const router = useRouter();
	const id = router.query.itemId;

	return (
		<Container>
			<Main>
				<SingleItemComponent itemId={id} item={item} />
			</Main>
		</Container>
	);
};

export async function getStaticPaths() {
	const paths = getAllItemIds(items);

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const itemFound = findItemByItemTitle({ itemId: params.itemId, items });
	return {
		props: {
			item: itemFound,
		},
	};
}

SingleItemPage.propTypes = {
	item: PropTypes.shape({
		itemTitle: PropTypes.string,
		disposalDescription: PropTypes.string,
		cost: PropTypes.string,
		notes: PropTypes.string,
		tags: PropTypes.arrayOf(PropTypes.string),
		disposalOptions: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

export default SingleItemPage;
