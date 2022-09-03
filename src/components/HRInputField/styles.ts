export const styles = {
  inputField: {
    height: '46px',

    // INVALID
    '& .Mui-error': {

      color: 'red !important',

      '& .MuiOutlinedInput-input': {
        color: 'red !important'
      },

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: 'red !important',
        background: 'none',
      },

    },

    '& label': {
      transition: 'all 0.2s linear'
    },

    '& label:not(.Mui-focused):not(.MuiFormLabel-filled)': {
      top: '50%',
      transform: 'translateY(-50%)'
    },

    '& input + fieldset': {
      paddingLeft: '20px',
      fontSize: '13px',
      '& legend': {
        width: 'auto',
        fontSize: '13px',
      },
    },
    '& .MuiInputLabel-root': {
      color: '#5A6974',
      padding: '0 15px',
      textTransform: 'uppercase',
      fontSize: '14px',

      // FOCUSED
      '&.Mui-focused': {
        color: '#8F77F1',

        // FOCUSED MuiOutlinedInput-root
        '& ~ .MuiOutlinedInput-root': {

          '& .MuiOutlinedInput-input': {
            color: 'white'
          },

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8F77F1',
            background: 'none',
          },
        },
      },

      // FILLED
      '&.MuiFormLabel-filled': {
        color: '#8F77F1',

        // FILLED MuiOutlinedInput-root
        '& ~ .MuiOutlinedInput-root': {

          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#8F77F1',
            background: 'none'
          },
          '& .MuiOutlinedInput-input': {
            color: 'white'
          }

        }
      },

    },

    '& .MuiOutlinedInput-root': {
      borderRadius: '20px',

      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: '#fff',
        background: '#fff',
        transition: 'all 0.15s linear'
      },
      '& .MuiOutlinedInput-input': {
        zIndex: 1,
        color: '#000',
        padding: '11.5px 25px',
      },
    },
    '&:hover': {
      '& .MuiInputLabel-root': {
        color: '#fff',
      },
      '& .MuiOutlinedInput-root': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#fff',
          background: 'none',
        },
        '& .MuiOutlinedInput-input': {
          color: '#fff',
          padding: '11.5px 25px',
        },
      },
    }
  }
}
