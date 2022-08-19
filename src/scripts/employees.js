// Define a function that generates html for a list of employees displaying name, age, computer model, and computer manufacturer

import { useComputers, useDepartments, useEmployees, useLocations } from "./dataAccess"

export const EmployeeList = () => {
    const employees = useEmployees()
    const computers = useComputers()
    const departments = useDepartments()
    const locations = useLocations()
    const customerRelationships = useEmployeeCustomers()   // ?? Why use?  

    return `
        ${employees.map(employee => {
            const foundComputer = computers.find(computer => computer.id === employee.computerId)
            const foundDepartment = departments.find(department => department.id === employee.departmentId)
            const foundLocation = locations.find(location => location.id === employee.locationId)

            return `
            <div class="employee">
                <header class="employee__name">
                    <h1>${employee.firstName} ${employee.lastName}/h1>
                </header>
                <section class="employee__computer">
                    ${`Currently using a ${foundComputer.year} ${foundComputer.model}`}
                </section>
                <section class="employee__department">
                    ${`Works in the ${foundDepartment.name} department`}
                </section>
                <section class="employee__location">
                    ${`Works at the ${foundLocation.city} office`}
                </section>
            </div>
            `
        }).join("")}
    `
}