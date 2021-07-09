import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
		<div>
			{isLoading ? (
				<div>Loading....</div>
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
