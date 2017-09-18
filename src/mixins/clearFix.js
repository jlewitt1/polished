// @flow

/**
 * @description CSS to contain a float (credit to CSSMojo).
 *
 * @example Styles as object usage
 * const styles = {
 *    ...clearFix(),
 * }
 *
 * @example styled-components usage
 * const div = styled.div`
 *   ${clearFix()}
 * `
 * @example CSS as JS Output
 *
 * '&::after': {
 *   'clear': 'both',
 *   'content': '""',
 *   'display': 'table'
 * }
 */

/**
  * @name clearFix
  * @param {string} parent
  * @returns {object}
  */
function clearFix(parent?: string = '&'): Object {
  const pseudoSelector = `${parent}::after`
  return {
    [pseudoSelector]: {
      clear: 'both',
      content: '""',
      display: 'table',
    },
  }
}

export default clearFix
