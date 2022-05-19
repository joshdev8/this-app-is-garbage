import { findItemByItemTitle } from './items';
// created a smaller subset of the item data for testing (instead of passing in the giant list of actual data)
import mockItems from '../../test/mock-data';

describe('Helpers: items.js', () => {
	it('findItemByItemTitle returns correct item: ', () => {
		const itemFound = findItemByItemTitle({
			itemId: 'latex-or-plastic-gloves',
			items: mockItems,
		});
		const expectedItemFound = {
			itemTitle: 'Latex or plastic gloves',
			disposalDescription:
				'All household latex or nitrile gloves should be placed in the trash. They are not recyclable.',
		};

		expect(itemFound).toEqual(expectedItemFound);
	});

	it('findItemByItemTitle returns undefined if item is not found', () => {
		const itemFound = findItemByItemTitle({
			itemId: 'this-is-not-an-item',
			items: mockItems,
		});
		// we may want to change the behavior of this helper function to avoid null/undefined values if it doesn't find an item
		expect(itemFound).toEqual(undefined);
	});
});
