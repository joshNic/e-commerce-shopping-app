import React, { Component } from 'react';
import {
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Feed from './app/Screens/HomeScreen';
import Icon from '@expo/vector-icons/Ionicons';
import ProductDetailScreen from './app/Screens/ProductDetailScreen';
// import DashboardScreen from './app/Screens/DashboardScreen';
// import WelcomeScreen from './app/Screens/WelcomeScreen';

// import SettingsScreen from './app/Screens/SettingsScreen';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

class WelcomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          title='Login'
          onPress={() => this.props.navigation.navigate('Dashboard')}
        />
        <Button title='Sign UP' onPress={() => alert('Sign Up Pressed')} />
      </View>
    );
  }
}
class DashboardScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>DashboardScreen</Text>
      </View>
    );
  }
}

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
      </View>
    );
  }
}

class Detail extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Settings</Text>
      </View>
    );
  }
}

// const AppDrawerNavigator = createDrawerNavigator(
//   {
//   Home:HomeScreen,
//   Settings:SettingsScreen
// },
// {
//   navigationOptions: {
//   headerStyle: {
//     backgroundColor: 'orange'
//   }
// }}
// );

const detailStackNavigator = createStackNavigator(
  {
    Feed: {
      screen: Feed,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: (
            <Icon
              style={styles.humbuger}
              name='md-menu'
              onPress={() => navigation.openDrawer()}
              size={30}
            />
          ),
          headerTitle: 'Feed',
          headerBackTitle: null,
          headerStyle: {
            backgroundColor: 'orange'
          }
        };
      }
    },
    ProductDetailScreen: {
      screen: ProductDetailScreen
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);

const ProfileStack = createStackNavigator({
  Feed: {
    screen: Profile,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={styles.humbuger}
            name='md-menu'
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerTitle: 'Profile',
        headerStyle: {
          backgroundColor: 'orange'
        }
      };
    }
  }
});

const SettingsStack = createStackNavigator({
  Feed: {
    screen: Settings,
    navigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={styles.humbuger}
            name='md-menu'
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerTitle: 'Settings',
        headerStyle: {
          backgroundColor: 'orange'
        }
      };
    }
  }
});

const bottomTabNavigator = createBottomTabNavigator(
  {
    detailStackNavigator: {
      screen: detailStackNavigator,
      navigationOptions: {
        tabBarLabel: 'Detail',
        tabBarIcon: ({ tintColor }) => <Icon name='ios-home' size={24} />
      }
    },
    ProfileStack,
    SettingsStack
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);

const dashboardStackNavigator = createStackNavigator(
  {
    bottomTabNavigator: bottomTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={styles.humbuger}
            name='md-menu'
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: 'orange'
        }
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: dashboardStackNavigator
  }
});

const AppSwitchNavigator = createSwitchNavigator({
  Welcome: { screen: WelcomeScreen },
  Dashboard: { screen: AppDrawerNavigator }
});
// const AppStackNavigator = createStackNavigator(
//   {
//  Home:HomeScreen
// },
// {
//   defaultNavigationOptions: {
//   headerStyle: {
//     backgroundColor: 'orange'
//   }
// }});

const AppContainer = createAppContainer(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  humbuger: {
    paddingLeft: 10
  }
});
