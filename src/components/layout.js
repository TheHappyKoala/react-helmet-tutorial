import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import "../css/main.css"

export default ({ pageMeta, children }) => (
  <>
    <Helmet>
      {/* Setting the language of your page does not get more difficult than this! */}

      <html lang="en" />

      {/* Add the customCssClass from our pageMeta prop to the document body */}

      <body
        className={pageMeta.customCssClass ? pageMeta.customCssClass : ""}
      />

      <title>{`Cars4All | ${pageMeta.title}`}</title>

      {/* The charset, viewport and author meta tags will always have the same value, so we hard code them! */}

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="author" content="Bob Trustly" />

      {/* The rest we set dynamically with props */}

      <meta name="description" content={pageMeta.description} />

      {/* We pass an array of keywords, and then we use the Array.join method to convert them to a string where each keyword is separated by a comma */}

      <meta name="keywords" content={pageMeta.keywords.join(",")} />
    </Helmet>
    <div>
      <header>
        <h1>Cars4All</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars/">Our Cars</Link>
            </li>
          </ul>
        </nav>
      </header>
      {children}
      <footer>{`${new Date().getFullYear()} No Rights Whatsoever Reserved`}</footer>
    </div>
  </>
)
