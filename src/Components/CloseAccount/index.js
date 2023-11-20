import { Component } from "react";
import './index.css';

class CloseAccount extends Component {

    state = {email:'',uar:'',reason:'',note:'',fee:'',display:false}

    getDetails = (event) => {
        event.preventDefault();
        let {email,uar,reason,note,fee} = this.state
        
        if (fee === ''){
            fee = 'No';
        }

        if (email === '' || uar === '' || reason === '' || note === ''){
            alert('All fields are Mandatory');
        }else{
            this.setState({display:true})
        }
        
    }

    updateValue = (event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    render() {

        const {email,reason,note,display,uar,fee} = this.state 
        return(<div>
        <form>
            <div className="email-field">
            <label>Email</label>
            <input type = 'email' className="input-field" value = {email}  onChange ={this.updateValue} name = 'email'/>
            </div>
            <div className="radio-field">
                <label>Want to File UAR?</label>
                <div><input type = 'radio' name ='uar' value ='Yes' onChange={this.updateValue} /> <p>Yes</p></div>
                <div><input type = 'radio' name="uar" value ='No' onChange={this.updateValue}/> <p>No</p></div>
            </div>
            <div className="select-field">
                <label>Reason</label>
                <select className="input-field" onChange={this.updateValue} name ='reason' value={reason}>
                    <option hidden>Reason</option>
                    <option value ='Hard Flag'>Hard Flag</option>
                    <option value ='Temp Flag'>Temp Flag</option>
                    <option value ='Restricted Unflag'>Restricted Unflag</option>
                    <option value = 'Unflag'>Unflag</option>
                </select>
            </div>
            <div className="note-field">
                <label>Note</label>
                <textarea className="input-field" name = 'note' onChange = {this.updateValue} value ={note}>
                </textarea>
            </div>

            <div className="submit-container">
                <div><input type = 'radio' onChange = {this.updateValue}value = 'Yes' name ='fee'/>
                <label>Charge Closure Fee</label>
                </div>
                <button className="close-acc-btn" type = 'submit' onClick={this.getDetails}>Close Account</button>
            </div>
        </form>
        {display === true ? <div className="details-container">
            <p>Email: {email}</p>
            <p>Want to file UAR ? : {uar}</p>
            <p>Reason : {reason}</p>
            <p>Note : {note}</p>
            <p>Charge Closure Fee: {fee}</p>
        </div>:''}
        </div>)
    }
}

export default CloseAccount