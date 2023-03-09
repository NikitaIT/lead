import { assert } from '@lead/std';
import * as Y from 'yjs';
import { Version } from './Version';

export class Snapshot {
  constructor(private version: Version) {}
  get value() {
    return Y.decodeSnapshot(this.version.snapshot);
  }
  pumpVersion() {
    const version = this.version;
    const value = this.value;
    const prev = value.sv.get(version.clientID);
    assert(
      prev !== undefined,
      'client prev version should be defined for version:',
      version
    );
    // account for the action of adding a version to ydoc
    value.sv.set(version.clientID, prev + 1);
  }
}
