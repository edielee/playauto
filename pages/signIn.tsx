import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import FaceTwoToneIcon from '@mui/icons-material/FaceTwoTone';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleButton from 'react-google-button'
import { useForm } from 'react-hook-form';
import {FormHelperText} from '@mui/material'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'이전 어드민 사이트로 이동하려면 다음 링크를 클릭해주세요'}
      <Link color="inherit" href="http://qasys.playauto.co.kr/">
        Playauto
      </Link>{' '}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  
    const {register, handleSubmit, watch, formState:{errors}} = useForm<IFormInput>();

    const onSubmit = (data) => {
        console.log(data);
    }
    interface IFormInput {
        id: string;
        password: string;
    }

    /*
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    */

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <FaceTwoToneIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="id"
              label="ID"
              name="id"
              autoComplete="username"
              autoFocus
              {...register('id', {required:'ID는 필수값입니다'})}
            />
            <FormHelperText>{errors.id?.message}</FormHelperText>
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              {...register('password', {required:'비밀번호는 필수값입니다', minLength:{value:4, message:'비밀번호는 최소 4자리 이상입니다'}})}
            />
            <FormHelperText>{errors.password?.message}</FormHelperText>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="ID 기억하기"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 1 }}
            >
              로그인
            </Button>
            <Grid container>
              <Grid item >
                <Link href="./signUp" variant="body2">
                  {"계정이 없나요? 회원가입 하기"}
                </Link>
              </Grid>
            </Grid>
            <Typography 
                component="h5" 
                variant="subtitle2" 
                align='center'
                sx={{color:'#00000099', mt: 5, mb: 3}}
            >
                ----------------------------------  또는  ----------------------------------
            </Typography>
            <Grid container justifyContent={'flex-end'}>
                <Grid item>
                    <GoogleButton 
                        style={{marginBottom: '24px', width: '400px'}}
                        onClick={() => { console.log('Google button clicked') }}
                    />
                </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}