import React from 'react';
import {
	ListItem,
	ListItemButton,
	ListItemText,
	ListItemAvatar,
	Typography,
} from '@mui/material';
import Image from 'next/image';
import PropTypes from 'prop-types';

import plasticCup from '../../../public/img/items/plastic-cup.webp';

const Item = ({ item, index, style }) => {
	const { itemTitle, disposalDescription, cost, notes, tags } = item;
	return (
		<ListItem style={style} component="div" key={index} alignItems="flex-start">
			<ListItemButton>
				<ListItemAvatar>
					<Image src={plasticCup} alt="cup image" width={75} height={100} />
				</ListItemAvatar>
				<ListItemText
					primary={itemTitle}
					sx={{ ml: 2 }}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								Cost: {cost}
								<br></br>
								{notes}
							</Typography>
						</React.Fragment>
					}
				/>
				<ListItemText
					primary={disposalDescription}
					sx={{ ml: 2 }}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								{notes && (
									<span>Notes: {notes}</span>
								)}
							</Typography>
						</React.Fragment>
					}
				/>
			</ListItemButton>
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
