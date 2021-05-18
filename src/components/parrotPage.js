import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import styles from '../../styles';
import { ApplyParrot } from './applyParrot';
import { ParrotInfoItem } from './parrotInfoItem';
import { ParrotApplication } from './parrotApplication';

const ParrotPage = ({ route, navigation }) => {
	const [parrot, setParrot] = useState([]);
	const [applications, setApplications] = useState([]);
	const [showApprove, setShowApprove] = useState(true);
	const { parrotId, userType, userId } = route.params;

	useEffect(() => {
		// async function fetchParrot() {
		const fetchParrot = async () => {
			const res = await fetch(`http://localhost:3000/api/parrots/${parrotId}`, {
				method: 'GET',
			})
				.then((response) => response.json())
				.then((data) => {
					setParrot(data.parrot);
					setApplications(data.applications);
					console.log('parrot: ', parrot);
					console.log('applications: ', applications);
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
		<View style={styles.body}>
			<View style={styles.profileImageContainer}>
				<Image
					source={{
						uri: parrot.imageUrl
							? parrot.imageUrl
							: 'https://party-parrots-s3-bucket.s3.amazonaws.com/parrot.jpeg',
					}}
					style={styles.profileImage}
				/>
			</View>
			<View style={styles.parrotInfo}>
				<ParrotInfoItem label="Name: " info={parrot.name} />
				<ParrotInfoItem label="Charity: " info={parrot.charity} />
				<ParrotInfoItem label="Species: " info={parrot.species} />
				<ParrotInfoItem label="Age: " info={parrot.age} />
				<ParrotInfoItem label="Location: " info={parrot.location} />
				<ParrotInfoItem label="Gender: " info={parrot.gender} />
				<ParrotInfoItem label="Bio: " info={parrot.bio} />
				<ParrotInfoItem label="Special Needs: " info={parrot.specialNeeds} />
			</View>
			<View style={styles.applicationsContainer}>
				{userType !== 'admin' && isUserInApplicants() === false && (
					<ApplyParrot parrotId={parrotId} userId={userId} />
				)}
				{userType !== 'admin' && isUserInApplicants() === true && (
					<Text style={styles.redBoldFont}>Applied!</Text>
				)}
				{userType === 'admin' && (
					<FlatList
						data={applications}
						renderItem={({ item }) => (
							<ParrotApplication
								key={item._id}
								parrotId={parrotId}
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
		</View>
	);
};

export { ParrotPage };
