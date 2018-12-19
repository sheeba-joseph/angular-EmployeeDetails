import { InMemoryDbService } from 'angular-in-memory-web-api';
export class EmpData implements InMemoryDbService {
    createDb() {
        const employees = [
            { id: 1, name: 'Tom', salary: 3400, gender: 'Male', isActive: true, department: 2 },
            { id: 2, name: 'Mary', salary: 4000, gender: 'Female', isActive: true, department: 2 },
            { id: 3, name: 'Mark', salary: 4400, gender: 'Male', isActive: true, department: 2 }
        ];
        return { employees }; // api/employees
    }
}


