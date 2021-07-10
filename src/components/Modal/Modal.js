/** @jsx jsx */
import { Fragment } from 'react';
import { jsx } from '@emotion/react';
import ReactDOM from 'react-dom';
import { modal, modalShadow } from './style';

const Modal = ({setOpen, children}) => {
    const close = () => setOpen();
	return ReactDOM.createPortal(
		<Fragment>
			<div css={modalShadow} onClick={close} />
			<div css={modal}>{children}</div>
		</Fragment>,
		document.getElementById('modal')
	);
};

export default Modal;
