import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SignUpScreen from '../screens/SignUpScreen';
import LogInScreen from '../screens/LogInScreen';
import SplashScreen from '../screens/SplashScreen';
import VerifyScreen from '../screens/VerifyScreen';
import HomeScreen from '../screens/HomeScreen';
import EventsScreen from '../screens/EventsScreen';
import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ResourceScreen from '../screens/ResourceScreen';
import ArticleListScreen from '../screens/ArticleListScreen';
import SingleArticleScreen from '../screens/SingleArticleScreen';
import SingleBlogScreen from '../screens/SingleBlogScreen';
import BlogListScreen from '../screens/BlogListScreen';
import PodcastListScreen from '../screens/PodcastListScreen';
import SinglePodcastScreen from '../screens/SinglePodcastScreen';
import MyMarketplaceScreen from '../screens/MyMarketplaceScreen';
import ConnectRequestsScreen from '../screens/ConnectRequestsScreen';
import RequestDetailsScreen from '../screens/RequestDetailsScreen';
import MyProfileScreen from '../screens/MyProfileScreen';
import CorporateProfileScreen from '../screens/CorporateProfileScreen';
import {
  faCalendar,
  faEnvelope,
  faUser,
  faHouse,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  NavigationContainer,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import DrawerContent from './DrawerContent';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const HomeStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faHouse} size={size} color={color} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faCalendar} size={size} color={color} />
          ),
        }}
        name="Events"
        component={EventsScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faEnvelope} size={size} color={color} />
          ),
        }}
        name="Messages"
        component={MessageScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesomeIcon icon={faUser} size={size} color={color} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};
const StackNav = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="LogInScreen"
        component={LogInScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="SignUpScreen"
        component={SignUpScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="VerifyScreen"
        component={VerifyScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{
          title: 'Resource Bank',
          headerStyle: {
            backgroundColor: '#224589', // Set the background color for Screen 1
          },
          headerTintColor: 'white',
        }}
        name="ResourceScreen"
        component={ResourceScreen}
      />
      <Stack.Screen
        options={{
          title: 'Articles',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
        name="ArticleListScreen"
        component={ArticleListScreen}
      />
      <Stack.Screen
        options={{
          title: 'Article',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            alignSelf: 'center',
          },
        }}
        name="SingleArticleScreen"
        component={SingleArticleScreen}
      />
      <Stack.Screen
        options={{
          title: 'Blogs',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
        }}
        name="BlogListScreen"
        component={BlogListScreen}
      />
      <Stack.Screen
        options={{
          title: 'Blog',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
        }}
        name="SingleBlogScreen"
        component={SingleBlogScreen}
      />
      <Stack.Screen
        options={{
          title: 'Podcasts',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
        }}
        name="PodcastListScreen"
        component={PodcastListScreen}
      />
      <Stack.Screen
        options={{
          title: 'Podcast',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
        }}
        name="SinglePodcastScreen"
        component={SinglePodcastScreen}
      />
      <Stack.Screen
        options={{
          title: 'My Marketplace',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <FontAwesomeIcon icon={faBars} size={30} color="white" />
              </TouchableOpacity>
            );
          },
        }}
        name="MyMarketplaceScreen"
        component={MyMarketplaceScreen}
      />
      <Stack.Screen
        options={{
          title: 'My Profiles',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <FontAwesomeIcon icon={faBars} size={30} color="white" />
              </TouchableOpacity>
            );
          },
        }}
        name="MyProfileScreen"
        component={MyProfileScreen}
      />
      <Stack.Screen
        options={{
          title: 'My Profiles',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
          headerLeft: () => {
            return (
              <TouchableOpacity
                onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <FontAwesomeIcon icon={faBars} size={30} color="white" />
              </TouchableOpacity>
            );
          },
        }}
        name="CorporateProfileScreen"
        component={CorporateProfileScreen}
      />
      <Stack.Screen
        options={{
          title: 'My Marketplace',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
        }}
        name="ConnectRequestsScreen"
        component={ConnectRequestsScreen}
      />
      <Stack.Screen
        options={{
          title: 'My Marketplace',
          headerStyle: {
            backgroundColor: '#224589',
          },
          headerTintColor: 'white',
        }}
        name="RequestDetailsScreen"
        component={RequestDetailsScreen}
      />
    </Stack.Navigator>
  );
};

const DrawerNav = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Home" component={StackNav} />
    </Drawer.Navigator>
  );
};

const AuthNavigator = () => {
  return <DrawerNav />;
};

export default AuthNavigator;
