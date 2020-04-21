import * as yup from "yup";

// todo: change yup validations to valid ones

export default {
  smsCodeValidation: yup.object().shape({
    phone: yup
      .string()
      .trim()
      .required()
      .min(2, "Phone number is invalid")
  }),
  authValidation: yup.object().shape({
    phone: yup
      .string()
      .trim()
      .required()
      .min(2, "First name is too short"),
    smsCode: yup
      .string()
      .required()
      .length(6, "Sms code is invalid")
  })
};
