import { loop, now } from 'svelte/internal'
import { cubicInOut } from 'svelte/easing'

const loopControl = () => {
  let _isRunning = false
  const isRunning = () => _isRunning
  const start = () => (_isRunning = true)
  const stop = () => (_isRunning = false)
  return { isRunning, start, stop }
}

export const animate = (animation, duration = 500) => {
  const control = loopControl()
  const startTime = now()
  const endTime = startTime + duration
  loop((now) => {
    if (control.isRunning() && now >= endTime) {
      animation(1)
      control.stop()
      return false
    }
    if (control.isRunning()) {
      const currentTime = now - startTime
      const step = cubicInOut(currentTime / duration)
      animation(step)
    }
    return true
  })
  control.start()
}
