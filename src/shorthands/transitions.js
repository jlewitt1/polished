// @flow

/**
 * @description Shorthand that accepts any number of transition values as parameters for creating a single transition statement.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${transitions('opacity 1.0s ease-in 0s', 'width 2.0s ease-in 2s')}
 * `
 *
 * @example CSS as JS Output
 * div {
 *   'transition': 'opacity 1.0s ease-in 0s, width 2.0s ease-in 2s'
 * }
 */

/**
 * @name transitions
 * @param {Array<string>} properties
 * @returns {Object}
 */
function transitions(...properties: Array<string>): Object {
  return {
    transition: properties.join(', '),
  }
}

export default transitions
