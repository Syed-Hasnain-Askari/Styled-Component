import * as React from "react"
import Header from "../components/header"
import GloblaStyle from '../global'
// styles
const pageStyles = {
  color: "#232129",
  margin:0,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}


// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <Header/>
      <GloblaStyle/>
      <h1>Welcome to Home Page</h1>
    </main>
  )
}

export default IndexPage
