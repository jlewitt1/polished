// @flow

/**
 * @description Strip the unit from a given CSS value, returning just the number. (or the original value if an invalid string was passed)
 *
 * @example Styles as object usage
 * const styles = {
 *   '--dimension': stripUnit('100px')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   --dimension: ${stripUnit('100px')}
 * `
 *
 * @example CSS in JS Output
 * element {
 *   '--dimension': 100
 * }
 */

/**
  * @name stripUnit
  * @param {string} value
  * @returns {number | string}
  */
function stripUnit(value: string): number | string {
  const unitlessValue = parseFloat(value)
  if (isNaN(unitlessValue)) return value
  return unitlessValue
}

export default stripUnit
