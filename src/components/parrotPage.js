import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, ScrollView,TouchableOpacity } from 'react-native';
import styles from '../../styles';
import { ApplyParrot } from './applyParrot';
import { ParrotInfoItem } from './parrotInfoItem';
import { ParrotApplication } from './parrotApplication';
import ConfettiCannon from 'react-native-confetti-cannon';

const ParrotPage = ({ route, navigation }) => {
	const [parrot, setParrot] = useState([]);
	const [applications, setApplications] = useState([]);
	const [showApprove, setShowApprove] = useState(true);
	const { parrotId, userType, userId } = route.params;
	const [showConfetti, setShowConfetti] = useState(false);

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
		if (isApprovedUser()) setShowConfetti(true);
	}, []);

	const isUserInApplicants = () => {
		const userApplication = applications.filter((application) => application.user._id === userId);
		return userApplication.length > 0;
	};

	const isParrotApproved = () => {
		const approvedApplication = applications.filter((application) => application.approved === true);
		return approvedApplication.length > 0;
	};

	const isApprovedUser = () => {
		const approvedApplication = applications.filter((application) => application.approved === true);
		return approvedApplication.length > 0 && approvedApplication[0].user._id === userId;
	};


    React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("Parrot List")}>
          <Text style={styles.allParrotsButton}>All Parrots</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, navigation.navigate]);
	// showApprove use showApprove && !isParrotApproved() for issues when navigate from parrot list
	return (
		<ScrollView>
			<View style={styles.pageBody}>
				{isApprovedUser() && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}
				<Text style={styles.title}>{parrot.name}</Text>
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
					<ParrotInfoItem label="Charity: " info={parrot.charity} compact="false" />
					<ParrotInfoItem label="Species: " info={parrot.species} compact="false" />
					<ParrotInfoItem label="Age: " info={parrot.age} compact="false" />
					<ParrotInfoItem label="Location: " info={parrot.location} compact="false" />
					<ParrotInfoItem label="Gender: " info={parrot.gender} compact="false" />
					<ParrotInfoItem label="Bio: " info={parrot.bio} compact="false" />
					<ParrotInfoItem label="Special Needs: " info={parrot.specialNeeds} compact="false" />
				</View>
				<View style={styles.applicationsContainer}>
					{userType !== 'admin' && isUserInApplicants() === false && !isParrotApproved() && (
						<ApplyParrot parrotId={parrotId} userId={userId} />
					)}
					{userType !== 'admin' && isUserInApplicants() === true && (
						<Text style={styles.redBoldFont}>
							{'Application Status: ' +
								(isParrotApproved()
									? isApprovedUser()
										? 'Success'
										: `Apologies, ${parrot.name} has found a home`
									: 'Waiting for response')}
						</Text>
					)}
					{userType === 'admin' && (
						<View>
							<View>
								<Text style={styles.infoLabel}>Applications</Text>
							</View>

							<FlatList
								data={applications}
								renderItem={({ item }) => (
									<ParrotApplication
										key={item._id}
										parrotId={parrotId}
										applicationId={item._id}
										applicant={item.user.username}
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
						</View>
					)}
				</View>
			</View>
		</ScrollView>
	);

};

export { ParrotPage };
