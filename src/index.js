import ReactDOM from "react-dom/client";
import { 
    BrowserRouter,
    Routes,
    Route, 
} from "react-router-dom";

import App from './App';
import Home from './routes/home'
import Messages from './routes/messages'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/messages/:chatRoomId" element={<Messages />} />

    </Routes>
  </BrowserRouter>
);