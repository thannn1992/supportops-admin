
// apps/web/app/components/LoginForm.tsx
'use client'

import EmailIcon from '@mui/icons-material/Email'
import SearchIcon from '@mui/icons-material/Search'
import { Stack } from '@mui/material'
import { TextInputField } from '@supportops/ui-form'
import { useForm } from 'react-hook-form'

interface LoginFormValues {
  email: string
  password: string
  search: string
}

export  function LoginForm() {
  const {control, handleSubmit} = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: '',
      search: '',
    },
  })

  const onSubmit = (data: LoginFormValues) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Simple Empty */}
      <TextInputField
        name="search"
        control={control}
        placeholder="Simple Empty"
      />

      {/* With Search Icon */}
      <TextInputField
        name="search"
        control={control}
        placeholder="Search"
        startIcon={<SearchIcon />}
      />

      {/* With Label and Helper Text */}
      <TextInputField
        name="email"
        control={control}
        label="Your email"
        placeholder="name@example.com"
        startIcon={<EmailIcon />}
        helperText={
          <>
    
  {'ahihi'}
          </>
        }
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
      />

      {/* Disabled */}
      <TextInputField
        name="search"
        control={control}
        placeholder="Disabled"
        startIcon={<SearchIcon />}
        disabled
      />

      {/* Success State */}
      <TextInputField
        name="email"
        control={control}
        placeholder="Success input"
        status="success"
        successMessage="Some success message!"
      />

      {/* Error State */}
      <TextInputField
        name="email"
        control={control}
        placeholder="Danger input"
        status="error"
        rules={{
          required: 'There was an error.',
        }}
      />

      {/* Auto Success State (when valid + touched) */}
      <TextInputField
        name="email"
        control={control}
        label="Your email"
        placeholder="name@example.com"
        showSuccessState
        successMessage="Email looks good!"
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email address',
          },
        }}
      />

      <button type="submit">Submit</button>
    </form>
  )
}


export default function LoginPage() {
  return (
   <Stack>
      <LoginForm/>
   </Stack>
  );
}