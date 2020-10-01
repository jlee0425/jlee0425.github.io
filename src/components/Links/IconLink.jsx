import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileDownload } from '@fortawesome/free-solid-svg-icons'

const IconLink = ({ url, style, type }) => {
  let icon
  switch (type) {
    case 'git':
      icon = faGithub
      break
    case 'linkedin':
      icon = faLinkedin
      break
    case 'instagram':
      icon = faInstagram
      break
    case 'mail':
      icon = faEnvelope
      break
    case 'download':
      icon = faFileDownload
      break
    default:
      break
  }

  return (
    <a href={url} style={style}>
      <FontAwesomeIcon icon={icon} />
    </a>
  )
}

export default IconLink
