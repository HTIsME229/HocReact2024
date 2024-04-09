import React from "react";
class AddUserInfo extends React.Component{
    state={
        name:'',
        age:''

    }

    handleOnChangeInput=(event)=>{
        this.setState({
            name:event.target.value,
        })

    }
    handleOnChangeAge=(event)=>{
        this.setState({
            age:event.target.value
        })

    }
    handleOnSubmit=(event)=>{
        event.preventDefault()
        console.log(this.state)
        this.props.handleAddNewUser({
            name:this.state.name
            , 
            age:this.state.age
        });
    }
    render(){
        return(
            <div> My Name is {this.state.name}
            Im {this.state.age} years old
          <form onSubmit={(event)=>this.handleOnSubmit(event)}>
             <label>Your Name:</label>
             <input value={this.state.name} type="text" onChange={(event)=>this.handleOnChangeInput(event)}></input>
             <label>Your Age:</label>
             <input value={this.state.age} type="text" onChange={(event)=>this.handleOnChangeAge(event)}></input>
             <button  type="submit">Submit</button>
          </form>

            </div>
        )
    }
}
export default AddUserInfo;