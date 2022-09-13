// ** MUI Imports
import TextField, { TextFieldProps } from '@mui/material/TextField'

// ** Styles Imports
import { styles } from './styles'

// ** Type Imports
import type React from 'react'

export const HRInputField = (props: TextFieldProps) => {
  const modifiedProps = {
    ...props,
    sx: {
      ...(styles.inputField),
      ...(props.sx)
    }
  }

  return (
    <TextField {...modifiedProps} />
  )
}
