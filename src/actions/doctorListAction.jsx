import { DOCTOR_LIST, SERVICE_NAME } from "../contexts/doctorsContext";

export const doctorListAction = () => {
  return {
    type: DOCTOR_LIST,
  };
};

export const setServiceName = (service) => {
  return {
    type: SERVICE_NAME,
    payload: service,
  };
};
