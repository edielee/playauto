import React from 'react';
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
import { useForm } from 'react-hook-form';
import {FormHelperText} from '@mui/material'

const theme = createTheme();

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://plto.com/">
        Playauto
      </Link>{' '}
    </Typography>
  );
}

export default function SignUp() {
    
    const {register, handleSubmit, watch, formState:{errors}} = useForm<IFormInput>();

    const onSubmit = (data) => {
        // console.log(data);
    }
    
    interface IFormInput {
        name: string;
        email: string;
        id: string;
        password: string;
        password2: string;
        unit?: string;
    }

    console.log(`=============== errors================`);
    console.log(errors);
    console.log(`======================================`);
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
            회원가입
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="name"
                  name="name"
                  required
                  fullWidth
                  id="name"
                  label="이름"
                  autoFocus
                  {...register('name', {required: '이름은 필수값입니다'})}
                />
                <FormHelperText>{errors.name?.message}</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="이메일"
                  name="email"
                  autoComplete="email"
                  {...register('email', 
                    {
                        required: '이메일은 필수값입니다', 
                        pattern:{
                            value: /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i,
                            message: '올바른 이메일 형식이 아닙니다'
                        }
                    }
                  )}
                />
                <FormHelperText>{errors.email?.message}</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  name="id"
                  autoComplete="username"
                  {...register('id', {required: 'ID는 필수값입니다'})}
                />
                <FormHelperText>{errors.id?.message}</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="비밀번호"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  {...register(
                      'password', 
                      { required: '비밀번호는 필수값입니다', 
                        minLength:{ 
                            value:4, 
                            message:'비밀번호는 최소 4자리 이상입니다.'
                        }
                      }
                  )}
                />
                <FormHelperText>{errors.password?.message}</FormHelperText>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password2"
                  label="비밀번호 확인"
                  type="password"
                  id="password2"
                  autoComplete="new-password" 
                  {...register(
                      'password2', 
                      { required: '비밀번호 확인은 필수값입니다', 
                        validate: value => value === watch('password') || '비밀번호가 일치하지 않습니다',
                      }
                  )}
                />
                <FormHelperText>{errors.password2?.message}</FormHelperText>
                
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="organization-title"
                  name="unit"
                  fullWidth
                  id="unit"
                  label="소속 유닛"
                  {...register('unit')}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="회원가입에 동의합니다."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              가입 요청하기
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./signIn" variant="body2">
                  이미 계정이 있으신가요? 로그인 하기
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}