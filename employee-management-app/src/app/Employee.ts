export interface Employee {
    firstName: string,
    lastName: string,
    gender: 'M' | 'F' | 'O',
    dob: string | Date,
    department: string,
    id?: Number
}