import React from 'react';
import {
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemAvatar,
	Box,
} from '@mui/material';
import Link from 'components/Link';
import Image from 'next/image';
import PropTypes from 'prop-types';

import placeholderImage from '../../../public/img/items/placeholder.jpeg';

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
	// trim description down to 300 characters so it fits in list card
	const truncatedDescription = disposalDescription
		? truncateString(disposalDescription, 100)
		: '';
	// format itemTitle so we can pass it reliably as a query param
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
				sx={{ width: '100%' }}
				underline="none"
			>
				<ListItemButton>
					<ListItemAvatar>
						<Image src={placeholderImage} alt="item image" width={75} height={75} />
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
