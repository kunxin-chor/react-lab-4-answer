import React from "react"

export default class Register extends React.Component {
    
    state = {
        username:"",
        password:"",
        accept:false,
        validationResults: {
            username: false,
            password:false,
            accept:false
        }
    }
    
    handleChange= (event) => {
        this.setState({
           [event.target.name] :event.target.value 
        });
        
        if (event.target.name === 'username') {
            
            // check for username
        } else if (event.target.name === 'password') {
            
            // check for password
        }
    }
    
    handleCheckbox = (event) => {
        this.setState({
            [event.target.name] : event.target.checked
        })
    }
    
    validateUsername() {
        
        let cloned = {...this.state.validationResults};
        
        if (this.state.username.length <3) {
            cloned.username = false;
        } else {
            cloned.username = true;   
        }
        
         this.setState({
            validationResults:cloned
        })
        
        /*
        
            // this.setState({
            //     ...this.state.validationResults,
            //     username: this.state.username.length <= 3
            // })
        
        */
    }

    validatePassword() {
        
        let cloned = {...this.state.validationResults};
        
        let specials = ['!', '@', '#'];
        let haveSpecial = false;
        console.log(this.state.password);
        for (let s of specials) {
            
            if (this.state.password.indexOf(s) > -1) {
                haveSpecial = true;
                break;
            }
        }
        cloned.password = haveSpecial;
        
        this.setState({
            validationResults:cloned
        })
        
    }
    
    validateAccept() {
        let cloned = {...this.state.validationResults}
        cloned.accept = this.state.accept;
        this.setState({
            validationResults:cloned
        })
    }
    
    render() {
        return (
            <div>
                <div>
                   
                    <label>Username:</label>
                    <input type='text' name='username' onChange={ event => {
                       this.handleChange(event);
                       this.validateUsername();
                    }} value={this.state.username}/>
                    
                    <br/>
                    
                    <div>
                    { this.state.validationResults.username === false ? <p>Please make sure your username more than 3 characters</p> : null}
                    </div>
                    
                </div>
                <div>
                    <label>Password:</label>
                    <input type='text' name='password' onChange={event => {
                      this.handleChange(event);
                      setTimeout(()=>{
                          
                           this.validatePassword()
                          
                      }, 100);
                     
                    }} value={this.state.password}/>
                    <div>
                    { this.state.validationResults.password === false ? <span>Please make sure your password has at least one special character</span> : null }
                    </div>
                </div>
                <div>
                    <input type='checkbox' name='accept' onChange={(event)=>{
                         this.handleCheckbox(event)
                         setTimeout( ()=>{
                            this.validateAccept()    
                         }, 100)
                         
                    }} checked={this.state.accept}/>I accept the terms and conditions
                    <div>
                    { this.state.validationResults.accept === false ? <span>Please accept the terms and conditions</span> : null}
                    </div>
                </div>
            
            
            </div>
            
        )
    }
}