// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'
import curry from '../internalHelpers/_curry'

/**
 * @description Sets the lightness of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: setLightness(0.2, '#CCCD64'),
 *   background: setLightness(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${setLightness(0.2, '#CCCD64')};
 *   background: ${setLightness(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#4d4d19";
 *   background: "rgba(223,224,159,0.7)";
 * }
 */

/**
  * @name setLightness
  * @param {number} lightness
  * @param {string} color
  * @return {string}
  */
function setLightness(lightness: number, color: string): string {
  return toColorString({
    ...parseToHsl(color),
    lightness,
  })
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedSetLightness = /*#__PURE__*/ curry(setLightness) // eslint-disable-line spaced-comment
export default curriedSetLightness
