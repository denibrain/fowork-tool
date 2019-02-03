import React, { Component } from "react";

class Profile extends Component {
    state = {
        profile: null,
        error: ""
    };

    componentDidMount() {
        this.loadUserProfile();
    }

    loadUserProfile() {
        this.props.auth.getProfile((profile, error) => {
            this.setState({ profile: profile, error:error });
            console.log(error);
        });
    }

    render() {
        const { profile } = this.state;
        if (!profile) return null;
        return (
            <>
                <div>
                    <h1>Profile</h1>
                    <p>{profile.nickname}</p>
                    <img alt="profile.pic" src={profile.picture} />
                    <pre>{JSON.stringify(profile, null, 2)}</pre>
                </div>
            </>
        );
    }
}

export default Profile;
