// @flow
import rgba from './rgba'
import parseToRgb from './parseToRgb'
import guard from '../internalHelpers/_guard'
import curry from '../internalHelpers/_curry'

/**
 * @description Increases the opacity of a color. Its range for the amount is between 0 to 1.
 *
 *
 * @example Styles as object usage
 * const styles = {
 *   background: opacify(0.1, 'rgba(255, 255, 255, 0.9)');
 *   background: opacify(0.2, 'hsla(0, 0%, 100%, 0.5)'),
 *   background: opacify(0.5, 'rgba(255, 0, 0, 0.2)'),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   background: ${opacify(0.1, 'rgba(255, 255, 255, 0.9)')};
 *   background: ${opacify(0.2, 'hsla(0, 0%, 100%, 0.5)')},
 *   background: ${opacify(0.5, 'rgba(255, 0, 0, 0.2)')},
 * `
 *
 * @example CSS in JS Output
 * element {
 *   background: "#fff";
 *   background: "rgba(255,255,255,0.7)";
 *   background: "rgba(255,0,0,0.7)";
 * }
 */

/**
  * @name opacify
  * @param {number} amount
  * @param {string} color
  * @returns {string}
  */
function opacify(amount: number, color: string): string {
  const parsedColor = parseToRgb(color)
  const alpha: number =
    typeof parsedColor.alpha === 'number' ? parsedColor.alpha : 1
  const colorWithAlpha = {
    ...parsedColor,
    alpha: guard(0, 1, (alpha * 100 + amount * 100) / 100),
  }
  return rgba(colorWithAlpha)
}

// Don’t inline this variable into export because Rollup will remove the /*#__PURE__*/ comment
const curriedOpacify = /*#__PURE__*/ curry(opacify) // eslint-disable-line spaced-comment
export default curriedOpacify
