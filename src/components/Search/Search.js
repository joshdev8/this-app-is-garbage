import React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import { Box, InputAdornment, OutlinedInput, IconButton } from '@mui/material';
import { Search as SearchIcon, Clear as ClearIcon } from '@mui/icons-material';

const Search = ({ handleChange, handleClear, searchTerm }) => {
	const clearSearchIcon =
		searchTerm && searchTerm?.length > 0 ? (
			<IconButton
				onClick={handleClear}
				edge="end"
				aria-label="clear"
				size="large"
			>
				<ClearIcon fontSize="small" />
			</IconButton>
		) : (
			<IconButton
				edge="end"
				aria-label="clear"
				size="large"
			>
				<SearchIcon fontSize="small" />
			</IconButton>
		);
	
	return (
		<Box
			sx={theme => ({
				position: 'relative',
				borderRadius: theme.shape.borderRadius,
				backgroundColor: alpha(theme.palette.common.white, 0.15),
				'&:hover': {
					backgroundColor: alpha(theme.palette.common.white, 0.25),
				},
				m: 1,
				width: '100%',
				[theme.breakpoints.up('sm')]: {
					marginLeft: theme.spacing(1),
					width: 'auto',
				},
			})}
		>
			<Box
				sx={{
					p: (0, 2),
					height: '100%',
					position: 'absolute',
					pointerEvents: 'none',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<SearchIcon />
			</Box>
			<OutlinedInput
				autoFocus
				placeholder="Search…"
				className="input-field"
				fullWidth
				aria-describedby="search"
				onChange={handleChange}
				inputProps={{ 'aria-label': 'search' }}
				endAdornment={
					<InputAdornment position="end">{clearSearchIcon}</InputAdornment>
				}
				sx={theme => ({
					color: 'inherit',
					'& .MuiInputBase-input': {
						padding: theme.spacing(1, 1, 1, 0),
						// vertical padding + font size from searchIcon
						paddingLeft: `calc(1em + ${theme.spacing(4)})`,
						transition: theme.transitions.create('width'),
						width: '100%',
						[theme.breakpoints.up('sm')]: {
							width: '12ch',
							'&:focus': {
								width: '20ch',
							},
						},
					},
				})}
			/>
		</Box>
	);
};

Search.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleClear: PropTypes.func.isRequired,
	searchTerm: PropTypes.string,
};

Search.defaultProps = {
	searchTerm: '',
};

export default Search;
