import React from 'react'

import Profile from './Profile.jsx'
import AddProfile from './AddProfile.jsx'

import {getProfiles} from '../utils/profileApi'

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            profiles: []
        }
        this.addUser = this.addUser.bind(this);
    }

    componentDidMount() {
        getProfiles().then(profiles => {
            this.setState({
                profiles: profiles
            })
        })
    }

    addUser(newProfile) {
        this.setState({
            profiles: this.state.profiles.concat([newProfile])
        })
    }

    render() {
        let profiles = this.state.profiles.map((profile, index) => {
        console.log(`profile id: ${profile.id}`);
            return (
              <div key={index}>
                  <Profile
                    key = {profile.id}
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
              <AddProfile addUser={this.addUser} />
            </div>
        )
    }
}
