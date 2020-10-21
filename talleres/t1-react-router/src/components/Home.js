import React from 'react';

export default (props) => {
	const { texto } = props;
	return (
		<React.Fragment>
			<h2>Home</h2>
			{texto}
		</React.Fragment>
	)
}