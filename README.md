# 🌤️ Weather App

A cross-platform mobile application built with [React Native](https://reactnative.dev/) and [Expo](https://expo.dev/) that provides real-time weather updates. The app features a clean user interface with components such as a header, search bar, and weather information card.


## 🚀 Getting Started

Follow these steps to set up and run the app on your device using Expo Go or simulators/emulators.

### 1. Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).
- **Expo CLI**: Install Expo CLI globally by running:

- npm install -g expo-cli

- **Expo Go App**: Install the Expo Go app on your mobile device if you want to run app on your physical device:
- [Expo Go for Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
- [Expo Go for iOS](https://apps.apple.com/app/expo-go/id982107779)

### 2. Installation

1. **Clone the Repository**:

If you have received a ZIP file, extract it to your desired location. Otherwise, clone the repository:

- git clone https://github.com/nandkishorshinde55/weather-app.git

2. **Navigate to the Project Directory**:

- cd weather-app

3. **Install Dependencies**:

- npm install

### 3. Running the App

Start the development server:

- npx expo start

This command will open a new browser window displaying a QR code.

### 4. Launching on Your Device

### Android:

-  Open the Expo Go app on your Android device.

-  Scan the QR code displayed in your browser or terminal.

### iOS:

-  Open the Expo Go app on your iOS device.

-  Scan the QR code displayed in your browser or terminal.

### 📱 Note
- Make sure your mobile device is connected to the same network as your computer when running the app via Expo Go.

### 5. 💻 Launch on an Emulator/Simulator
- If you have Android Studio set up with an emulator or Xcode with an iOS simulator, you can run the app directly from your development environment.

### Android Emulator:

-  Start the development server:
-     npx expo start
- Open Android Studio.
-  Navigate to More Actions > Virtual Device Manager.
-  Start your desired virtual device.
-  In the terminal where the development server is running, press a to open the app in the Android emulator.

### iOS Simulator (macOS Only):

-  Start the development server:
-      npx expo start
-  In the terminal, press i to open the app in the iOS simulator.


## 🧱 Architectural Overview

The application is structured using a modular and scalable architecture, adhering to best practices in React Native development.

### Components

- **Header**: Displays the app title and includes a theme toggle switch.
- **SearchBar**: Allows users to input a city name to fetch weather data.
- **WeatherCard**: Presents the current weather information for the selected city.
- **OverlayLoader**: Shows a loading indicator during data fetching operations.

### Hooks and State Management

- **Custom Hooks**: Encapsulate logic for managing theme state (`useHeaderViewModel`) and home screen data (`useHomeScreenViewModel`).
- **Theme Management**: Utilizes React Navigation's `useTheme` hook to switch between light and dark modes dynamically.

### Styling

- **StyleSheets**: Employs `StyleSheet.create` for defining component styles, promoting performance and maintainability.
- **Responsive Design**: Ensures compatibility across various device sizes and orientations.

### Testing

- **Testing Library**: Implements `@testing-library/react-native` for writing unit and integration tests.
- **Mocking**: Uses Jest for mocking dependencies and testing components in isolation.

###  Configuration Management

- The API_CONFIG object holds all essential configuration data, including API keys, base URLs, and default units. This centralizes all configuration settings, making it easier to maintain and update them across the application.

### Key Points:
  - Separation of Concerns: Keeps configuration separate from the rest of the application code, improving maintainability.

  - Centralized Configuration: Storing keys like API_KEY, BASE_URL, DEFAULT_UNITS, and ASSET_URL in one location ensures easy access and modifications throughout the codebase.

  - Scalability: Adding new configurations for different environments or additional configuration keys is easier.

### Advantages:

 - Ease of Updates: If the configuration changes (e.g., API endpoint changes), only the config file needs to be updated.

 - Reusability: The configuration can be imported wherever needed without duplication.

 - Security: Storing sensitive data like API keys in environment variables (instead of hardcoding) increases security, which can be added as a next step.

### Future Improvements:

 - Environment Variables: Consider moving sensitive information like the API_KEY to environment variables to improve security, especially in production environments or also we can .env package for envirnment managment.

### Writing the Service Layer
- The service layer is implemented with an apiClient function that handles API requests. It abstracts HTTP requests (GET, POST, PUT, DELETE) and manages things like query parameters, headers, and response handling.

### Key Points:

 - Centralized API Requests: By centralizing the API request logic in apiClient, you eliminate repetition and make future updates (like adding authentication headers or new HTTP methods) easier.

 - Error Handling: The apiClient checks the response status and throws meaningful errors, ensuring that issues are caught early.

### Advantages:

 - Reusability: This service layer can handle any API request in the app, promoting DRY (Don’t Repeat Yourself) principles.

 - Extensibility: The apiClient is flexible and can easily be extended to handle new HTTP methods, headers, or authentication needs.

 - Error Handling: If the API response is not successful, a meaningful error is thrown, providing better feedback for debugging.

### State Management with @reduxjs/toolkit
- To manage the application's state efficiently, we've adopted @reduxjs/toolkit, the official, opinionated, batteries-included toolset for efficient Redux development. This approach simplifies Redux setup and reduces boilerplate code, making state management more maintainable and scalable.

### Key Benefits:

 - Simplified Store Configuration: Utilizing configureStore from @reduxjs/toolkit streamlines the store setup by automatically including essential middleware like Redux Thunk and enabling Redux DevTools integration.

 - Concise Reducer and Action Creation: The createSlice function allows us to define reducers and generate corresponding actions in a single, cohesive structure, minimizing redundancy and enhancing maintainability.

 - Immutable State Management Made Easy: Integration with the Immer library permits writing "mutating" logic in reducers while maintaining immutability under the hood.

 - Built-in Support for Asynchronous Logic: With createAsyncThunk, we can handle asynchronous operations, such as API calls, and manage their lifecycle states (pending, fulfilled, rejected) in a standardized way.

### Implementation in Our App:

 - State Slices: We define separate slices for different features, such as weatherSlice for managing weather data and themeSlice for handling theme preferences.

 - Async Thunks: Asynchronous operations, like fetching weather data from the OpenWeatherMap API, are managed using createAsyncThunk, ensuring a clear and consistent approach to handling side effects.

 - Store Setup: The Redux store is configured using configureStore, integrating all slices and middleware seamlessly.

### Adopting TypeScript over JavaScript
### Overview:
 - To enhance code quality, maintainability, and scalability, we've chosen to use TypeScript—a statically typed superset of JavaScript—for our React Native Weather App. This decision brings several advantages, especially as the application grows in complexity.


### Key Benefits:

 - Static Typing for Early Error Detection: TypeScript's static typing allows developers to catch type-related errors during development, reducing the likelihood of runtime issues. This leads to more robust and reliable code.

 - Enhanced Developer Productivity: With TypeScript, developers benefit from improved tooling support, including intelligent code completion, navigation, and refactoring capabilities in modern IDEs like Visual Studio Code. 

 - Improved Code Maintainability: Type annotations and interfaces in TypeScript make the codebase more self-documenting, facilitating easier onboarding of new developers and simplifying long-term maintenance.

 - Seamless Integration with JavaScript Libraries: TypeScript is fully compatible with JavaScript, allowing for gradual adoption and integration with existing JavaScript libraries and codebases.

### Implementation in Our App:

- Type Definitions: We've defined explicit types for components, props, state, and API responses, ensuring clarity and consistency across the codebase.

- Integration with Redux Toolkit: TypeScript enhances our use of Redux Toolkit by providing type safety for actions, reducers, and the overall state management, leading to more predictable and error-resistant state handling.


