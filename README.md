================================= Create a new App ================================= 
npx create-expo-app ProjectName
cd ProjectName
npx expo start
npm install -> to install node modules
r -> to refresh the app
====================================================================================



================================== React DevTools ================================== 
npm install -g react-devtools
react-devtools
====================================================================================



================================== Extra Packages ================================== 
expo linear gradient -> npx expo install expo-linear-gradient
icons 	-> expo vector icons
fonts 	-> npx expo install expo-font
loading -> npx expo install expo-app-loading
axios 	-> npm install axios
redux 	-> https://redux-toolkit.js.org/tutorials/quick-start
storage -> https://react-native-async-storage.github.io/async-storage/docs/install/
====================================================================================



================================= React Navigation ================================= 
URL -> https://reactnavigation.org/

npm install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
====================================================================================



=============================== Drawer Navigator fix =============================== 
Add the below code in babel.config.js

 module.exports = {
      presets: ['module:metro-react-native-babel-preset'],

      // add the below line 
      plugins: ['react-native-reanimated/plugin'], 
     // this should be always last line
    };
====================================================================================