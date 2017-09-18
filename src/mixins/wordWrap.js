// @flow

/**
 * @description Provides an easy way to change the `wordWrap` property.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...wordWrap('break-word')
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${wordWrap('break-word')}
 * `
 *
 * @example CSS as JS Output
 *
 * const styles = {
 *   overflowWrap: 'break-word',
 *   wordWrap: 'break-word',
 *   wordBreak: 'break-all',
 * }
 */

/**
  * @name wordWrap
  * @param {string} wrap
  * @returns {Object}
  */
function wordWrap(wrap?: string = 'break-word'): Object {
  const wordBreak = wrap === 'break-word' ? 'break-all' : wrap
  return {
    overflowWrap: wrap,
    wordWrap: wrap,
    wordBreak,
  }
}

export default wordWrap
