/** @jsx jsx */
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loader from 'react-loader-spinner';
import { css, jsx } from '@emotion/react';
import { getUsersList } from '../../actions/fetchUsersList';
import AlphabetList from '../../components/AlphabetList/AlphabetList';

const App = (props) => {
	const { isLoading, users, error } = props;
	useEffect(() => {
		props.getUsersList();
	}, []);
	if (error) {
		return <div>There is some issue with the api. Kindly check after sometime. </div>;
	}

	return (
		<div css={{
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		}}>
			{isLoading ? (
				<Loader type="Circles" color="#aab4c8" height={120} width={120} />
			) : (
				<AlphabetList users={users} />
			)}
		</div>
	);
};

const mapStateToProps = ({ userList: { isLoading, users, error } }) => ({
	isLoading,
	users,
	error
});

const mapDispatchToProps = (dispatch) => ({
	getUsersList: bindActionCreators(getUsersList, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
