// @flow
import directionalProperty from '../helpers/directionalProperty'

/**
 * @description Shorthand that accepts up to four values, including null to skip a value, and maps them to their respective directions.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...borderStyle('solid', 'dashed', 'dotted', 'double')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${borderStyle('solid', 'dashed', 'dotted', 'double')}
 * `
 *
 * @example CSS as JS Output
 *
 * div {
 *   'borderTopStyle': 'solid',
 *   'borderRightStyle': 'dashed',
 *   'borderBottomStyle': 'dotted',
 *   'borderLeftStyle': 'double'
 * }
 */

/**
  * @name borderStyle
  * @param {Array<string?>} values
  * @returns {Object}
  */
function borderStyle(...values: Array<?string>): Object {
  return directionalProperty('borderStyle', ...values)
}

export default borderStyle
