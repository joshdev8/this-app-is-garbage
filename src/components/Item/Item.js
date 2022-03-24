import React from 'react';
import {
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemAvatar,
	Typography,
	Box,
} from '@mui/material';
import Link from 'components/Link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import plasticCup from '../../../public/img/items/plastic-cup.webp';

const truncateString = (str, n) => {
	if (!str) {
		return '';
	} else if (str && str.length > n) {
		return str.substring(0, n) + '...';
	} else {
		return str;
	}
};

const Item = ({ item, index, style }) => {
	const { itemTitle, disposalDescription } = item;
	const truncatedDescription = disposalDescription
		? truncateString(disposalDescription, 300)
		: '';

	const titleWithoutSpaces = itemTitle
		? itemTitle.replace(/\s/g, '-').toLowerCase()
		: '';

	return (
		<ListItem style={style} component="div" key={index} alignItems="flex-start">
			<Link
				href={{
					pathname: '/item/[itemId]',
					query: { itemId: titleWithoutSpaces },
				}}
				passHref
			>
				<ListItemButton>
					<ListItemAvatar>
						<Image src={plasticCup} alt="cup image" width={75} height={100} />
					</ListItemAvatar>
					<ListItemText
						primary={itemTitle}
						sx={{ ml: 2 }}
						secondary={
							<React.Fragment>
								{truncatedDescription}
								<br></br>
								<Box sx={{ color: 'primary.main', fontWeight: 'bold' }}>
									Click for more Info
								</Box>
							</React.Fragment>
						}
					/>
				</ListItemButton>
			</Link>
		</ListItem>
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
	index: PropTypes.number.isRequired,
	style: PropTypes.shape({}).isRequired,
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
