import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
// import PropTypes from 'prop-types';
import Item from 'components/Card/Item';
import Search from 'components/Search/Search';
import items from '../../../data/items';

const VirtualizedList = () => {
	const [filteredItems, setFilteredItems] = useState(items);
	const [searchTerm, setSearchTerm] = useState('');

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};

	const handleClear = () => {
		setSearchTerm('');
		setFilteredItems(items);
	};

	const filterMethod = (searchTerm, item) => {
		const { itemTitle, notes, disposalDescription } = item;
		return (
			itemTitle && itemTitle.toLowerCase().includes(searchTerm.toLowerCase())
			|| notes && notes.toLowerCase().includes(searchTerm.toLowerCase())
			|| disposalDescription && disposalDescription.toLowerCase().includes(searchTerm.toLowerCase())
		);
	};

	useEffect(() => {
		if (searchTerm && searchTerm.length > 0) {
			const filtered = items.filter(item => filterMethod(searchTerm, item));
			if (filtered) {
				setFilteredItems(filtered);
			} else {
				setFilteredItems(items);
			}
		} else {
			setFilteredItems(items);
		}
	}, [searchTerm]);

	return (
		<Box
			sx={{
				width: '100%',
				height: 500,
				bgcolor: 'background.paper',
			}}
		>
			<AutoSizer>
				{({ height, width }) => (
					<>
						<Box sx={{ width: width }}>
							<Search
								handleChange={handleChange}
								handleClear={handleClear}
								searchTerm={searchTerm}
							/>
						</Box>
						<List
							className="List"
							height={height}
							itemCount={filteredItems.length}
							items={filteredItems}
							itemSize={300}
							itemData={filteredItems}
							width={width}
						>
							{({ data, index, style }) => {
								const item = data[index];
								return <Item item={item} style={style} index={index} />;
							}}
						</List>
					</>
				)}
			</AutoSizer>
		</Box>
	);
};

export default VirtualizedList;
