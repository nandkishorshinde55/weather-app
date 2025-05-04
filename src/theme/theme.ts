import { DefaultTheme, Theme } from '@react-navigation/native';

export interface ExtendedTheme extends Theme {
    colors: Theme['colors'] & {
        cardBackground:  string;
        textInputBgColor: string;
        textInputColor: string;
        buttonTextColor: string;
        placeholderTextColor: string;
        label: string;
        danger: string;
        loaderModelBgColor: string,
        loader:string
    };
}

export const LightTheme:ExtendedTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0A84FF',
        background: '#f0f0f0',
        card: '#F8F8F8',
        text: '#000000',
        border: '#E2E2E2',
        notification: '#FF3B30',
        cardBackground: "#ffffff",
        textInputBgColor: "#ffff",
        textInputColor: "#000",
        buttonTextColor: "#ffff",
        placeholderTextColor: '#8888',
        label: '#333',
        danger: "#EA5455",
        loaderModelBgColor:'rgba(0,0,0,0.5)',
        loader:'#fff'
    },
};

export const DarkTheme:ExtendedTheme = {
    ...DefaultTheme,
    dark: true,
    colors: {
        ...DefaultTheme.colors,
        primary: '#0A84FF',
        background: '#121212',
        card: '#1C1C1E',
        text: '#FFFFFF',
        border: '#38383A',
        notification: '#FF453A',
        cardBackground: "#1f1f1f",
        textInputBgColor: "#2c2c2c",
        textInputColor: "#ffff",
        buttonTextColor: "#ffff",
        placeholderTextColor: '#cccc',
        label: '#ccc',
        danger: "#EA5455",
        loaderModelBgColor: 'rgba(255,255,255,0.2)',
        loader:'#000'
      
    },
};
