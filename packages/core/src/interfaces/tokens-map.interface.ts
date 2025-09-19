import {IMapFrame} from '.';

/**
 * Provides 'map frames' to detector
 */
export interface ITokensMap {

  getFormat(): string;

  getLinesCount(): number;

  getTokensCount(): number;

  getId(): string;

  next(): IteratorResult<IMapFrame | boolean>;

}
