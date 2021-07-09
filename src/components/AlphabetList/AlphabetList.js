import React, { useState, Fragment } from 'react';

const AlphabetList = ({ users }) => {
	const [ currentTitle, setTitle ] = useState('A');
	const keyClickHandler = (key, len) => {
		if(len > 0){
			setTitle(key);
		}
	}
	const createTitleKeys = Object.entries(users).map((item) => {
		const [ key, val ] = item;
		const len = val.length
		return (
			<span key={key}  style={len > 0 ? {border: '1px solid red', padding: '5px', marginRight: '10px'} : { marginRight: '10px'}} onClick={() => keyClickHandler(key, len)}>
				<span>{key}</span>
				<span>{len}</span>
			</span>
		);
	});
	return (
		<div>
			<div style={{margin: '40px 0 30px 0'}}>{createTitleKeys}</div>
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
