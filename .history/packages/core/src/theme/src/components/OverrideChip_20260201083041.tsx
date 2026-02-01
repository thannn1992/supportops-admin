import React from 'react'
import type {Components, Theme} from '@mui/material/styles'
import {RiCloseLine} from '@remixicon/react'


export function OverrideChip(theme: Theme): Components['MuiChip'] {
  const {grey, primary, success, error, warning, info, common} = theme.palette
  const white = common.white

  return {
    defaultProps: {
      deleteIcon: <RiCloseLine/>,
      variant: 'filled',
      size: 'medium',
      color: 'primary',
    },

    variants: [
      // =====================
      // PRIMARY
      // =====================
      {
        props: {variant: 'filled', color: 'primary'},
        style: {
          backgroundColor: primary[500],
          color: grey[100],
          '&:hover': {backgroundColor: primary[600]},
          '&:active': {backgroundColor: primary[700]},
          '&.Mui-disabled': {
            backgroundColor: grey[100],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'tonal', color: 'primary'},
        style: {
          backgroundColor: primary[100],
          color: primary[700],
          '&:hover': {backgroundColor: primary[200]},
          '&:active': {backgroundColor: primary[300], color: primary[800]},
          '&.Mui-disabled': {
            backgroundColor: grey[50],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'text', color: 'primary'},
        style: {
          backgroundColor: 'transparent',
          color: primary[500],
          '&:hover': {backgroundColor: primary[100]},
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'outlined', color: 'primary'},
        style: {
          backgroundColor: 'transparent',
          borderColor: primary[300],
          color: primary[500],
          '&:hover': {backgroundColor: primary[100]},
          '&:active': {backgroundColor: primary[200]},
          '&.Mui-disabled': {
            borderColor: grey[200],
            color: grey[400],
          },
        },
      },
      // =====================
      // SUCCESS
      // =====================
      {
        props: {variant: 'filled', color: 'success'},
        style: {
          backgroundColor: success[500],
          color: white,
          '&:hover': {backgroundColor: success[600]},
          '&:active': {backgroundColor: success[700]},
          '&.Mui-disabled': {
            backgroundColor: grey[100],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'tonal', color: 'success'},
        style: {
          backgroundColor: success[100],
          color: success[700],
          '&:hover': {backgroundColor: success[200]},
          '&:active': {backgroundColor: success[300], color: success[800]},
          '&.Mui-disabled': {
            backgroundColor: grey[50],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'text', color: 'success'},
        style: {
          backgroundColor: 'transparent',
          color: success[500],
          '&:hover': {backgroundColor: success[100]},
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'outlined', color: 'success'},
        style: {
          backgroundColor: 'transparent',
          borderColor: success[300],
          color: success[500],
          '&:hover': {backgroundColor: success[100]},
          '&:active': {backgroundColor: success[200]},
          '&.Mui-disabled': {
            borderColor: grey[200],
            color: grey[400],
          },
        },
      },
      // =====================
      // ERROR
      // =====================
      {
        props: {variant: 'filled', color: 'error'},
        style: {
          backgroundColor: error[500],
          color: grey[100],
          '&:hover': {backgroundColor: error[600]},
          '&:active': {backgroundColor: error[700]},
          '&.Mui-disabled': {
            backgroundColor: grey[100],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'tonal', color: 'error'},
        style: {
          backgroundColor: error[100],
          color: error[700],
          '&:hover': {backgroundColor: error[200]},
          '&:active': {backgroundColor: error[300], color: error[800]},
          '&.Mui-disabled': {
            backgroundColor: grey[50],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'text', color: 'error'},
        style: {
          backgroundColor: 'transparent',
          color: error[500],
          '&:hover': {backgroundColor: error[100]},
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'outlined', color: 'error'},
        style: {
          backgroundColor: 'transparent',
          borderColor: error[300],
          color: error[500],
          '&:hover': {backgroundColor: error[100]},
          '&:active': {backgroundColor: error[200]},
          '&.Mui-disabled': {
            borderColor: grey[200],
            color: grey[400],
          },
        },
      },
      // =====================
      // WARNING
      // =====================
      {
        props: {variant: 'filled', color: 'warning'},
        style: {
          backgroundColor: warning[500],
          color: grey[100],
          '&:hover': {backgroundColor: warning[600]},
          '&:active': {backgroundColor: warning[700]},
          '&.Mui-disabled': {
            backgroundColor: grey[100],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'tonal', color: 'warning'},
        style: {
          backgroundColor: warning[100],
          color: warning[700],
          '&:hover': {backgroundColor: warning[200]},
          '&:active': {backgroundColor: warning[300], color: warning[800]},
          '&.Mui-disabled': {
            backgroundColor: grey[50],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'text', color: 'warning'},
        style: {
          backgroundColor: 'transparent',
          color: warning[500],
          '&:hover': {backgroundColor: warning[100]},
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'outlined', color: 'warning'},
        style: {
          backgroundColor: 'transparent',
          borderColor: warning[300],
          color: warning[500],
          '&:hover': {backgroundColor: warning[100]},
          '&:active': {backgroundColor: warning[200]},
          '&.Mui-disabled': {
            borderColor: grey[200],
            color: grey[400],
          },
        },
      },
      // =====================
      // INFO
      // =====================
      {
        props: {variant: 'filled', color: 'info'},
        style: {
          backgroundColor: info[500],
          color: grey[100],
          '&:hover': {backgroundColor: info[600]},
          '&:active': {backgroundColor: info[700]},
          '&.Mui-disabled': {
            backgroundColor: grey[100],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'tonal', color: 'info'},
        style: {
          backgroundColor: info[100],
          color: info[700],
          '&:hover': {backgroundColor: info[200]},
          '&:active': {backgroundColor: info[300], color: info[800]},
          '&.Mui-disabled': {
            backgroundColor: grey[50],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'text', color: 'info'},
        style: {
          backgroundColor: 'transparent',
          color: info[500],
          '&:hover': {backgroundColor: info[100]},
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'outlined', color: 'info'},
        style: {
          backgroundColor: 'transparent',
          borderColor: info[300],
          color: info[500],
          '&:hover': {backgroundColor: info[100]},
          '&:active': {backgroundColor: info[200]},
          '&.Mui-disabled': {
            borderColor: grey[200],
            color: grey[400],
          },
        },
      },
      // =====================
      // NEUTRAL
      // =====================
      {
        props: {variant: 'filled', color: 'neutral'},
        style: {
          backgroundColor: grey[700],
          color: white,
          '&:hover': {
            backgroundColor: grey[600],
          },
          '&:active': {
            backgroundColor: grey[700],
          },
          '&.Mui-disabled': {
            backgroundColor: grey[100],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'tonal', color: 'neutral'},
        style: {
          backgroundColor: grey[100],
          color: grey[700],
          '&:hover': {
            backgroundColor: grey[200],
          },
          '&:active': {
            backgroundColor: grey[300],
            color: grey[700],
          },
          '&.Mui-disabled': {
            backgroundColor: grey[50],
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'text', color: 'neutral'},
        style: {
          backgroundColor: 'transparent',
          color: grey[700],
          '&:hover': {
            backgroundColor: grey[100],
          },
          '&.Mui-disabled': {
            backgroundColor: 'transparent',
            color: grey[400],
          },
        },
      },
      {
        props: {variant: 'outlined', color: 'neutral'},
        style: {
          backgroundColor: 'transparent',
          color: grey[700],
          borderColor: grey[200],
          '&:hover': {
            backgroundColor: grey[100],
          },
          '&:active': {
            backgroundColor: white,
            borderColor: grey[700],
          },
          '&.Mui-disabled': {
            borderColor: grey[200],
            color: grey[400],
          },
        },
      },
    ],
  }
}
