/**
 * The AppController class
 */
class AppController {
  /**
   * it resolves request to the homepage
   * @param {Object} request - contains request from the server
   * @param {Object} response - contains response for the server
   */
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School');
  }
}

export default AppController;
