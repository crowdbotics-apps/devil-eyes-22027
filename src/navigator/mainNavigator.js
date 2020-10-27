import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings163566Navigator from '../features/Settings163566/navigator';
import UserProfile163559Navigator from '../features/UserProfile163559/navigator';
import Settings163558Navigator from '../features/Settings163558/navigator';
import Settings163556Navigator from '../features/Settings163556/navigator';
import SignIn2163554Navigator from '../features/SignIn2163554/navigator';
import BlankScreen14163538Navigator from '../features/BlankScreen14163538/navigator';
import Settings163537Navigator from '../features/Settings163537/navigator';
import UserProfile163530Navigator from '../features/UserProfile163530/navigator';
import Settings163529Navigator from '../features/Settings163529/navigator';
import Settings163527Navigator from '../features/Settings163527/navigator';
import SignIn2163525Navigator from '../features/SignIn2163525/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings163566: { screen: Settings163566Navigator },
UserProfile163559: { screen: UserProfile163559Navigator },
Settings163558: { screen: Settings163558Navigator },
Settings163556: { screen: Settings163556Navigator },
SignIn2163554: { screen: SignIn2163554Navigator },
BlankScreen14163538: { screen: BlankScreen14163538Navigator },
Settings163537: { screen: Settings163537Navigator },
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
