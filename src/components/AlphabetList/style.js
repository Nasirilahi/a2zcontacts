import { css } from '@emotion/react';

export const mainContainer = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-Top: 50px;
`;

export const headerTitle = css`
	font-size: 32px;
	font-family: sans-serif;
	text-align: center;
`;

export const listContainer = css`
	border: 1px solid #aab4c8;
	border-top: 0;
	background-color: #f1f1f1;
	width: 1144px;
	padding: 30px 0 30px 30px;
	border-radius: 0 0 8px 8px;
	span {
		display: inline-block;
		width: 47%;
		border-bottom: 1px dotted #aab4c8;
		margin-right: 30px;
		padding: 10px 0 10px 10px;
		font-family: sans-serif;
	}
`;

export const tabItem = (isSelected, isClickble) => css`
	border: 1px solid #aab4c8;
	border-bottom: ${isSelected ? '1px solid #F1F1F1' : '1px solid #AAB4C8'};
	display: inline-flex;
	flex-direction: column;
	border-radius: 8px 8px 0 0;
	background-color: #f1f1f1;
	height: 36px;
	width: 44px;
	text-align: center;
	font-size: 24px;
	position: relative;
	font-weight: 500;
	font-family: sans-serif;
	color: ${isClickble ? '#40444E' : '#AAB4C8'};
	overflow: hidden;
	span:nth-of-type(1) {
		border: 2px solid ${isSelected ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.0)'};
		filter: blur(3px);
	}
	span:nth-of-type(3) {
		font-size: 8px;
		position: absolute;
		bottom: 1px;
		right: 4px;
	}
`;

export const modalContaier = css`
	display: flex;
	position: relative;
	padding: 10px 10px 40px 10px;
`;

export const avatarImg = css`
	margin: 0px 15px 0 15px;
	height: 100px;
	width: 100px;
	border-radius: 50px;
`;

export const detailContainer = css`
	display: flex;
	flex-direction: column;
	font-family: sans-serif;
`;
export const userName = css`
	color: #aab4c8;
	font-size: 32px;
	font-family: sans-serif;
	margin-bottom: 20px;
`;

export const contactItem = css`
	margin-bottom: 5px;
	width: 100%;
	padding-right: 150px;
	display: flex;
`;

export const contactKey = css`
	font-weight: 600;
	margin-right: 10px;
	width: 65px;
`;

export const blurShadow = css`
	border: 1.5px solid rgba(0, 0, 0, 0.5);
	filter: blur(6px);
`;

export const closeIcon = css`
	padding: 10px;
	position: absolute;
	z-index: 5;
`;

export const gradInfo = css`
    position: absolute;
	right: -80px;
    top: 80px;
	transform: rotate(90deg);
	padding: 5px 15px 5px 15px;
	background-image: linear-gradient(#ef5050, #dea888);
    color: white;
    font-family: sans-serif;
`;
