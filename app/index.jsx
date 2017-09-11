import React from 'react'
import ReactDOM from 'react-dom'

class Profile extends React.Component {
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
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: [
                {
                    name: "Sue",
                    age: 30,
                    bio: 'enjoys swimming and biking',
                    hobbies: ['Swimming', 'biking']
                },
                {
                    name: "Bill",
                    age: 40,
                    bio: "enjoys long walks on the beach",
                    hobbies: ['gardening', 'games']
                }
            ]
        }
        this.addUser = this.addUser.bind(this);
    }

    addUser(e) {
        console.log("this: ", this);
        var user = {
            name: 'Tom',
            age: 22,
            bio: 'enjoys sports',
            hobbies: [
                'basketball',
                'baseball'
            ]
        }
        this.setState({
            profiles: this.state.profiles.concat([user])
        })
    }

    render() {
        console.log("rendering");
        let profiles = this.state.profiles.map(profile => {
            return (
              <div>
                  <Profile
                    name = {profile.name}
                    age = {profile.age}
                    bio = {profile.bio}
                    hobbies = {profile.hobbies}
                  />
              </div>
            )
        })
        return (
            <div>
              {profiles}
              <button onClick={this.addUser}>Add new profile</button>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));
