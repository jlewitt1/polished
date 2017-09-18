// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'
import guard from '../internalHelpers/_guard'
import curry from '../internalHelpers/_curry'

/**
 * @description Decreases the intensity of a color. Its range is between 0 to 1. The first
 * argument of the desaturate function is the amount by how much the color
 * intensity should be decreased.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: desaturate(0.2, '#CCCD64'),
 *   background: desaturate(0.2, 'rgba(204,205,100,0.7)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${desaturate(0.2, '#CCCD64')};
 *   background: ${desaturate(0.2, 'rgba(204,205,100,0.7)')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#b8b979";
 *   background: "rgba(184,185,121,0.7)";
 * }
 */

/**
  * @name desaturate
  * @param {number} amount
  * @param {string} color
  * @returns {string}
  */
function desaturate(amount: number, color: string): string {
  const hslColor = parseToHsl(color)
  return toColorString({
    ...hslColor,
    saturation: guard(0, 1, hslColor.saturation - amount),
  })
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedDesaturate = /*#__PURE__*/ curry(desaturate) // eslint-disable-line spaced-comment
export default curriedDesaturate
