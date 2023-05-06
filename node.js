const express = require('express')
const app = express()

// Set up a route to handle messages
app.post('/messages', (req, res) => {
  // Save the message to the database
  const message = req.body
  saveMessageToDatabase(message)

  // Send a response
  res.send('Message received!')
})

// Set up a route to retrieve messages
app.get('/messages', (req, res) => {
  // Retrieve the messages from the database
  const messages = getMessagesFromDatabase()

  // Send the messages as a JSON response
  res.json(messages)
})

// Start the server
app.listen(3000, () => console.log('Server started on port 3000'))





<!-- JavaScript -->
<script>
  const messageForm = document.querySelector('#message-form')
  const messageInput = document.querySelector('#message-input')
  const messagesContainer = document.querySelector('#messages')

  // Listen for the message form submit event
  messageForm.addEventListener('submit', async (event) => {
    event.preventDefault()

    // Get the message from the input field
    const message = messageInput.value

    // Send the message to the backend API
    const response = await fetch('/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    })

    // Clear the input field
    messageInput.value = ''
  })

  // Retrieve messages from the backend API and display them
  const fetchMessages = async () => {
    const response = await fetch('/messages')
    const messages = await response.json()

    messages.forEach((message) => {
      const li = document.createElement('li')
      li.textContent = message.text
      messagesContainer.appendChild(li)
    })
  }

  // Call the fetchMessages function to display existing messages
  fetchMessages()
</script>