import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { iconsMap, iconsLoaded } from './helpers/icons-loader';

registerScreens(); // this is where you register all of your app's screens

let icons;

export default class App {
  constructor() {
    iconsLoaded.then(() => {
      // personIcon = iconsMap['ios-person']
      // homeIcon = iconsMap['ios-home']
      icons = iconsMap
      this.startApp();
    });
  }

// start the app
  startApp() {
    Navigation.startTabBasedApp({
      tabs: [{
        screen: 'instaClone.HomeScreen', // this is a registered name for a screen
        icon: icons['ios-home-outline'],
        selectedIcon: icons['ios-home'],
        title: 'Home',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'instaClone.SearchScreen', // this is a registered name for a screen
        icon: icons['ios-search-outline'],
        selectedIcon: icons['ios-search'],
        title: 'Search',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'instaClone.AddScreen', // this is a registered name for a screen
        icon: icons['ios-add-circle-outline'],
        selectedIcon: icons['ios-add-circle'],
        title: 'Add',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'instaClone.FavoriteScreen', // this is a registered name for a screen
        icon: icons['ios-heart-outline'],
        selectedIcon: icons['ios-heart'],
        title: 'Favorite',
        iconInsets: { top: 6, bottom: -6 }
      }, {
        screen: 'instaClone.ProfileScreen', // this is a registered name for a screen
        icon: icons['ios-person-outline'],
        selectedIcon: icons['ios-person'],
        title: 'Profile',
        iconInsets: { top: 6, bottom: -6 }
      }],
      tabsStyle: {
        tabBarButtonColor: 'black',
        tabBarSelectedButtonColor: 'black'
      }
    });
  }
};
