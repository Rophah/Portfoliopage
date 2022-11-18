// import { useParams } from 'react-router-dom'
// import { useSuperHeroData } from '../hooks/useSuperHeroData'

import React from 'react'

const RQSuperHeroPage = () => {
  // const { heroId } = useParams()
  // const { isLoading, data, isError, error } = useSuperHeroData(heroId)

  // if (isLoading) {
  //   return <h2>Loading...</h2>
  // }

  // if (isError) {
  //   return <h2>{error.message}</h2>
  // }
  return (
    <div>
      {/* {data.data.name} - {data.data.alterEgo} */}
      <>RQSuperHeroPage</>
    </div>
  )
}

export default RQSuperHeroPage

{/* <form id="form">
  <div>
  <input type={'text'} name="username" id="username" />
  <span id="usernameError"></span>
</div>

<div>
  <input type={'email'} name="email" id="email" />
  <span id="emailError"></span>
</div>

<div>
  <input type={'text'} name="message" id="message" />
  <span id="messageError"></span>
</div>
<button type="submit" id="button" disabled>Submit</button>
</form> */}


// const form = document.querySelector('#form')
const button = document.querySelector('#button')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const message = document.querySelector('#message')
const usernameError = document.querySelector('#usernameError')
const emailError = document.querySelector('#emailError')
const messageError = document.querySelector('#messageError')

const allErrors = {
  emailIsValid: false,
  usernameIsValid: false,
  messagesValid: false,
}

const changeButtonState = () => {
  const { emailIsValid, usernameIsValid, messagesValid } = allErrors
  if (emailIsValid && usernameIsValid && messagesValid) {
    button?.disabled = true
  } else {
    button.disabled = false
  }
}

const checkIfnotEmpty = (value, errorClassName) => {
  if (!value) {
    return false
  }

  return true
}

const emailIsValid = (value) => {
  const regExp = 'fghfgd'
  if (value not match regExp){
    return false
  }
  return true
}

username?.addEventListener('change', (e) => {
  const checkUsernameIsValid = checkIfnotEmpty(e.target.value, )
  if (e.target.value < 5 &&  !checkUsernameIsValid) {
    usernameError.innerText = 'Name shlud not be less than 4 chars'
  } else {
    allErrors.usernameIsValid = true
    usernameError.innerText = ''
  }
  changeButtonState()
})

message?.addEventListener('change', (e) => {
  const checkUsernameIsValid = checkIfnotEmpty(e.target.value, )
  if (e.target.value < 15 &&  !checkUsernameIsValid) {
    usernameError.innerText = 'Name shlud not be less than 4 chars'
  } else {
    allErrors.messageIsValid = true
    messageError.innerText = ''
  }
  changeButtonState()
})

email?.addEventListener('change', (e) => {
  const checkUsernameIsValid = checkIfnotEmpty(e.target.value, )
  if (e.target.value < 15 &&  !checkUsernameIsValid) {
    emailError.innerText = 'email shlud not be less than 4 chars'
  }

  if (emailIsValid(e.ytarget.value)) {
    emailError.innerText = 'email shlud be a valid email'
  }

  if (allpasses) {
    emailError.innerText = ''
    allErrors.emailIsValid = true
  }
  changeButtonState()
})
