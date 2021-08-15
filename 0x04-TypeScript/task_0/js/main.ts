interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

let student1: Student = {
    firstName: "mary",
    lastName: "mburu",
    age: 22,
    location: 'Kimironko' 
};

let student2: Student  = {
    firstName: "serge",
    lastName: "tassiga",
    age: 50,
    location: 'Kimironko' 
};

let studentsList: Student[] = [student1, student2];

let table = document.createElement('table');
document.body.appendChild(table);

studentsList.map((item: Student) => {
    let tr = document.createElement('tr');
    table.appendChild(tr);
    let tdElement = document.createElement('td');
    tdElement.innerHTML = item.firstName;
    tr.appendChild(tdElement);
    let tdElement2 = document.createElement('td');
    tdElement2.innerHTML = item.location;
    tr.appendChild(tdElement2);

    return tr;
});
