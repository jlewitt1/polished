// @flow

import parseToRgb from './parseToRgb'
import toColorString from './toColorString'

/**
 * @description Inverts the red, green and blue values of a color.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: invert('#CCCD64'),
 *   background: invert('rgba(101,100,205,0.7)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${invert('#CCCD64')};
 *   background: ${invert('rgba(101,100,205,0.7)')};
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#33329b";
 *   background: "rgba(154,155,50,0.7)";
 * }
 */

/**
  * @name invert
  * @param {string} color
  * @returns {string}
  */
function invert(color: string): string {
  // parse color string to rgb
  const value = parseToRgb(color)
  return toColorString({
    ...value,
    red: 255 - value.red,
    green: 255 - value.green,
    blue: 255 - value.blue,
  })
}

export default invert
