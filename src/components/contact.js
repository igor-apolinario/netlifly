import React from "react"

import "./contact.css"

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  return (
    <form name="contact" method="post" data-netlify="true" data-netlify-recaptcha="true">
      <input type="hidden" name="form-name" value="contact" />
      <p class="hidden">
        <label>Não preencha este campo se você for um humano: <input name="bot-field" /></label>
      </p>
      <p>
        <label>
          Nome:
          <br />
          <input type="text" name="name" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          E-mail:
          <br />
          <input type="email" name="email" onChange={handleChange} />
        </label>
      </p>
      <p>
        <label>
          Mensagem:
          <br />
          <textarea name="message" onChange={handleChange} />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}