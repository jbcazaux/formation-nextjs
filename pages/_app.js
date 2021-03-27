import PropTypes from 'prop-types'
import Head from 'next/head'
import theme from 'theme/theme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>My nice blog !</title>
      <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      <meta key="about" about="helloworld2" />
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

export default App
