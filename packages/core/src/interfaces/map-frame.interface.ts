import {IToken} from '.';

/**
 * Hypothesis: abstraction over a source code line?
 */
export interface IMapFrame {
	id: string;
	sourceId: string;
	start: IToken;
	end: IToken;
	isClone?: boolean;
	localDuplicate?: boolean;
}
