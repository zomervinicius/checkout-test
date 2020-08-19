import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import '../styles/index.css';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Next.js with Tailwind</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Component {...pageProps} />;
      </>
    );
  }
}

export default MyApp;
