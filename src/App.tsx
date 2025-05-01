import { BrowserRouter as Router } from "react-router-dom"
import Header from "@/shared/ui/Header"
import Footer from "@/shared/ui/Footer"
import PostsManagerPage from "@/pages/postManager/PostManagerPage"

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <PostsManagerPage />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
