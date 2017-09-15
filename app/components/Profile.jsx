import React from 'react'

/*
export default class Profile extends React.Component {
    render() {
      let hobbies = this.props.hobbies.map(hobby => {
          return <li>{hobby}</li>
      })
      return (
        <div>
            <h3>{this.props.name}</h3>
            <p>{this.props.name} is {this.props.age} and {this.props.bio}</p>
            <h4>Hobbies</h4>
            <ul>
                {hobbies}
            </ul>
        </div>
      )
    }
}*/
let Profile = props => (
    <div>
        <h3>{props.name}</h3>
        <p>{props.name} is {props.age} and {props.bio}</p>
        <h4>Hobbies</h4>
        <ul>
            {props.hobbies.map((hobby, index) => <li key={index}>Hobby is {hobby}</li>)}
        </ul>
    </div>
)

export default Profile
