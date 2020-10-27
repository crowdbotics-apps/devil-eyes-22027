import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile163530Navigator from '../features/UserProfile163530/navigator';
import Settings163529Navigator from '../features/Settings163529/navigator';
import Settings163527Navigator from '../features/Settings163527/navigator';
import SignIn2163525Navigator from '../features/SignIn2163525/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile163530: { screen: UserProfile163530Navigator },
Settings163529: { screen: Settings163529Navigator },
Settings163527: { screen: Settings163527Navigator },
SignIn2163525: { screen: SignIn2163525Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
