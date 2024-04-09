import React from "react";
import UserInfo from "./Userinfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component{
   state={
    lisUsers:[
        {id:1, name:"Hoang Thang", age:"19"},
       { id:2, name:"XUan Song", age:"16"},
       { id:3, name:"Dang Viet", age:"17"}
    ]
   }
    render(){
        console.log(this.props)

        return(
            <div>
             <UserInfo></UserInfo>
              <DisplayInfor lisUsers={this.state.lisUsers} ></DisplayInfor>
            </div>
        )
    }
}
export default Mycomponent;