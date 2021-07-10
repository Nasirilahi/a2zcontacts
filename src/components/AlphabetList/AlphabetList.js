/** @jsx jsx */
import { useState } from 'react';
import { jsx } from '@emotion/react';
import Modal from '../Modal/Modal';
import {
	listContainer,
	tabItem,
	headerTitle,
	mainContainer,
	modalContaier,
	avatarImg,
	userName,
	detailContainer,
	contactItem,
	contactKey,
	blurShadow,
	closeIcon,
	gradInfo,
	keysContainer
} from './style';

const AlphabetList = ({ users }) => {
	const [ currentTitle, setTitle ] = useState('a');
	const [ showModal, setShowModal ] = useState(false);
	const [ selectedUser, setSelectedUser ] = useState({});
	const keyClickHandler = (key, len) => {
		if (len > 0) {
			setTitle(key);
		}
	};
	const itemSelectHandler = (user) => {
		setSelectedUser(user);
		setShowModal(true);
	};
	const closeModal = () => {
		setShowModal(false);
		setSelectedUser({});
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
			<div css={keysContainer}>{createTitleKeys}</div>
			<div css={listContainer}>
				{users[currentTitle].map((item) => (
					<span key={item.login.uuid} onClick={() => itemSelectHandler(item)}>{`${item.name
						.last}, ${item.name.first.toUpperCase()}`}</span>
				))}
			</div>
			{showModal && (
				<Modal setOpen={closeModal}>
					<div>
						<div css={blurShadow} />
						<span css={closeIcon} onClick={closeModal}>
							&#x2715;
						</span>
						<div css={modalContaier}>
							<div>
								<img css={avatarImg} src={selectedUser.picture.thumbnail} alt="avatar" />
							</div>
							<div css={detailContainer}>
								<div css={userName}>{`${selectedUser.name.first.toUpperCase()}, ${selectedUser.name
									.first}`}</div>
								<div css={contactItem}>
									<span css={contactKey}>e-mail</span>
									<span>{selectedUser.email}</span>
								</div>

								<div css={contactItem}>
									<span css={contactKey}>phone</span>
									<span>{selectedUser.phone}</span>
								</div>
								<div css={contactItem}>
									<span css={contactKey}>street</span>
									<span>
										{`${selectedUser.location.street.number} ${selectedUser.location.street
											.name}`}{' '}
									</span>
								</div>
								<div css={contactItem}>
									<span css={contactKey}>city</span>
									<span>{`${selectedUser.location.city}`} </span>
								</div>
								<div css={contactItem}>
									<span css={contactKey}>state</span>
									<span>{`${selectedUser.location.state}`} </span>
								</div>
								<div css={contactItem}>
									<span css={contactKey}>postcode</span>
									<span>{`${selectedUser.location.postcode}`} </span>
								</div>
							</div>
							<span css={gradInfo}>{`USERNAME yellowwolf559`}</span>
						</div>
						<div css={blurShadow} />
					</div>
				</Modal>
			)}
		</div>
	);
};

export default AlphabetList;
