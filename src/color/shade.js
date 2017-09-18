// @flow

import mix from './mix'
import curry from '../internalHelpers/_curry'

/**
 * @description Shades a color by mixing it with black. `shade` can produce
 * hue shifts, where as `darken` manipulates the luminance channel and therefore
 * doesn't produce hue shifts.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: shade(0.25, '#00f')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${shade(0.25, '#00f')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#00003f";
 * }
 */

/**
  * @name shade
  * @param {number} percentage
  * @param {string} color
  * @return {string}
  */
function shade(percentage: number, color: string): string {
  if (typeof percentage !== 'number' || percentage > 1 || percentage < -1) {
    throw new Error(
      'Passed an incorrect argument to shade, please pass a percentage less than or equal to 1 and larger than or equal to -1.',
    )
  }
  if (typeof color !== 'string') {
    throw new Error(
      'Passed an incorrect argument to a color function, please pass a string representation of a color.',
    )
  }
  return mix(percentage, color, 'rgb(0, 0, 0)')
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedShade = /*#__PURE__*/ curry(shade) // eslint-disable-line spaced-comment
export default curriedShade
