import React from 'react';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsConfig from './aws-exports';

Amplify.configure(awsConfig);

// import { LoginSystem } from './components/auth/login.jsx';
import { AuthenticatorTheme } from './components/auth/LoginThemeCustom.jsx';
// export async function handleSignUp({ 
//     username,
//     password,
//     email,
//     family_name,
//     address,
//     birthdate,
//     locale,
//     given_name,
//     matricula
//    }) {
//   try {
//     const { isSignUpComplete, userId, nextStep } = await signUp({
//       username,
//       password,
//       options: {
//         userAttributes: {
//           email,
//           family_name,
//           address,
//           birthdate,
//           locale,
//           given_name,
//           'custom:matricula': matricula.toString() // Convierte el número a cadena
//         },
//         // optional
//         autoSignIn: true// or SignInOptions e.g { authFlowType: "USER_SRP_AUTH" }
//       }
//     });
//     console.log(userId, nextStep);
//   } catch (error) {
//     console.log('error signing up:', error);
//   }
// }

export default function App () {
  return (
          <div className="App">
            <div className='WelcomeTable'>
              <AuthenticatorTheme />
            </div>
          </div>
      );
}

// export default function App() {
//   useEffect(() => {
//     testSignUp();
//   }, []);

//   return (
//       <div className="App">
//         <div className='WelcomeTable'>
// {/* |         <SignIn />
//           <Bienvenida />
//           <CollapsibleTable /> */}
//         </div>
//       </div>
//   );
// }

// const testUserData = {
//   username: 'testuser1',
//   password: 'testpassword12AC',
//   email: 'gomezdaddarioagus@yahoo.com',
//   family_name: 'Lopez',
//   address: 'Calle Falsa 123',
//   birthdate: '1990-01-01',
//   locale: 'es',
//   given_name: 'Jorge',
//   matricula: 76557890
// };

// async function testSignUp() {
//   try {
//     const result = await handleSignUp(testUserData);
//     console.log('Resultado:', result);
//   } catch (error) {
//     console.error('Error en la prueba:', error);
//   }
// }

// // testSignUp();
