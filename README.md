# InitApp React Native

Rename use react-native-rename
```
Switch to new branch first
$ git checkout -b rename-app
$ npx react-native-rename "NewNameApp"
```

Run 
```
iOS
$ npx pod-install ios
$ react-native run-ios

Android
$ react-native run-android
```

Add Custom Fonts
```
add file font .ttf to directory src/assets/fonts and run command
$ npx react-native link
Use your 'FontName-Regular' in fontFamily
```
