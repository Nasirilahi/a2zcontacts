/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/react';

const style = css`
	border: 1px solid red;
	padding: 5px;
	margin-right: 10px;
`;

const AlphabetList = ({ users }) => {
	const [ currentTitle, setTitle ] = useState('A');
	const keyClickHandler = (key, len) => {
		if (len > 0) {
			setTitle(key);
		}
	};
	const createTitleKeys = Object.entries(users).map((item) => {
		const [ key, val ] = item;
		const len = val.length;
		return (
			<span key={key} css={style} onClick={() => keyClickHandler(key, len)}>
				<span>{key}</span>
				<span>{len}</span>
			</span>
		);
	});
	return (
		<div>
			<div style={{ margin: '40px 0 30px 0' }}>{createTitleKeys}</div>
			<div>
				{users[currentTitle].map((item) => (
					<div key={item.login.uuid}>
						{`${item.name.last.toLowerCase()} ${item.name.first.toUpperCase()}`}
					</div>
				))}
			</div>
		</div>
	);
};

export default AlphabetList;
