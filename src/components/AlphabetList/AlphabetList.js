/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/react';
import { listContainer, tabItem, headerTitle, mainContainer } from './style';

const AlphabetList = ({ users }) => {
	const [ currentTitle, setTitle ] = useState('a');
	const keyClickHandler = (key, len) => {
		if (len > 0) {
			setTitle(key);
		}
	};
	const createTitleKeys = Object.entries(users).map((item) => {
		const [ key, val ] = item;
		const len = val.length;
		return (
			<span key={key} css={tabItem(key === currentTitle, len > 0)} onClick={() => keyClickHandler(key, len)}>
				<span />
				<span>{key}</span>
				<span>{len}</span>
			</span>
		);
	});
	return (
		<div css={mainContainer}>
		    <div css={headerTitle}>Contact List</div>
			<div>{createTitleKeys}</div>
			<div css={listContainer}>
				{users[currentTitle].map((item) => (
					<span key={item.login.uuid} onClick={() => console.log('item', item)}>{`${item.name.last}, ${item.name.first.toUpperCase()}`}</span>
				))}
			</div>
		</div>
	);
};

export default AlphabetList;
