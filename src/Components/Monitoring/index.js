import {Component} from 'react';
import CloseAccount from '../CloseAccount';
import Popup from 'reactjs-popup'
import './index.css';
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineFileSearch } from "react-icons/ai";


const userData = [
    {
      "id": 1,
      "username": "Sam Altman",
      "email": "samaltman@onjuno.com",
      "riskLevel": "Medium",
      "triggerReason": "Temp flag",
      "inQueueFor": "3 days",
      "dateAddedOn": "2023-11-04",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-07",
      "status": "Completed",
      "reviewedBy": "John Smith",
      "reviewerEmail": "john.smith@example.com"
    },
    {
      "id": 2,
      "username": "Sameer Choubey",
      "email": "sameerchoubey@onjuno.com",
      "riskLevel": "High",
      "triggerReason": "Hard flag",
      "inQueueFor": "1 day",
      "dateAddedOn": "2023-11-17",
      "previouslyReviewed": "No",
      "status": "Pending"
    },
    {
      "id": 3,
      "username": "Adarsh Panikkar",
      "email": "adarsh@onjuno.com",
      "riskLevel": "Low",
      "triggerReason": "Restricted unflag",
      "inQueueFor": "10 days",
      "dateAddedOn": "2023-11-07",
      "previouslyReviewed": "No",
      "status": "Pending"
    },
    {
      "id": 4,
      "username": "Pratik Shetty",
      "email": "pratik@onjuno.com",
      "riskLevel": "High",
      "triggerReason": "Unflag",
      "inQueueFor": "7 days",
      "dateAddedOn": "2023-11-10",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-15",
      "status": "Completed",
      "reviewedBy": "Alice Johnson",
      "reviewerEmail": "alice.johnson@example.com"
    },
    {
      "id": 5,
      "username": "Elon Musk",
      "email": "elon@tesla.com",
      "riskLevel": "Low",
      "triggerReason": "Reviewed",
      "inQueueFor": "5 days",
      "dateAddedOn": "2023-11-12",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-16",
      "status": "Pending",
      "reviewedBy": "Bob Anderson",
      "reviewerEmail": "bob.anderson@example.com"
    },
    {
      "id": 6,
      "username": "Trina Kundu",
      "email": "trina@onjuno.com",
      "riskLevel": "Low",
      "triggerReason": "Temp flag",
      "inQueueFor": "8 days",
      "dateAddedOn": "2023-11-09",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-17",
      "status": "Pending",
      "reviewedBy": "Eve Williams",
      "reviewerEmail": "eve.williams@example.com"
    },
    {
      "id": 7,
      "username": "John Doe",
      "email": "john.doe@example.com",
      "riskLevel": "Medium",
      "triggerReason": "Temp flag",
      "inQueueFor": "2 days",
      "dateAddedOn": "2023-11-18",
      "previouslyReviewed": "No",
      "status": "Pending"
    },
    {
      "id": 8,
      "username": "Jane Smith",
      "email": "jane.smith@example.com",
      "riskLevel": "High",
      "triggerReason": "Hard flag",
      "inQueueFor": "3 days",
      "dateAddedOn": "2023-11-19",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-22",
      "status": "Completed",
      "reviewedBy": "Charlie Brown",
      "reviewerEmail": "charlie.brown@example.com"
    },
    {
      "id": 9,
      "username": "Bob Johnson",
      "email": "bob.johnson@example.com",
      "riskLevel": "Low",
      "triggerReason": "Restricted unflag",
      "inQueueFor": "5 days",
      "dateAddedOn": "2023-11-15",
      "previouslyReviewed": "No",
      "status": "Pending"
    },
    {
      "id": 10,
      "username": "Alice Williams",
      "email": "alice.williams@example.com",
      "riskLevel": "Medium",
      "triggerReason": "Unflag",
      "inQueueFor": "4 days",
      "dateAddedOn": "2023-11-16",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-20",
      "status": "Completed",
      "reviewedBy": "David Turner",
      "reviewerEmail": "david.turner@example.com"
    },
    {
      "id": 11,
      "username": "Charlie Brown",
      "email": "charlie.brown@example.com",
      "riskLevel": "High",
      "triggerReason": "Reviewed",
      "inQueueFor": "1 day",
      "dateAddedOn": "2023-11-20",
      "previouslyReviewed": "No",
      "status": "Pending"
    },
    {
      "id": 12,
      "username": "Eve Anderson",
      "email": "eve.anderson@example.com",
      "riskLevel": "Low",
      "triggerReason": "Temp flag",
      "inQueueFor": "6 days",
      "dateAddedOn": "2023-11-14",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-20",
      "status": "Completed",
      "reviewedBy": "Frank Miller",
      "reviewerEmail": "frank.miller@example.com"
    },
    {
      "id": 13,
      "username": "Michael Johnson",
      "email": "michael.johnson@example.com",
      "riskLevel": "High",
      "triggerReason": "Hard flag",
      "inQueueFor": "2 days",
      "dateAddedOn": "2023-11-17",
      "previouslyReviewed": "No",
      "status": "Pending"
    },
    {
      "id": 14,
      "username": "Sophie Miller",
      "email": "sophie.miller@example.com",
      "riskLevel": "Low",
      "triggerReason": "Restricted unflag",
      "inQueueFor": "7 days",
      "dateAddedOn": "2023-11-13",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-19",
      "status": "Completed",
      "reviewedBy": "Grace Turner",
      "reviewerEmail": "grace.turner@example.com"
    },
    {
      "id": 15,
      "username": "William Turner",
      "email": "william.turner@example.com",
      "riskLevel": "Medium",
      "triggerReason": "Unflag",
      "inQueueFor": "3 days",
      "dateAddedOn": "2023-11-18",
      "previouslyReviewed": "No",
      "status": "Pending"
    },
    {
      "id": 16,
      "username": "Mia Jackson",
      "email": "mia.jackson@example.com",
      "riskLevel": "High",
      "triggerReason": "Reviewed",
      "inQueueFor": "4 days",
      "dateAddedOn": "2023-11-16",
      "previouslyReviewed": "Yes",
      "dateReviewedOn": "2023-11-21",
      "status": "Completed",
      "reviewedBy": "Hannah Anderson",
      "reviewerEmail": "hannah.anderson@example.com"
    }
  ]
  
  
  
class Monitoring extends Component {

    state  = {type:'Pending',triggerreason:'',risklevel:''}

    pending = () => {
        this.setState({type:'Pending'})
    }

    completed = () => {
        this.setState({type:'Completed'})
    }    

    updateTrigger = (event) => {
        this.setState({triggerreason:event.target.value})
    }

    updateRiskLevel = (event) => {
      this.setState({risklevel:event.target.value})
    }
    

    render() {

     const {type,triggerreason,risklevel} = this.state
     
     let updatedData = userData.filter(item => item.status === type)
     
    updatedData = triggerreason !== ''  ? updatedData.filter(item => item.triggerReason === triggerreason): updatedData
    updatedData =  risklevel !== ''  ? updatedData.filter(item => item.riskLevel === risklevel): updatedData

    console.log({type,triggerreason,risklevel},updatedData);
    return(<div className="monitoring-page-container">
        
        <div className="pending-completed-container">
                <div>
                <button  onClick = {this.pending}  className={` ${type === 'Pending'? 'on-select' : ''} btn`}>Pending</button>
                <button onClick = {this.completed} className={` ${type === 'Completed'? 'on-select' : ''} btn`}>Completed</button>
                </div>
                <Popup
                            modal
                      trigger = {<button className= 'close-acc'>
                                  <AiOutlineCloseCircle  color = 'red' size = '20' width ='18' height = '18'/> 
                                  <span>Close Account</span>
                                  </button>}
                      className='popup-content'            
                  >
                      {close => (
                        <div className='close-acc-popup'>
                          <div className='close-acc-container'>
                            <div className ='heading-container'>
                              <h1 className='close-acc-heading'>Close Account</h1>
                              <button className='btn' onClick={() => close()}> <AiOutlineCloseCircle color = '#fe5c73' size = '25'/> </button>
                            </div>
                            <CloseAccount/>
                          </div>
                      
                      </div> 
                      )}
                </Popup>
        </div>

        <hr/>

        <div className='search-container'>
            <div className='search-bar-container'>
                <div className='search-input'>       
                <AiOutlineFileSearch size ='20'/>
                <input type ='search' className='input-field border' placeholder ='Search'/>
                </div>        

                <select className='dropdown'onChange = {this.updateTrigger} >
                    <option hidden>Trigger Reason</option>
                    <option value ='Hard flag'>Hard Flag</option>
                    <option value ='Temp flag'>Temp Flag</option>
                    <option value ='Restricted unflag'>Restricted Unflag</option>
                    <option value = 'Unflag'>Unflag</option>
                    <option value = 'Reviewed'>Reviewed</option>
                    <option value = ''>None</option>

                </select>
                <select className='dropdown' onChange = {this.updateRiskLevel}>
                    <option hidden>Risk Level</option>
                    <option value = 'Low'>Low</option>
                    <option value = 'Medium'>Medium</option>
                    <option value = 'High'>High</option>
                    <option value = ''>None</option>
                </select>
            </div>
            
        </div>    

        <table className='data-container'>
            
              <thead>
                <tr>
                <td>User</td> 
                <td>Risk Level</td> 
                <td>{type === 'Pending'? 'Trigger Reason' : 'Action Reason'}</td> 
                <td>{type === 'Pending'? 'In Queue For' : 'Time to Close'}</td> 
                <td>Date Added On </td>
                <td>{type === 'Pending'? 'Previously Reviewed' : 'Action Take By'}</td>
                </tr>
              </thead>
              <tbody>
            {updatedData.map(item => {
                return(<tr key = {item.id}>
                   <td>
                    <p>{item.username}</p>
                    <p>{item.email}</p>
                    </td>
                    <td>{item.riskLevel}</td>
                    <td>{item.triggerReason}</td>
                    <td>{item.inQueueFor}</td>
                    <td>{item.dateAddedOn}</td>
                    {type === 'Pending' ? <td><p>{item.previouslyReviewed}</p><p>{item.previouslyReviewed === 'Yes' ? item.dateReviewedOn:''}</p></td>:
                    <td><p>{item.reviewedBy}</p><p>{item.reviewerEmail}</p></td>}
                </tr>)
            })}
            </tbody>
            
            </table>    
    </div>)
    }
}

export default Monitoring