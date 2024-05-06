export interface CustomerUpdateRequest {
  customerId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  gender: string;
  birthDate: Date;
  motherName: string;
  fatherName: string;
  nationalityIdentity: number;
}
