// @flow

import parseToHsl from './parseToHsl'
import toColorString from './toColorString'

/**
 * @description Converts the color to a grayscale, by reducing its saturation to 0.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: grayscale('#CCCD64'),
 *   background: grayscale('rgba(204,205,100,0.7)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${grayscale('#CCCD64')};
 *   background: ${grayscale('rgba(204,205,100,0.7)')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#999";
 *   background: "rgba(153,153,153,0.7)";
 * }
 */

/**
  * @name grayscale
  * @param {string} color
  * @returns {string}
  */
function grayscale(color: string): string {
  return toColorString({
    ...parseToHsl(color),
    saturation: 0,
  })
}

export default grayscale
