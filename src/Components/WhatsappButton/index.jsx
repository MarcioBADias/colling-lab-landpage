import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { ButtonContainer } from './style'

const WhatsAppButton = () => {
  const phoneNumber = '3191334590'
  const message =
    'Seja bem vindo ao Colling Lab! Vamos te ajudar a pensar como quem aplica suas redações. Como posso ajudar?'

  const encodedMessage = encodeURIComponent(message)

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  return (
    <ButtonContainer
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaWhatsapp />
    </ButtonContainer>
  )
}

export { WhatsAppButton }
