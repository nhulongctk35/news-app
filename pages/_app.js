import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>News App Using Next.js</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    );
  }
}
