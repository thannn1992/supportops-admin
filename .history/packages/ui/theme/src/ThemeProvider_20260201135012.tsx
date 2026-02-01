'use client'

import type {PropsWithChildren} from 'react'
import {useMemo} from 'react'
import {CssBaseline, StyledEngineProvider} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'

import {createAppTheme} from '@glohow-pro/theme/createAppTheme'

export function AppThemeProvider({children}: PropsWithChildren) {
  const theme = useMemo(() => createAppTheme(), [])
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
