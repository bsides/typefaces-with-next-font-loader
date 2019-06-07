import React from 'react'
import App, { Container } from 'next/app'
import GlobalStyles from '../global/GlobalStyles'
// Works, but gives FOUT
import { typeface } from 'typeface-source-sans-pro'

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <>
        <GlobalStyles />
        <Container>
          <Component {...pageProps} />
        </Container>
      </>
    )
  }
}

export default MyApp
