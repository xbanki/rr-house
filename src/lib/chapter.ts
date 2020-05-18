/**
 * Representation of a chapter object.
 * 
 * Uses Vue methods which expose risks
 * of XSS, therefore using user-generated content inside of chapters is strongly
 * discouraged.
 */
export interface Chapter {

	/**
	 * Internal ID. Used for Vue component tracking.
	 */
	chapterId: number;

	/**
	 * Title of chapter which will be rendered at the top of the component,
	 * along with being passed in to the navbar 
	 */
	title: string;

	/**
	 * HTML identifier which will be used for meta data that will be sent to the
	 * navigation strip component.
	 */
	htmlId: string;

	/**
	 * `optional` - HTML content which to render inside of chapter component.
	 * `WARNING` - Big XSS risk if user-inputed data is used.
	 */
	content?: string;

	/**
	 * `optional` - Icon which to display in the vertical navbar.
	 */
	icon?: string;
}
