import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'

const IconLink = props => {
  const icon = props.git ? faGithub : props.linkedin ? faLinkedin : faInstagram
  return (
    <a href={props.url} style={props.style}>
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default IconLink
