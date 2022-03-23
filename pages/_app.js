import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Box } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import Header from 'src/components/Header/Header';
// import theme from 'src/theme/theme';
import createEmotionCache from 'src/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

// Define theme settings
const light = {
	palette: {
		mode: 'light',
	},
};

const dark = {
	palette: {
		mode: 'dark',
	},
};

export default function MyApp(props) {
	// The light theme is used by default
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	// This function is triggered when the Switch component is toggled
	const changeTheme = () => {
		setIsDarkTheme(!isDarkTheme);
	};

	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

	return (
		<CacheProvider value={emotionCache}>
			<>
				<Head>
					<meta name="viewport" content="initial-scale=1, width=device-width" />
				</Head>
				<ThemeProvider
					theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
				>
					<CssBaseline />
					<div className="header-area">
						<Header isDarkTheme={isDarkTheme} changeTheme={changeTheme} />
					</div>
					<Box sx={{ mt: '30px' }} className="component-area">
						<Component {...pageProps} />
					</Box>
				</ThemeProvider>
			</>
		</CacheProvider>
	);
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
};
