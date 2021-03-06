// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * @description Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...padding('12px', '24px', '36px', '48px')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${padding('12px', '24px', '36px', '48px')}
 * `
 *
 * @example CSS as JS Output
 * div {
 *   'paddingTop': '12px',
 *   'paddingRight': '24px',
 *   'paddingBottom': '36px',
 *   'paddingLeft': '48px'
 * }
 */

/**
  * @name padding
  * @param {Array<string?>}
  * @returns {Object}
  */
function padding(...values: Array<?string>): Object {
  return directionalProperty('padding', ...values)
}

export default padding
