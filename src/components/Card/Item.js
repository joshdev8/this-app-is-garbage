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


const Item = ({ item, index, style }) => {
	const { Title, Year, Poster, imdbID } = item;
	return (
		<ListItem style={style} component="div" key={index} alignItems="flex-start">
			<ListItemButton>
				<ListItemAvatar>
					<Image src={Poster} alt="cup image" width={75} height={100} />
				</ListItemAvatar>
				<ListItemText
					primary={Title}
					sx={{ ml: 2 }}
					secondary={
						<React.Fragment>
							<Typography
								sx={{ display: 'inline' }}
								component="span"
								variant="body2"
								color="text.primary"
							>
								{Year}
								<br></br>
								{imdbID}
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
		Title: PropTypes.string,
		Year: PropTypes.string,
		Poster: PropTypes.string,
		imdbID: PropTypes.string,
	}).isRequired,
	index: PropTypes.number.isRequired,
	style: PropTypes.shape({
		
	}).isRequired,
};

export default Item;
