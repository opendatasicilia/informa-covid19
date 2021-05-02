import { animate } from '../../utils/animation'

const scrollToTarget = (target) => (step) => {
  document.documentElement.scrollTop = target * step
}

const scrollToElement = (element) => {
  const targetY = element.offsetTop
  return scrollToTarget(targetY)
}

export const scrollTo = (node, selector) => {
  const handler = (e) => {
    e.preventDefault()
    const targetElement = document.querySelector(selector)
    animate(scrollToElement(targetElement))
  }
  node.addEventListener('click', handler)
  node.addEventListener('touchstart', handler)
  return {
    destroy() {
      node.removeEventListener('click', handler)
      node.removeEventListener('touchstart', handler)
    },
  }
}

export const scrollToTop = (node) => {
  const handler = (e) => {
    e.preventDefault()
    animate(scrollToTarget(0))
  }
  node.addEventListener('click', handler)
  node.addEventListener('touchstart', handler)
  return {
    destroy() {
      node.removeEventListener('click', handler)
      node.removeEventListener('touchstart', handler)
    },
  }
}
