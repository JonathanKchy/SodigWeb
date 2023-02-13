import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return(
    <>
      <h1>Hola</h1>
      <Component {...pageProps} />
    </>
  )
}
