const applicationState = {
    computers: [],
    employees: [],
    departments: [],
    locations: []
}

const API = "http://localhost:8088"
const mainContainer = document.querySelector("#container")

export const fetchComputers = () => {
    return fetch(`${API}/computers`)
    .then(res => res.json())
    .then(computerData => applicationState.computers = computerData)
}
export const fetchLEmployees = () => {
    return fetch(`${API}/employees`)
    .then(res => res.json())
    .then(employeeData => applicationState.employees = employeeData)
}
export const fetchDepartments = () => {
    return fetch(`${API}/departments`)
    .then(res => res.json())
    .then(departmentData => applicationState.departments = departmentData)
}
export const fetchLocations = () => {
    return fetch(`${API}/locations`)
    .then(res => res.json())
    .then(locationData => applicationState.locations = locationData)
}
export const fetchCustomers = () => {
    return fetch(`${API}/customers`)
    .then(res => res.json())
    .then(customerData => applicationState.customers = customerData)
}
export const fetchEmployeeCustomers = () => {
    return fetch(`${API}/employeecustomers`)
    .then(res => res.json())
    .then(employeeCustomerData => applicationState.employeecustomers = employeeCustomerData)
}

// Are these supposed to be providers like what are used for React? (getComputers => ComputerProvider)
export const useComputers = () => {
    return applicationState.computers.map(computer => ({...computer}))
}
export const useEmployees = () => {
    return applicationState.employees.map(employee => ({...employee}))
}
export const useDepartments = () => {
    return applicationState.departments.map(department => ({...department}))
}
export const useLocations = () => {
    return applicationState.locations.map(location => ({...location}))
}
export const useCustomers = () => {
    return applicationState.customers.map(customer => ({...customer}))
}
export const useEmployeeCustomers = () => {
    return applicationState.employeecustomers.map(employeeCustomer => ({...employeeCustomer}))
}
export const useState = () => {
    return {...applicationState}
}