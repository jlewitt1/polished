// @flow

/**
 * @description Shorthand that accepts any number of backgroundImage values as parameters for creating a single background statement.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${backgroundImages('url("/image/background.jpg")', 'linear-gradient(red, green)')}
 * `
 *
 * @example CSS as JS Output
 * div {
 *   'backgroundImage': 'url("/image/background.jpg"), linear-gradient(red, green)'
 * }
 */

/**
  * @name backgroundImages
  * @param {Array<string>} properties
  * @return {object}
  */
function backgroundImages(...properties: Array<string>): Object {
  return {
    backgroundImage: properties.join(', '),
  }
}

export default backgroundImages
