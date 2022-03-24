export function getAllItemIds(items) {
	return items.map(({ itemTitle }) => {
		const titleWithoutSpaces = itemTitle
			? itemTitle.replace(/\s/g, '-').toLowerCase()
			: '';

		return {
			params: {
				itemId: titleWithoutSpaces,
			},
		};
	});
}

// TODO: make this more resilient
export const findItemByItemTitle = ({ itemId, items }) =>
	items.filter(item => {
		const { itemTitle } = item;
		const titleWithoutSpaces = itemTitle
			? itemTitle.replace(/\s/g, '-').toLowerCase()
			: '';
		return titleWithoutSpaces === itemId;
	})[0];
