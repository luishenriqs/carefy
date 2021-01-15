export default interface ICreateAppointmentDTO {
  physician_id: string;
  patient_id: string;
  day: string;
  month: string;
  start: string;
  end: string;
}
