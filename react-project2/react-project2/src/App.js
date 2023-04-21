import logo from './logo.svg';
import './App.css';
import Invitation from './Invitation'
import { Fragment } from 'react';
export default function App() {
  return (
    <Fragment>
    <Invitation
  subject="Birthday Party Invitation"
  to="jaGdish@gmail.com"
  name="jaGdish"
  date="next Friday"
  location="Greenfield Avenue"
  from="JaGdish"
  bgColor="pink"
  textColor="white"
/>

    
    </Fragment>
    
  );
}


