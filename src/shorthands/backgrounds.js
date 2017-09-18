// @flow

/**
 * @description Shorthand that accepts any number of background values as parameters for creating a single background statement.
 * @example Styles as object usage
 * const styles = {
 *   ...backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${backgrounds('url("/image/background.jpg")', 'linear-gradient(red, green)', 'center no-repeat')}
 * `
 *
 * @example CSS as JS Output
 *
 * div {
 *   'background': 'url("/image/background.jpg"), linear-gradient(red, green), center no-repeat'
 * }
 */

/**
  * @name backgrounds
  * @param {Array<string>} properties
  * @returns {Object}
  */
function backgrounds(...properties: Array<string>): Object {
  return {
    background: properties.join(', '),
  }
}

export default backgrounds
