import readDatabase from '../utils';

const VALID_MAJORS = ['CS', 'SWE'];

/**
 * A Student controller class
 */
class StudentsController {
  /**
   * it resolves request to the all students
   * @param {Object} request - contains request from the server
   * @param {Object} response - contains response for the server
   */
  static getAllStudents(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(dataPath)
      .then((studentGroups) => {
        const responseParts = ['This is the list of our students'];

        const cmpFxn = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [field, group] of Object.entries(studentGroups).sort(
          cmpFxn,
        )) {
          responseParts.push(
            [
              `Number of students in ${field}: ${group.length}.`,
              'List:',
              group.map((student) => student.firstname).join(', '),
            ].join(' '),
          );
        }
        response.status(200).send(responseParts.join('\n'));
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }

  /**
   * it resolves request to studennt majors
   * @param {Object} request - contains request from the server
   * @param {Object} response - contains response for the server
   */
  static getAllStudentsByMajor(request, response) {
    const dataPath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = request.params;

    if (!VALID_MAJORS.includes(major)) {
      response.status(500).send('Major parameter must be CS or SWE');
      return;
    }
    readDatabase(dataPath)
      .then((studentGroups) => {
        let responseText = '';

        if (Object.keys(studentGroups).includes(major)) {
          const group = studentGroups[major];
          responseText = `List: ${group
            .map((student) => student.firstname)
            .join(', ')}`;
        }
        response.status(200).send(responseText);
      })
      .catch((err) => {
        response
          .status(500)
          .send(err instanceof Error ? err.message : err.toString());
      });
  }
}

export default StudentsController;