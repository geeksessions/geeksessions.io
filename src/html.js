import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta charset="utf-8" />
        <title>Geek Sessions Faro</title>
        <link rel="shortcut icon" href="/assets/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/assets/favicon.ico" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&subset=latin,latin-ext" rel='stylesheet' type='text/css' /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Geek Sessions organizes regular events like talks, workshops and fireside chats with the goal of bringing local tech denizens together." />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
