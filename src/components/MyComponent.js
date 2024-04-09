import React from "react";
import AddUserinfor from "./AddUserinfor";
import DisplayInfor from "./DisplayInfor";
class Mycomponent extends React.Component{
   state={
    lisUsers:[
        {id:1, name:"Hoang Thang", age:"19"},
       { id:2, name:"XUan Song", age:"16"},
       { id:3, name:"Dang Viet", age:"17"}
    ]
   }
   handleAddNewUser =(newuser)=>{
            this.setState({
                lisUsers: [newuser, ...this.state.lisUsers]
                
            })
   }
   handleDeleteUser= (userId) => {
    let listUserClone= [...this.state.lisUsers];
listUserClone=listUserClone.filter(item=>item.id !== userId)
  this.setState({
    lisUsers: [...listUserClone]
  })
   }
    render(){
        console.log(this.props)

        return(
            <>
            <div className="a">
             <AddUserinfor
             handleAddNewUser={this.handleAddNewUser}></AddUserinfor>
              <DisplayInfor lisUsers={this.state.lisUsers}
                        handleDeleteUser={this.handleDeleteUser}
               ></DisplayInfor>
            </div>
            <div className="b">

            </div>
            </>
        )
    }
}
export default Mycomponent;