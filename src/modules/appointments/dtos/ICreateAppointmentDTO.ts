export default interface ICreateAppointmentDTO {
  id: string;
  physician_id: string;
  patient_id: string;
  date: Date;
}
