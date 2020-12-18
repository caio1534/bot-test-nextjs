import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    //Add persistent layout features throughout pages
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
