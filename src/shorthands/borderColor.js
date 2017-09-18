// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * @description Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 *
 *  @example Styles as object usage
 * const styles = {
 *   ...borderColor('red', 'green', 'blue', 'yellow')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${borderColor('red', 'green', 'blue', 'yellow')}
 * `
 *
 * // CSS as JS Output
 *
 * div {
 *   'borderTopColor': 'red',
 *   'borderRightColor': 'green',
 *   'borderBottomColor': 'blue',
 *   'borderLeftColor': 'yellow'
 * }
 */

/**
  * @name borderColor
  * @param {Array<string?>} values
  * @returns {Object}
  */
function borderColor(...values: Array<?string>): Object {
  return directionalProperty('borderColor', ...values)
}

export default borderColor
