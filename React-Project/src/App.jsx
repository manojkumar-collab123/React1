import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/project/Home'
import Dashboard from './components/dashboard/Dashboard'
import Card1 from './view/Card1'
import ContactForm from './view/Form'
import Dashborad2 from './components/dashboard/Dashboard2'
import Table from './view/Table'
import CardApi from './view/CardApi'
import SecondFrom from './view/SecondFrom'
import MapMethod from './view/MapMethod'
import About from './components/project/About'
import Services from './components/project/Service'
import Contact from './components/project/Contact'
import FromTask2 from './view/FromTask2'
import Reftab from './view/TAB6'
import SingleState from './view/SingleState'
import UseRef1 from './view/UseRef1'
import UseRef2 from './view/UseRef2'
import ReducerHook from './view/ReducerHook'
import TodoReducerHook from './view/TodoReducerHook'
import { UserProvider } from "./context/UserContext";
import Contexttry from './view/Contexttry'
import Navbar from './view/Navbar'
import ContextDashboard from './view/Dashboar'
import UserPage from "./view/UserPage";
import { AuthProvider } from './context/AuthContext';
import Authentication from "./view/Authentication";

function App() {
  return (
    <UserProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* Previous practice routes are kept here for reference.
                Uncomment only the route you want to run. */}

            {/* <Route path='/' element={<Dashborad2 />} />
            <Route path='/cardapi' element={<CardApi />} />
            <Route path='/tableapi' element={<Table />} />
            <Route path='/' element={<MapMethod />} />
            <Route path='/' element={<Dashboard />} />
            <Route path='/Card1' element={<Card1 />} />
            <Route path='/' element={<ContactForm />} />
            <Route path='/' element={<SecondFrom />} />
            <Route path='/' element={<Home />} />
            <Route path='/About' element={<About />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/' element={<SingleState />} />
            <Route path='/' element={<UseRef1 />} />
            <Route path='/' element={<UseRef2 />} />
            <Route path='/' element={<ReducerHook />} />
            <Route path='/' element={<TodoReducerHook />} />
            <Route path='/' element={<FromTask2 />} />
            <Route path='/' element={<Reftab />} />
            <Route path='/1ST' element={<Contexttry />} />
            <Route path='/2nd' element={<Navbar />} />
            <Route path='/3rd' element={<ContextDashboard />} />
            <Route path='/' element={<Authentication />} /> */}

            <Route path='/User' element={<UserPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </UserProvider>
  )
}

export default App
