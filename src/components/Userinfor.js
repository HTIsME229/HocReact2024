import React from "react";
class UserInfo extends React.Component{
    state={
        name:'Hoang Thang',
        age:19

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
export default UserInfo;