/* eslint-disable max-len */
import * as React from 'react';
import { Box, Grid } from '@mui/material';
import Main from 'layout/Main';
import Container from 'components/Container';
import RadioButtons from 'components/Stepper/RadioButtons';

const materialOptions = [
	'Food',
	'Glass',
	'Paper',
	'Plastic',
	'Chemicals',
	'Metal',
	'Wood',
	'Mixed Material',
];

//TODO: this is sloppy as hell, need to update this when I have more time
export default function Find() {
	const [material, setMaterial] = React.useState('');
	const [meatOrAnimal, setMeatOrAnimal] = React.useState(null);

	return (
		<Container>
			<Main>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Box sx={{ m: 2 }}>
							<RadioButtons
								label="Material Type?"
								options={materialOptions}
								handleChange={setMaterial}
								value={material}
							/>
						</Box>
						{material === 'Food' && (
							<Box sx={{ m: 2 }}>
								<RadioButtons
									label="Meat or Animal Bones?"
									options={['Yes', 'No']}
									handleChange={setMeatOrAnimal}
									value={meatOrAnimal}
								/>
							</Box>
						)}
					</Grid>
					<Grid item xs={8}>
						{meatOrAnimal === 'Yes' && material === 'Food' && (
							<Box sx={{ m: 2 }}>
								Meat and bones are compostable, but should not be put in a
								backyard compost pile because it can attract unwanted pests and
								is difficult to break down. Drop meat/bones off at a CSWD
								transfer station or Green Mountain Compost.
							</Box>
						)}
						{meatOrAnimal === 'No' && material === 'Food' && (
							<Box sx={{ m: 2 }}>
								Food other than meat and bones can go in a backyard compost bin.
								It can also be dropped off at a CSWD transfer station or at
								Green Mountain Compost.
							</Box>
						)}
					</Grid>
				</Grid>
			</Main>
		</Container>
	);
}
