import { css } from '@emotion/react';

export const modal = css`
 background-color: #f1f1f1;
 position: fixed;
 top: 180px;
 left: 15%;
 z-index: 5;
 max-height: calc(100% - 200px);
 display: flex;
 flex-direction: column;
 border-radius: 4px;
 border: 1px solid #aab4c8;
`;

export const modalShadow = css`
 position: fixed;
 height: 100%;
 width: 100%;
 top: 0px;
 background-color: black;
 opacity: 0.0;
 z-index: 4;
`;