// ** Custom UI Components


// ** Styles Imports
import { HRLink } from 'src/components/HRLink'



export const HRAuthLink: typeof HRLink = (props) => {
  const modifiedProps = {
    ...props,
    sx: {
      ...(props.sx),
    }
  }

  return (
    <HRLink {...modifiedProps}>
    </HRLink>
  )
}
