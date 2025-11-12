// Theme utilities
export function setTheme(theme, toggle = false) {
  const currentTheme = localStorage.getItem('theme') || 'system'
  
  let newTheme
  if (toggle) {
    newTheme = currentTheme === 'light' ? 'dark' : currentTheme === 'dark' ? 'system' : 'light'
  } else {
    newTheme = theme || currentTheme
  }

  localStorage.setItem('theme', newTheme)
  applyTheme(newTheme)

  return newTheme
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else if (theme === 'light') {
    document.documentElement.classList.remove('dark')
  } else {
    // system
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}

// Initialize theme on page load
export function initTheme() {
  const theme = localStorage.getItem('theme') || 'system'
  applyTheme(theme)
  
  // Update button state
  const toggleDarkModeElement = document.getElementById('toggleDarkMode')
  if (toggleDarkModeElement) {
    toggleDarkModeElement.dataset.theme = theme
  }
}

// Toast utilities
export function showToast({ message, duration = 3000 }) {
  // Create toast element
  const toast = document.createElement('div')
  toast.textContent = message
  toast.className = 'fixed top-4 right-4 bg-black dark:bg-white dark:text-black text-white px-4 py-2 rounded-lg shadow-lg z-[9999] transition-opacity duration-300'
  
  document.body.appendChild(toast)
  
  // Remove after duration
  setTimeout(() => {
    toast.style.opacity = '0'
    setTimeout(() => {
      document.body.removeChild(toast)
    }, 300)
  }, duration)
}