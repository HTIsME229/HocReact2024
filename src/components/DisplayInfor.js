import React from "react";
import './DisplayInfo.scss'
import logo1 from './../logo.svg'
class DisplayInfor extends React.Component{
   state={
    isShow:true
   }
    handleShowHide = ()=>{
      this.setState({
        isShow:!this.state.isShow
      })
   }
    render(){
        const {lisUsers}=this.props
        console.log(lisUsers)
        return(
          <div className="Display-infor-container">
            {/* <img src={logo1}/> */}
            <div>
                <span onClick={()=>{this.handleShowHide()}}>{this.state.isShow ? "Hide List User":"Show list user"}</span>
            </div>
            {this.state.isShow &&
             <div>
            
               {lisUsers.map((user)=>{{
                 
                 return(
                     <div key={user.id} className={+user.age>18 ? "red":"green"}> 
                              <div>My Name is {user.name}</div>
                               <div>My age is {user.age} </div>
                             <hr></hr>
                             <div>
                                <button onClick={()=>this.props.handleDeleteUser(user.id)}>Delete</button>
                             </div>
                         </div>
                          
                 )
                   }
              
               })}
             </div>
    }
          </div>
        )
    }
}
export default DisplayInfor;