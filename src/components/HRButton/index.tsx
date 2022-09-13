// ** MUI Components
import BaseButton from '@mui/material/Button'

// ** Styles Imports
import { styles } from './styles'

// ** Types
import { ButtonProps } from '@mui/material'

export const HRButton = (props: ButtonProps) => {
  const modifiedProps = {
    ...props,
    sx: {
      ...(styles.button),
      ...(props.sx),
    }
  }

  return (
    <BaseButton {...modifiedProps} >
    </BaseButton>
  )
}
