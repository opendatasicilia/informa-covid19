export const set = () => {
  localStorage.setItem('opt', 'out')
  window.location.reload()
}
export const remove = () => {
  localStorage.removeItem('opt')
  window.location.reload()
}
