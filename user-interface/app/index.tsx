import { Redirect } from 'expo-router';
import { Text } from 'react-native';

export default function Index() {
  console.log('Redirecting to /home');
  return <Redirect href="/home" />;
}