// @flow

/**
 * @description CSS to represent truncated text with an ellipsis.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...ellipsis('250px')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${ellipsis('250px')}
 * `
 *
 * @example CSS as JS Output
 *
 * div: {
 *   'display': 'inline-block',
 *   'maxWidth': '250px',
 *   'overflow': 'hidden',
 *   'textOverflow': 'ellipsis',
 *   'whiteSpace': 'nowrap',
 *   'wordWrap': 'normal'
 * }
 */

/**
  * @name ellipsis
  * @param {string} width
  * @returns {object}
  */
function ellipsis(width?: string = '100%'): Object {
  return {
    display: 'inline-block',
    maxWidth: width,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    wordWrap: 'normal',
  }
}

export default ellipsis
