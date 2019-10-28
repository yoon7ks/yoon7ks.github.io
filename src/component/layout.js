import React from "react"
import { Link } from "gatsby"
import Header from "./header"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
const Layout = ({ children }) => {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h3>둥고(DungGo) 블로그</h3>
        </Link>
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">홈</ListLink>
          <ListLink to="/about/">둥고는요</ListLink>
          <ListLink to="/contact/">컨텍미</ListLink>
        </ul>
      </header>
      {children}
    </div>
  )
}

export default Layout
