import { Link, Route, Routes } from "react-router-dom"
import Feed from "./Pages/Feed"
import Createpost from "./Pages/Createpost"

const App = () => {
  return (
    <div>

      <div>
        <Link to='/createPost'>create post</Link>
        <Link to="/postShow">post create</Link>
      </div>

      <Routes>
        <Route path="/feed" element={<Feed/>}/>
        <Route path="/createPost" element={<Createpost/>}/>
      </Routes>

    </div>
  )
}

export default App
