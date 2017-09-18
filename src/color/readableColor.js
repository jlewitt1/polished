// @flow
import getLuminance from './getLuminance'
import curry from '../internalHelpers/_curry'

/**
 * @description Selects black or white for best contrast depending on the luminosity of the given color.
 * Follows W3C specs for readability at https://www.w3.org/TR/WCAG20-TECHS/G18.html
 *
 * @example Styles as object usage
 * const styles = {
 *   color: readableColor('#000'),
 *   color: readableColor('papayawhip'),
 *   color: readableColor('rgb(255,0,0)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   color: ${readableColor('#000')};
 *   color: ${readableColor('papayawhip')};
 *   color: ${readableColor('rgb(255,0,0)')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   color: "#fff";
 *   color: "#fff";
 *   color: "#000";
 * }
 */

/**
  * @name readableColor
  * @param {string} color
  * @returns {string}
  */
function readableColor(color: string): string {
  return getLuminance(color) > 0.179 ? '#000' : '#fff'
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedReadableColor = /*#__PURE__*/ curry(readableColor) // eslint-disable-line spaced-comment
export default curriedReadableColor
