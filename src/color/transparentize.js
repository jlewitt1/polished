// @flow
import rgba from './rgba'
import parseToRgb from './parseToRgb'
import guard from '../internalHelpers/_guard'
import curry from '../internalHelpers/_curry'

/**
 * @description Decreases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 * @example Styles as object usage
 * const styles = {
 *   background: transparentize(0.1, '#fff');
 *   background: transparentize(0.2, 'hsl(0, 0%, 100%)'),
 *   background: transparentize(0.5, 'rgba(255, 0, 0, 0.8)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${transparentize(0.1, '#fff')};
 *   background: ${transparentize(0.2, 'hsl(0, 0%, 100%)')},
 *   background: ${transparentize(0.5, 'rgba(255, 0, 0, 0.8)')},
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "rgba(255,255,255,0.9)";
 *   background: "rgba(255,255,255,0.8)";
 *   background: "rgba(255,0,0,0.3)";
 * }
 */

/**
  * @name transparentize
  * @param {number} amount
  * @param {string} color
  * @return {string}
  */
function transparentize(amount: number, color: string): string {
  const parsedColor = parseToRgb(color)
  const alpha: number =
    typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1
  const colorWithAlpha = {
    ...parsedColor,
    alpha: guard(0, 1, (alpha * 100 - amount * 100) / 100),
  }
  return rgba(colorWithAlpha)
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedTransparentize = /*#__PURE__*/ curry(transparentize) // eslint-disable-line spaced-comment
export default curriedTransparentize
