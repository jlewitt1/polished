// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'
import curry from '../internalHelpers/_curry'

/**
 * @description Sets the saturation of a color to the provided value. The lightness range can be
 * from 0 and 1.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: setSaturation(0.2, '#CCCD64'),
 *   background: setSaturation(0.75, 'rgba(204,205,100,0.7)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${setSaturation(0.2, '#CCCD64')};
 *   background: ${setSaturation(0.75, 'rgba(204,205,100,0.7)')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#adad84";
 *   background: "rgba(228,229,76,0.7)";
 * }
 */

/**
  * @name setSaturation
  * @param {number} saturation
  * @param {string} color
  * @return {string}
  */
function setSaturation(saturation: number, color: string): string {
  return toColorString({
    ...parseToHsl(color),
    saturation,
  })
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedSetSaturation = /*#__PURE__*/ curry(setSaturation) // eslint-disable-line spaced-comment
export default curriedSetSaturation
