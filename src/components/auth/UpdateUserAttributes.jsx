import React from 'react';
import { updateUserAttribute } from 'aws-amplify/auth';
import { View } from '@aws-amplify/ui-react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// async function handleUpdateUserAttribute(attributeKey, value) {
//   try {
//     const output = await updateUserAttribute({
//       userAttribute: {
//         attributeKey,
//         value
//       }
//     });
//     handleUpdateUserAttributeNextSteps(output);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function handleUpdateUserAttributeNextSteps(output) {
//   const { nextStep } = output;

//   switch (nextStep.updateAttributeStep) {
//     case 'CONFIRM_ATTRIBUTE_WITH_CODE':
//       const codeDeliveryDetails = nextStep.codeDeliveryDetails;
//       console.log(
//         `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
//       );
//       break;
//     case 'DONE':
//       console.log(`attribute was successfully updated.`);
//       break;
//   }
// }

export const UpdateUser = () => {
    return(
        <div className="container">
        <h1 className="h1">Ingrese la información a modificar</h1>
        <Box
            component="form"
            sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="given_name" label="aaa" variant="outlined" />
        </Box>
        </div>
    )
}