import PropTypes from 'prop-types'
import Head from 'next/head'
import theme from 'theme/theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { appWithTranslation } from 'next-i18next'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My nice blog !</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta key="about" about="my photos and posts" />
    </Head>
    <MuiThemeProvider theme={theme}>
      <Component {...pageProps} />
    </MuiThemeProvider>
  </>
)

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
}

export default appWithTranslation(App)
