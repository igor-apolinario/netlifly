import React from "react"

export default class IndexPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    alert(`Welcome ${this.state.firstName} ${this.state.lastName}!`)
  }

  render() {
    return (
      <form name="contact" netlify>
        <label>
          Name
          <input type="text" name="name" id="name" />
        </label>

        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>

        <label>
          Subject
          <input type="text" name="subject" id="subject" />
        </label>

        <label>
          Message
          <textarea name="message" id="message" rows="5" />
        </label>

        <button type="submit">Send</button>
      </form>
    )
  }
}