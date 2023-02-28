import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'remixicon/fonts/remixicon.css'
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//components
import Container from "../../components/Layout/Container/index"

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Container>
        <Component {...pageProps} />
      </Container>
  )
}
