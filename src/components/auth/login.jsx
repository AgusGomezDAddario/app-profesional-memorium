import { React } from "react";
import { Amplify } from "aws-amplify";
import {
  Authenticator,
  useTheme,
  View,
  Heading,
  Button,
  Text,
  Image,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { awsmobile as awsExports } from "../../aws-exports";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { logo } from "../../images/logo_memorium_white.png";
import { I18n } from "aws-amplify/utils";
import { translations } from "@aws-amplify/ui-react";
import { PacientesTable } from "../PacientesTable";

Amplify.configure(awsExports);

I18n.putVocabularies(translations);
I18n.setLanguage("es");

I18n.putVocabularies({
  es: {
    "Sign In": "Ingresar",
    "Sign Up": "Regístrate",
  },
});

const components = {
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image alt="Memorium logo" src={logo} style={{ maxWidth: "100px" }} />
      </View>
    );
  },

  SignIn: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Ingrese a su cuenta
        </Heading>
      );
    },
    Footer() {
      const { toForgotPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toForgotPassword}
            size="small"
            variation="link"
          >
            Olvidaste tu contraseña?
          </Button>
        </View>
      );
    },
  },

  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Crear una cuenta
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            Volver a inicio de sesión
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Ingrese la información
        </Heading>
      );
    },
  },
  SetupTotp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          textAlign={"center"}
        >
          Enviar información
        </Heading>
      );
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          textAlign={"center"}
        >
          Ingrese la información
        </Heading>
      );
    },
  },
  ForgotPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          textAlign={"center"}
        >
          Ingrese su email
        </Heading>
      );
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
          textAlign={"center"}
        >
          Ingrese la información
        </Heading>
      );
    },
  },
};

const formFields = {
  signIn: {
    username: {
      placeholder: "Ingrese su usuario",
      label: "Usuario",
    },
    password: {
      label: "Contraseña",
      placeholder: "Ingrese su contraseña",
    },
  },
  signUp: {
    address: {
      label: "Dirección",
      placeholder: "Ingrese su residencia",
      isRequired: true,
      order: 6,
    },
    password: {
      label: "Contraseña",
      placeholder: "Ingrese su contraseña",
      isRequired: true,
      order: 4,
    },
    confirm_password: {
      placeholder: "Confirme su contraseña",
      label: "Confirmar constraseña",
      order: 5,
    },
    "custom:matricula": {
      placeholder: "Ingrese su matricula",
      isRequired: true,
      label: "Matricula",
      order: 9,
    },
    email: {
      placeholder: "Ingrese su email",
      isRequired: true,
      label: "Email",
      order: 7,
    },
    username: {
      placeholder: "Ingrese su usuario",
      isRequired: true,
      label: "Usuario",
      order: 3,
    },
    birthdate: {
      placeholder: "Ingrese su fecha de nacimiento",
      isRequired: true,
      label: "Fecha de nacimiento",
      order: 8,
    },
    given_name: {
      placeholder: "Ingrese su nombre",
      isRequired: true,
      label: "Nombre",
      order: 2,
    },
    family_name: {
      placeholder: "Ingrese su apellido",
      isRequired: true,
      label: "Apellido",
      order: 1,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: "Ingrese su contraseña",
    },
  },
  forgotPassword: {
    username: {
      placeholder: "Ingrese su email",
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: "Enviar su código",
      label: "Ingrese su código",
      isRequired: false,
    },
    confirm_password: {
      placeholder: "Ingrese su contraseña",
    },
  },
  setupTotp: {
    QR: {
      totpIssuer: "test issuer",
      totpUsername: "amplify_qr_test_user",
    },
    confirmation_code: {
      label: "Ingrese su código",
      placeholder: "Ingrese su código",
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: "Ingrese su código",
      placeholder: "Ingrese su código",
      isRequired: false,
    },
  },
};

export const LoginSystem = () => {
  return (
    <Authenticator formFields={formFields} components={components}>
      {() => (
        <>
          <PacientesTable />
        </>
      )}
    </Authenticator>
  );
};
