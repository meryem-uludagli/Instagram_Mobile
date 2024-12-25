import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeFlow from './HomeFlow';
import SearchScreen from '../screens/SearchFlow/SearchScreen';
import {routes} from '../constants/routes';
import MarketsScreen from '../screens/MarketsFlow/MarketsScreen';
import ReelsScreen from '../screens/ReelsFlow/ReelsScreen';

const BottomTabs = () => {
  const BottomTabsNavigator = createBottomTabNavigator();
  return (
    <BottomTabsNavigator.Navigator screenOptions={{headerShown: false}}>
      <BottomTabsNavigator.Screen
        name={routes.HOME_FLOW}
        component={HomeFlow}
      />
      <BottomTabsNavigator.Screen
        name={routes.SEARCH_FLOW}
        component={SearchScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.MARKETS_FLOW}
        component={MarketsScreen}
      />
      <BottomTabsNavigator.Screen
        name={routes.REELS_FLOW}
        component={ReelsScreen}
      />
    </BottomTabsNavigator.Navigator>
  );
};

export default BottomTabs;
