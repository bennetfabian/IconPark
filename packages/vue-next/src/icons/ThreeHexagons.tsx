/**
 * @file ThreeHexagons 三个菱形
 * @author Auto Generated by IconPark
 */

/* tslint:disable: max-line-length */
/* eslint-disable max-len */
import {ISvgIconProps, IconWrapper} from '../runtime';

export default IconWrapper(
    'three-hexagons',
    true,
    (props: ISvgIconProps) => (
        <svg
            width={props.size}
            height={props.size}
            viewBox="0 0 48 48"
            fill="none"
        >
            <path
                d="M14 9L24 3L34 9V21L24 27L14 21V9Z"
                fill={props.colors[1]}
            />
            <path
                d="M4 27L14 21L24 27V39L14 45L4 39V27Z"
                fill={props.colors[1]}
            />
            <path
                d="M24 27L34 21L44 27V39L34 45L24 39V27Z"
                fill={props.colors[1]}
            />
            <path
                d="M14 21V9L24 3L34 9V21M14 21L24 27M14 21L4 27V39L14 45L24 39M24 27L34 21M24 27V39M34 21L44 27V39L34 45L24 39"
                stroke={props.colors[0]}
                stroke-width={props.strokeWidth}
                stroke-linecap={props.strokeLinecap}
                stroke-linejoin={props.strokeLinejoin}
            />
        </svg>
    )
);
