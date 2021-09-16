import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// グローバルCSSを定義する場合は.module.css ではなく、.cssを末尾としたファイルをpages/_app.jsにインポートする必要がある
