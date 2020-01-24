const formControls = [
    {label: 'Name', type: 'input', name: 'name', value: ''},
    {label: 'Email', type: 'input', name: 'email', value: ''},
    {label: 'Occupation', type: 'select', data: ['Teacher', 'Software Engineer', 'Doctor', 'Lawyer'], name: 'occupation', value: 'Please Select'},
    {label: 'Message', type: 'textarea', name: 'message', value: ''},
    {label: 'Agree to Terms & Conditions', type: 'checkbox', name: 'terms', value: false},
];

export default formControls; 