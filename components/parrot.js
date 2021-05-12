import React, { useState } from 'react';

const Parrot = ({ id, name }) => {
	return (
		<View>
			<Text>{name}</Text>
		</View>
	);
};

module.exports = Parrot;
