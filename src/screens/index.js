import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import AddScreen from './AddScreen';
import FavoriteScreen from './FavoriteScreen';
import ProfileScreen from './ProfileScreen';


// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('instaClone.HomeScreen', () => HomeScreen);
  Navigation.registerComponent('instaClone.SearchScreen', () => SearchScreen);
  Navigation.registerComponent('instaClone.AddScreen', () => AddScreen);
  Navigation.registerComponent('instaClone.FavoriteScreen', () => FavoriteScreen);
  Navigation.registerComponent('instaClone.ProfileScreen', () => ProfileScreen);
}
