import loginSchema from './auth/Auth';
import {
  stayAddPhotoSchema,
  stayDescriptionSchema,
  stayInformationSchema,
  stayNameSchema,
  stayPolicySchema,
} from './stay/Stay';
import vendorInformationSchema from './vendors/vendors';

export {
  vendorInformationSchema,
  stayInformationSchema,
  stayPolicySchema,
  stayAddPhotoSchema,
  stayDescriptionSchema,
  stayNameSchema,
  loginSchema,
};
