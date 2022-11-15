import { PopupButton } from '@typeform/embed-react'

export default function FormButton  (props) {
  return (
    <PopupButton id="eVEj4TuO" style={{ fontSize: 20 }} className={props.formClass}>
      {props.children}
    </PopupButton>
  )
}