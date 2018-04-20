const formatDate = date => {
  const formatter = new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric'
  })

  if (!date) {
    return ''
  }

  return formatter.format(date)
}

export default formatDate
