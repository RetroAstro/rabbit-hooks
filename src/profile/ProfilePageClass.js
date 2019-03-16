import React from 'react'

class ProfilePage extends React.Component {
  handleClick = () => {
    // this one has a bug
    setTimeout(() => alert('Followed ' + this.props.user), 3000)

    // fixed code is here 
    // const { user } = this.props
    // setTimeout(() => alert('Followed ' + user), 3000)
  }

  render() {
    return <button onClick={this.handleClick}>Follow</button>
  }
}

export default ProfilePage
