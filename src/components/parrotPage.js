import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from '../../styles';
import { ApplyParrot } from './applyParrot';
import { ParrotApplication } from './parrotApplication';

const ParrotPage = ({ route, navigation }) => {
	const [parrot, setParrot] = useState([]);
	const [applications, setApplications] = useState([]);
	const [showApprove, setShowApprove] = useState(true);
	const { id } = route.params;
	// hard coded user type and id here
	const userType = 'admin';
	const userId = '609ceae22bab994fbc6fc6bd';

	useEffect(() => {
		// async function fetchParrot() {
		const fetchParrot = async () => {
			const res = await fetch(`http://localhost:3000/api/parrots/${id}`, {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => {
					setParrot(data.parrot);
					setApplications(data.applications);
				});
		};
		fetchParrot();
		if (isParrotApproved()) setShowApprove(false);
	}, []);

	const isUserInApplicants = () => {
		const userApplication = applications.filter((application) => application.user === userId);
		return userApplication.length > 0;
	};

	const isParrotApproved = () => {
		const approvedApplication = applications.filter((application) => application.approved === true);
		console.log('parrot approved application: ', approvedApplication);
		return approvedApplication.length > 0;
	};

	// showApprove use showApprove && !isParrotApproved() for issues when navigate from parrot list
	return (
		<View>
			<Text>{parrot.name}</Text>
			<Text>{parrot.charity}</Text>
			<Text>{parrot.species}</Text>
			<Text>{parrot.age}</Text>
			<Text>{parrot.location}</Text>
			<Text>{parrot.gender}</Text>
			<Text>{parrot.bio}</Text>
			<Text>{parrot.specialNeeds}</Text>
			{userType !== 'admin' && isUserInApplicants() === false && <ApplyParrot id={id} />}
			{userType !== 'admin' && isUserInApplicants() === true && <Text>Applied already</Text>}
			{userType === 'admin' && (
				<FlatList
					data={applications}
					renderItem={({ item }) => (
						<ParrotApplication
							key={item._id}
							parrotId={id}
							applicationId={item._id}
							applicant={item.user}
							message={item.message}
							approved={item.approved}
							showApprove={showApprove && !isParrotApproved()}
							onApproveSubmitted={() => {
								setShowApprove(false);
							}}
							navigation={navigation}
						/>
					)}
					keyExtractor={(item) => item._id}
				/>
			)}
		</View>
	);
};

export { ParrotPage };
