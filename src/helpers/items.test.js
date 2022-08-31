import { findItemByItemTitle, getAllItemIds } from './items';
// created a smaller subset of the item data for testing (instead of passing in the giant list of actual data)
import mockItems from '../../test/mock-data';

describe('Helpers: items.js', () => {
	it('findItemByItemTitle returns correct item with just description: ', () => {
		const itemFound = findItemByItemTitle({
			itemId: 'latex-or-plastic-gloves',
			items: mockItems,
		});
		const expectedItemFound = {
			itemTitle: 'Latex or plastic gloves',
			disposalDescription:
				'All household latex or nitrile gloves should be placed in the trash. They are not recyclable.',
		};
		//console.log('itemFound', JSON.stringify(itemFound, null, 2))
		expect(itemFound).toEqual(expectedItemFound);
	});

	it('findItemByItemTitle returns correct item with description and cost: ', () => {
		const itemFound = findItemByItemTitle({
			itemId: 'markers',
			items: mockItems,
		});
		const expectedItemFound = {
			itemTitle: 'Markers',
			disposalDescription:
				'Crayola offers a recycling take-back program called ColorCycle for schools to collect and mail in markers for special recycling.Markers do not belong in your recycling bin. If not participating in the recycling take-back program, markers should be placed in household trash.',
			cost: 'No fee to participate in the recycling take-back program; Crayola pays for all shipping charges.',
		};
		expect(itemFound).toEqual(expectedItemFound);
	});

	it('findItemsByTitle returns correct item with description, cost and notes: ', () => {
		const itemFound = findItemByItemTitle({
			itemId: 'heat-pump',
			items: mockItems,
		});
		const expectedItemFound = {
			itemTitle: 'Heat pump',
			disposalDescription:
				'It is illegal to dispose of this item in the trash in Chittenden County, VT. In good conditionConsider donating it to an organization that will put it to reuse. See our Reuse & Donation Options page for a list of organizations that may accept it.Unusable conditionAccepted at the Drop-Off Center located in Williston only for recycling.',
			cost: '$15 for residential & commercial units',
			notes:
				'At our Drop-Off Center, appliances are processed to remove hazardous materials. Once processed, the units are recycled.',
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


	it('getAllItemIds returns expected item list', () => {
		const allItems = getAllItemIds(mockItems);
		console.log('allItems', allItems);
		const expectedItemsFound = [
			{ params: { itemId: 'latex-or-plastic-gloves' } },
			{ params: { itemId: 'markers' } },
			{ params: { itemId: 'contact-lenses' } },
			{ params: { itemId: 'flag' } },
			{ params: { itemId: 'coffee-maker' } },
			{ params: { itemId: 'campers' } },
			{ params: { itemId: 'cpap-machine' } },
			{ params: { itemId: 'dirty-containers' } },
			{ params: { itemId: 'tea-bags' } },
			{ params: { itemId: 'aed-unit' } },
			{ params: { itemId: 'heat-pump' } },
			{ params: { itemId: 'tanning-beds' } },
			{ params: { itemId: 'mulch' } },
			{ params: { itemId: 'pane-glass' } },
		];
		expect(allItems).toEqual(expectedItemsFound);
	});
});
