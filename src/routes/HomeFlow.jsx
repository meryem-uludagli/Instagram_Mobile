import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../screens/CommonScreen.jsx/ProfileScreen';
import FeedPostsScreen from '../screens/HomeFlow/FeedPostsScreen';

const HomeFlow = () => {
  const HomeFlowStack = createNativeStackNavigator();

  return (
    <HomeFlowStack.Navigator screenOptions={{headerShown: false}}>
      <HomeFlowStack.Screen
        name="FeedPostsScreen"
        component={FeedPostsScreen}
      />
      <HomeFlowStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </HomeFlowStack.Navigator>
  );
};
export default HomeFlow;
