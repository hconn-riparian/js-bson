import { BSON_MAJOR_VERSION } from './constants';

/** @public */
export interface MinKeyExtended {
  $minKey: 1;
}

/**
 * A class representation of the BSON MinKey type.
 * @public
 * @category BSONType
 */
export class MinKey {
  get _bsontype(): 'MinKey' {
    return 'MinKey';
  }
  /** @internal */
  get [Symbol.for('@@mdb.bson.version')](): BSON_MAJOR_VERSION {
    return BSON_MAJOR_VERSION;
  }

  /** @internal */
  toExtendedJSON(): MinKeyExtended {
    return { $minKey: 1 };
  }

  /** @internal */
  static fromExtendedJSON(): MinKey {
    return new MinKey();
  }

  /** @internal */
  [Symbol.for('nodejs.util.inspect.custom')](): string {
    return this.inspect();
  }

  inspect(): string {
    return 'new MinKey()';
  }
}
