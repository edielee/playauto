import Table from '../atoms/Table/Table';
import styled, { ThemeProvider } from 'styled-components';
import { LightTheme } from '../styles/theme';
import Button from '../atoms/Button/Button';
import SelectBox from '../atoms/SelectBox/SelectBox';
import Label from '../atoms/Label';

//import GlobalStyle from '../styles/global';  에러나서 우선 주석처리

import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/styles';

export default function Tables() {
  const AppBlock = styled.div`
    width: 512px;
    margin: 0 auto;
    margin-top: 4rem;
    border: 1px solid black;
    padding: 1rem;
  `;

  return (
    <>
      {/*<<ThemeProvider theme={theme}>
        <Button
          type="button"
          color="main"
          variant="outlined"
          size="small"
          width={130}
        >
          통계관리
        </Button>
        </ThemeProvider>*/}

      <StylesProvider injectFirst>
        <StyledThemeProvider theme={LightTheme}>
          <ThemeProvider theme={LightTheme}>
            {/*<GlobalStyle/> // 에러나서 주석처리 
              <ThemeProvider theme={LightTheme}>*/}
            <div>
              <Label color='#333'>Test</Label>
              <SelectBox name='key_discountUnit' />
            </div>
            <p></p>
            <Button>Test</Button>
            <Table></Table>
          </ThemeProvider>
        </StyledThemeProvider>
      </StylesProvider>
    </>
  );
}
