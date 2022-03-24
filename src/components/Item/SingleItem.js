import React from 'react';
import {
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemAvatar,
	Typography,
	Box,
} from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

import plasticCup from '../../../public/img/items/plastic-cup.webp';

const Item = ({ item }) => {
	const { itemTitle, disposalDescription } = item;

	return (
		<>
			{itemTitle} {disposalDescription}
		</>
	);
};

Item.propTypes = {
	item: PropTypes.shape({
		itemTitle: PropTypes.string,
		disposalDescription: PropTypes.string,
		cost: PropTypes.string,
		notes: PropTypes.string,
		tags: PropTypes.arrayOf(PropTypes.string),
		disposalOptions: PropTypes.arrayOf(PropTypes.string),
	}).isRequired,
};

Item.defaultProps = {
	item: {
		itemTitle: '',
		disposalDescription: '',
		cost: '',
		notes: '',
		tags: [],
		disposalOptions: [],
	},
};

export default Item;
