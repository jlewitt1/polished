// @flow

/**
 * @description CSS to style the selection psuedo-element.
 *
 * @example Styles as object usage
 * const styles = {
 *   ...placeholder({'color': 'blue'})
 * }
 *
 * @example styled-components usage
 * const div = styled.input`
 *    ${placeholder({'color': 'blue'})}
 * `
 *
 * @example CSS as JS Output
 *
 * 'input': {
 *   '&:-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&:-ms-input-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-moz-placeholder': {
 *     'color': 'blue',
 *   },
 *   '&::-webkit-input-placeholder': {
 *     'color': 'blue',
 *   },
 * },
 */

/**
  * @name placeholder
  * @param {object, string}
  * @returns {object}
  */
function placeholder(styles: Object, parent?: string = '&'): Object {
  return {
    [`${parent}::-webkit-input-placeholder`]: {
      ...styles,
    },
    [`${parent}:-moz-placeholder`]: {
      ...styles,
    },
    [`${parent}::-moz-placeholder`]: {
      ...styles,
    },
    [`${parent}:-ms-input-placeholder`]: {
      ...styles,
    },
  }
}

export default placeholder
