import './Login.css';
import React from 'react';
import { LoginSystem } from './Login.jsx';

import {
    ThemeProvider,
    useTheme,
    View,
  } from '@aws-amplify/ui-react';

export const AuthenticatorTheme = () => {
    const { tokens } = useTheme();
    const theme = {
      name: 'Auth Theme',
      tokens: {
        components:
   {
          authenticator: {
            router: {
              boxShadow: `0 0 16px ${tokens.colors.overlay['10']}`,
              borderWidth: '0',
            },
            form: {
              padding: `${tokens.space.medium} ${tokens.space.xl} ${tokens.space.medium}`,
            },
          },
          button: {
            primary: {
              backgroundColor: '#2f5496', // Replace with your blue color
            },
            link: {
              color: tokens.colors.neutral['80'],
            },
          },
          fieldcontrol: {
            _focus: {
              boxShadow: `0 0 0 2px #2f5496`, // Replace with your blue color
            },
          },
          tabs: {
            item: {
              color: tokens.colors.neutral['80'],
              _active: {
                borderColor: tokens.colors.neutral['100'],
                color: '#2f5496', // Replace with your blue color
              },
            },
          },
        },
      },
    };
  
    return (
      <div className='justify'>
      <ThemeProvider theme={theme}>
        <View>
          <LoginSystem />
        </View>
      </ThemeProvider>
      </div>
    );
  }