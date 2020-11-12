import React from 'react'
const { Link } = require('@reach/router')

// prevent warnings on DOM rendering
export const ButtonLink = ({ extended, color, ...props }) => <Link {...props} />
