// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * @description Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...margin('12px', '24px', '36px', '48px')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${margin('12px', '24px', '36px', '48px')}
 * `
 *
 * @example CSS as JS Output
 *
 * div {
 *   'marginTop': '12px',
 *   'marginRight': '24px',
 *   'marginBottom': '36px',
 *   'marginLeft': '48px'
 * }
 */

/**
  * @name margin
  * @param {Array<string?>} values
  * @returns {Object}
  */
function margin(...values: Array<?string>): Object {
  return directionalProperty('margin', ...values)
}

export default margin
