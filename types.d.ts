/* Files ending with .include (e.g. 'text.txt.include') will be included with raw-loader */
declare module '*.include' {
    const content: string;
    export default content;
}

/**
 * Boolean represting whether this is a development build or not. Will be transformed to a boolean by Webpack DefinePlugin
 * @example // Development Build
 * __DEV__: true
 * // Production Build
 * __DEV__: false
 * @global
 * @constant
 */
declare var __DEV__: boolean;
/**
 * Boolean represting whether this is a web build or not. Will be transformed to a boolean by Webpack DefinePlugin
 * @example // Web Build
 * __WEB__: true
 * // App (electron) Build
 * __WEB__: false
 * @global
 * @constant
 */
declare var __WEB__: boolean;

/**
 * ID of the react root container element.
 * @global
 * @constant
 */
declare var __SS_REACT_ROOT__: string;