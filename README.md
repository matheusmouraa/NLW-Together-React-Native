# NLW Together - React Native Rocketseat

Recreating Rocketseat's NLW Together project with an emphasis on react native in JavaScript and with some modifications to the designer.

<img alt="App imgs 01" src="assets/READMEImg-01.jpeg" width="375" height="812">
<img alt="App imgs 02" src="assets/READMEImg-02.jpeg" width="375" height="812">
<img alt="App imgs 03" src="assets/READMEImg-03.jpeg" width="375" height="812">
<img alt="App imgs 04" src="assets/READMEImg-04.jpeg" width="375" height="812">
<img alt="App imgs 05" src="assets/READMEImg-05.jpeg" width="375" height="812">
<img alt="App imgs 06" src="assets/READMEImg-06.jpeg" width="375" height="812">

## Clone the project and install dependencies

Remembering, to run the application is necessary this installed in the machine NodeJS, Yarn and Expo.

### Installing NodeJS

To install NodeJS just follow the guide in the [nodeJS documentation itself](https://nodejs.org/pt-br/download/).

### Installing Yarn

To install Yarn you need to install the NodeJS first.

Run the following command on your terminal:

```bash
  npm install --global yarn
```

### Installing Expo

To install Expo you need to install the NodeJS first.

Run the following command on your terminal:

```bash
  npm install --global expo-cli
```

### Cloning the repository

With HTTPS:

```git
  git clone https://github.com/M4TY21/NLW-Together-React-Native.git
```

With SSH:

```git
  git clone git@github.com:M4TY21/NLW-Together-React-Native.git
```

After that, access the folder through the terminal:

```bash
  cd NLW-Together-React-Native
```

### Installing dependencies

install all packages and libraries of the application with the following command:

```bash
  expo install
```

## Config .env file

for this application, the OAuth2 authentication method was used with Discord, create a file called `.env` following the example of the file `.env.example` with its settings following the [Discord Documentation for Developers](https://discord.com/developers/docs).

## Running the project

After installing all the necessary dependencies, run the following command on your terminal:

```bash
  expo start
```

## Create APK from the project

to create the application apk, just use the command below on your terminal:

```bash
  expo build:android -t apk
```

## Contributing

you are free to make any suggestion and change in the project, just send a pull request with the request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/M4TY21/NLW-Together-React-Native/blob/main/LICENSE.md) file for details.
