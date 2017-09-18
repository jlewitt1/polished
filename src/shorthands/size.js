// @flow

/**
 * @description Shorthand to set the height and width properties in a single statement.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...size('300px', '250px')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${size('300px', '250px')}
 * `
 *
 * @example CSS as JS Output
 * div {
 *   'height': '300px',
 *   'width': '250px',
 * }
 */

/**
  * @name size
  * @param {string} height
  * @param {string} width
  * @returns {Object}
  */
function size(height: string, width?: string = height): Object {
  return {
    height,
    width,
  }
}

export default size
