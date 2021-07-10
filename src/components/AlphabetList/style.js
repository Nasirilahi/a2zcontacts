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
