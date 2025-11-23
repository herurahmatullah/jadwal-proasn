import AttendanceApp from './components/AttendanceApp'
import { ThemeProvider } from './components/ThemeProvider'

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <AttendanceApp />
    </ThemeProvider>
  )
}

export default App
