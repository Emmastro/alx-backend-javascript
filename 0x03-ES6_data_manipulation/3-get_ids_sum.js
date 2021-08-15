/* eslint-disable */
export default function getStudentIdsSum(students) {
    return students.reduce((accumulator, currentValue) => (currentValue.id + accumulator), 0);
};
