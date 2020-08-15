export const linkResolver = doc => {
  if (doc.type === 'project') {
    return `/projects/${doc.uid}`
  }
  return '/'
}
