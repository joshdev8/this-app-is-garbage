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
import trashCan from '../../../public/img/trash.webp';
import recyclingBin from '../../../public/img/recyclingBin.png';
import compostBin from '../../../public/img/compostBin.webp';

const searchStringForWord = (description, wordArray) =>
	wordArray.some(word => description.includes(word));

const RECYCLING_WORDS = ['recycle', 'recycling', 'recyclable'];

const RECYCLING_FORBIDDEN_WORDS = [
	'not recyclable',
	'not be recycled',
	'not recycle',
	'no recycle',
];

const COMPOSTABLE_WORDS = ['compost', 'composting', 'compostable'];

const COMPOTABLE_FORBIDDEN_WORDS = [
	'not compost',
	'not be composted',
	'non compostable',
	'not composting',
	'non composting',
];

const TRASH_WORDS = ['trash', 'trashable', 'garbage'];

const TRASH_FORBIDDEN_WORDS = [
	'not trash',
	'not in the trash',
	'non trash',
	'not trashable',
];

// need to check the negative words as well to make sure we aren't getting a positive for finding a key word
const getTags = ({ description, positiveWordArray, negativeWordArray }) => {
	let tag = null;
	if (description && description.length > 0) {
		if (searchStringForWord(description, positiveWordArray)) {
			tag = true;
		}
		if (searchStringForWord(description, negativeWordArray)) {
			tag = false;
		}
	}
	return tag;
};

const Item = ({ item }) => {
	const { itemTitle, disposalDescription, cost, notes, disposalOptions } = item;
	const recyclable = getTags({
		description: disposalDescription,
		positiveWordArray: RECYCLING_WORDS,
		negativeWordArray: RECYCLING_FORBIDDEN_WORDS,
	});
	const compostable = getTags({
		description: disposalDescription,
		positiveWordArray: COMPOSTABLE_WORDS,
		negativeWordArray: COMPOTABLE_FORBIDDEN_WORDS,
	});
	const trashable = getTags({
		description: disposalDescription,
		positiveWordArray: TRASH_WORDS,
		negativeWordArray: TRASH_FORBIDDEN_WORDS,
	});
	const tagArray = [compostable, recyclable, trashable];
	const trashImage = trashable ? (
		<Image alt="trash can image" src={trashCan} height={100} width={100} />
	) : null;
	const recyclingImage = recyclable ? (
		<Image
			alt="recycling bin image"
			src={recyclingBin}
			height={100}
			width={100}
		/>
	) : null;
	const compostImage = compostable ? (
		<Image alt="compost bin image" src={compostBin} height={100} width={100} />
	) : null;
	console.log('tagArray: ', tagArray);
	return (
		<>
			<Box>{itemTitle}</Box>
			{disposalDescription && <Box sx={{ mt: 4 }}>{disposalDescription}</Box>}
			{cost && <Box sx={{ mt: 4 }}>Cost: {cost}</Box>}
			{notes && <Box sx={{ mt: 4 }}>Notes: {notes}</Box>}
			{disposalOptions && (
				<Box sx={{ mt: 4 }}>Disposal Options: {disposalOptions}</Box>
			)}
			<Box sx={{ mt: 4 }}>
				{trashImage}
				{recyclingImage}
				{compostImage}
			</Box>
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
