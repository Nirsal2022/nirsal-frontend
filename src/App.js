import React, {Fragment} from 'react';

import './app.css';
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import SignUp from "./pages/signup/SignUp";
import Verify from "./pages/verify/Verify";
import SetPass from "./pages/setPass/SetPass";
import ForgotPass from './pages/forgotpass/ForgotPass';
import Notification from './pages/notification/Notification';
import ResetPass from './pages/resetPass/ResetPass';
import UserType from './pages/usertype/UserType';
import PresidentBVN from './pages/onboarding/presidentbvn/PresidentBVN';
import VPresidentBVN from './pages/onboarding/vpresidentbvn/VPresidentBVN';
import FinSecBVN from './pages/onboarding/finsecbvn/FinSecBVN';
import PresidentInfo from './pages/onboarding/presidentinfo/PresidentInfo';
import VPresidentInfo from './pages/onboarding/vpresidentinfo/VPresidentInfo';
import FinSecInfo from './pages/onboarding/finsecinfo/FinSecInfo';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<SignUp />}></Route>
          <Route path="/verify" element={<Verify />}></Route>
          <Route path="/create-password" element={<SetPass />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/forgotpass" element={<ForgotPass />}></Route>
          <Route path="/notification" element={<Notification />}></Route>
          <Route path="/resetpass" element={<ResetPass />}></Route>
          <Route path="/usertype" element={<UserType />}></Route>
          <Route path="/president_bvn" element={<PresidentBVN />}></Route>
          <Route path="/vice_president_bvn" element={<VPresidentBVN />}></Route>
          <Route path="/finsec_bvn" element={<FinSecBVN />}></Route>
          <Route path="/president_info" element={<PresidentInfo />}></Route>
          <Route path="/vice_president_info" element={<VPresidentInfo />}></Route>
          <Route path="/finsec_info" element={<FinSecInfo />}></Route>
        </Routes>
      </Fragment>
    </Router>
  );
}

export default App;
