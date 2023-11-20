import {Switch,Route} from 'react-router-dom';
import './App.css';
import Layout from './Components/Layout';
import Monitoring from './Components/Monitoring';
import Overview from './Components/OverView';
import Onboarding from './Components/Onboarding';
import Flagging from './Components/Flagging';
import SourceOfIncome from './Components/SourceOfIncome';
import UAR from './Components/UAR';


const App = () => {

  return (
    
    
      <Switch>
          <Route exact path ='/monitoring'  render =  {() => <Layout item = {'Monitoring' }><Monitoring/></Layout>} />
          <Route exact path ='/' render = {()  => <Layout item = {'Overview' }><Overview/></Layout> }/>
          <Route exact path ='/onboarding' render = {() => <Layout item = {'Onboarding' }><Onboarding/></Layout> }/>
          <Route exact path ='/flagging' render = {() => <Layout item = {'Flagging' }><Flagging/></Layout> }/>
          <Route exact path = '/source' render = {() => <Layout item = {'source' }><SourceOfIncome/></Layout> }/>
          <Route exact path ='/uar' render = {() => <Layout item = {'uar' }><UAR/></Layout> }/>


      </Switch>
    
    
  )
}

export default App;
