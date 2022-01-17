import type { GriffelStylesStrictCSSObject, GriffelStylesCSSValue } from '../types';

type BorderRadiusStyle = Pick<
  GriffelStylesStrictCSSObject,
  'borderBottomRightRadius' | 'borderBottomLeftRadius' | 'borderTopRightRadius' | 'borderTopLeftRadius'
>;

/**
 * A function that implements CSS spec conformant expansion for "borderRadius". "/" is not supported, please use CSS
 * longhands directly.
 *
 * @example
 *   borderRadius('10px')
 *   borderRadius('10px', '5%')
 *   borderRadius('2px', '4px', '8px')
 *   borderRadius('1px', 0, '3px', '4px')
 *
 * See https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
 */
export function borderRadius(
  value1: GriffelStylesCSSValue,
  value2: GriffelStylesCSSValue = value1,
  value3: GriffelStylesCSSValue = value1,
  value4: GriffelStylesCSSValue = value2,
): BorderRadiusStyle {
  return {
    borderBottomRightRadius: value3,
    borderBottomLeftRadius: value4,
    borderTopRightRadius: value2,
    borderTopLeftRadius: value1,
  };
}
