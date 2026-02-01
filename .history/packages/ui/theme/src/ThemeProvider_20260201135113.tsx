'use client'

import {CssBaseline, StyledEngineProvider} from '@mui/material'
import {ThemeProvider} from '@mui/material/styles'
import type {PropsWithChildren} from 'react'
import {useMemo} from 'react'
import {createAppTheme} from './createAppTheme'

export function ThemeProvider({children}: PropsWithChildren) {
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
