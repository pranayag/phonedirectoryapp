import React from 'react'
import './Add.css'

class Add extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      cno: '',
      err: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let newContact = {
      name: this.state.name,
      cno: this.state.cno,
      id: Date.now()
    }

    if (newContact.name === '') {
      this.setState({
        err: 'Please enter a name'
      })
    } else if (isNaN(newContact.cno) || newContact.cno.length !== 10) {
      this.setState({
        err: 'Please enter a valid 10 digit phone number'
      })
    } else {
      this.setState({
        name: '',
        cno: '',
        err: ''
      })
      this.props.addContact(newContact)
    }  

  }

  render() {
    return (
      <div id='add'>
        <div id='page-title'>Add</div>
        <div id='form-box'>
          <div id='form-title'>
            New Contact
          </div>
          <form onSubmit={this.handleSubmit}>
            <p id='msg'>{this.state.err ? this.state.err : '*Please fill in the details below'}</p>
            <input placeholder='Full Name' type='text' onChange={this.handleChange} name='name' value={this.state.name} />
            <input placeholder='Phone Number' type='text' onChange={this.handleChange} name='cno' value={this.state.cno} />
            <input type='submit' value='Create' />
          </form>
        </div>
      </div>
    )
  }    
}

export default Add