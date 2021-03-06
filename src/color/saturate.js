// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'
import guard from '../internalHelpers/_guard'
import curry from '../internalHelpers/_curry'

/**
 * @description Increases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the saturate function is the amount by how much the color
 * intensity should be increased.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: saturate(0.2, '#CCCD64'),
 *   background: saturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${saturate(0.2, '#FFCD64')};
 *   background: ${saturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#e0e250";
 *   background: "rgba(224,226,80,0.7)";
 * }
 */

/**
  * @name saturate
  * @param {number} amount
  * @param {string} color
  * @return {string}
  */
function saturate(amount: number, color: string): string {
  const hslColor = parseToHsl(color)
  return toColorString({
    ...hslColor,
    saturation: guard(0, 1, hslColor.saturation + amount),
  })
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedSaturate = /*#__PURE__*/ curry(saturate) // eslint-disable-line spaced-comment
export default curriedSaturate
