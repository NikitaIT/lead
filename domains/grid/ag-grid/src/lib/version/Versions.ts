import { Version } from './Version';
import * as Y from 'yjs';
import { Snapshot } from './Snapshot';

export class Versions {
  /**
   * @param {Y.Doc} doc
   */
  constructor(private doc: Y.Doc) {}
  get versions(): Y.Array<Version> {
    // first to last array
    return this.doc.getArray('versions');
  }
  get prevVersion(): Version | null {
    const x = this.versions;
    return x.length === 0 ? null : x.get(x.length - 1);
  }
  addVersion() {
    const doc = this.doc;
    const currentSnapshot = Y.snapshot(doc);

    if (Y.equalSnapshots(this.next(this.prevVersion), currentSnapshot)) return;

    this.versions.push([
      {
        // just meta info
        date: new Date().getTime(),
        // changes
        snapshot: Y.encodeSnapshot(currentSnapshot),
        // versions should contain actorId for global event ordering
        // in case of conflict with same causual order
        clientID: doc.clientID,
      },
    ]);
  }
  /**
   * pump last saved version because we write updates based on it
   * and return last saved version snapshot
   */
  next(prevVersion: Version | null) {
    if (!prevVersion) return Y.emptySnapshot;

    const snap = new Snapshot(prevVersion);
    snap.pumpVersion();
    return snap.value;
  }
}
