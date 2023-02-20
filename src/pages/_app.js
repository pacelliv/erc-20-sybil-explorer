import { MoralisProvider } from "react-moralis"
import { ContextProvider } from "../Context"
import Layout from "components/Layout"
import "@/styles/globals.css"

const App = ({ Component, pageProps }) => {
    return (
        <MoralisProvider initializeOnMount={false}>
            <ContextProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ContextProvider>
        </MoralisProvider>
    )
}

export default App

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
