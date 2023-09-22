# Notes

This is a Notes app which help to save quick notes and todos. This app is made using [**React Native**](https://reactnative.dev), bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

## 🛠️ Development Setup

## Step 1: Install dependencies

First you need to have a proper development setup installed for react native to go any further in steps. [Development setup guide](https://reactnative.dev/docs/environment-setup?guide=native)

Install dependencies using yarn package manager

```bash
yarn
```

## Step 2: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using Yarn
yarn start
```

## Step 3: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using Yarn
yarn android
```

### For iOS

```bash
# using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.
