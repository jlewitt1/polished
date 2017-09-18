// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * @description Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...borderWidth('12px', '24px', '36px', '48px')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${borderWidth('12px', '24px', '36px', '48px')}
 * `
 *
 * @example CSS as JS Output
 *
 * div {
 *   'borderTopWidth': '12px',
 *   'borderRightWidth': '24px',
 *   'borderBottomWidth': '36px',
 *   'borderLeftWidth': '48px'
 * }
 */

/**
  * @name borderWidth
  * @param {Array<string?>} width
  * @returns {Object}
  */
function borderWidth(...values: Array<?string>): Object {
  return directionalProperty('borderWidth', ...values)
}

export default borderWidth
