import { View } from '@aws-amplify/ui-react';
import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';
import { fetchUserAttributes } from 'aws-amplify/auth';

async function getUserName() {
    try {
        const userAttributes = await fetchUserAttributes();
        return {
            family_name: userAttributes.family_name,
            given_name: userAttributes.given_name
        };
    } catch (error) {
        console.log(error);
    }
}

export const Header = () => {
    const [userNames, setUserNames] = useState('');

    useEffect(() => {
        async function fetchUserName() {
            const names = await getUserName();
            setUserNames(names);
        }
        fetchUserName();
    }, []);

    return (
        <View className='headerPage'>
            <h4>{`Sesión Actual: ${userNames.family_name}, ${userNames.given_name}`}</h4>
        </View>
    )
}