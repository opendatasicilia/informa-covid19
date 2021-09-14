export const set = (choice) => {
  localStorage.setItem('consent', choice)
  window.location.reload()
}
export const remove = () => {
  localStorage.removeItem('consent')
  window.location.reload()
}
