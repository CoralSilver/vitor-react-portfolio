import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./contact.scss";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit (e)  {
    e.preventDefault();
    axios({
      method: "POST",
      url:"http://localhost:3002/send",
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success') {
        alert("Message Sent.");
        this.resetForm()
      } else if (response.data.status === 'fail') {
        alert("Message failed to send.")
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} method="POST">
      <input
        type="text"
        label="Name"
        type="text"
        value={name}
        required
        onChange={(e) => setName({ name: e.target.value })}
      />
      <input
        type="text"
        label="Email"
        type="email"
        value={email}
        required
        onChange={(e) => setEmail({ email: e.target.value })}
      />
      <input
        type="text"
        label="Subject"
        type="text"
        value={subject}
        required
        onChange={(e) => setSubject({ subject: e.target.value })}
      />
      <input
        type="text"
        label="Message"
        type="text"
        value={message}
        onChange={(e) => setMessage({ message: e.target.value })}
      />
      <button type="submit">Submit </button>
    </form>
  );
};
