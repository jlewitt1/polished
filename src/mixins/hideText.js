// @flow

/**
 * @description CSS to hide text to show a background image in a SEO-friendly way.
 *
 * @example Styles as object usage
 * const styles = {
 *   'backgroundImage': 'url(logo.png)',
 *   ...hideText(),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   backgroundImage: url(logo.png);
 *   ${hideText()};
 * `
 *
 * @example CSS as JS Output
 *
 * 'div': {
 *   'backgroundImage': 'url(logo.png)',
 *   'textIndent': '101%',
 *   'overflow': 'hidden',
 *   'whiteSpace': 'nowrap',
 * }
 */

/**
  * @name hideText
  * @returns {object}
  */
function hideText(): Object {
  return {
    textIndent: '101%',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }
}

export default hideText
