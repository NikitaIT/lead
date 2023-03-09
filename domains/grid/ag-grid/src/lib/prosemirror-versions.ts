// /* eslint-env browser */

// import * as Y from 'yjs';
// import * as random from 'lib0/random.js';
// import { html, render } from 'lit-html';
// import * as dom from 'lib0/dom.js';
// import * as pair from 'lib0/pair.js';
// import { Versions } from './version/Versions';
// import { Version } from './version/Version';

// const liveTracking = /** @type {HTMLInputElement} */ dom.element('input', [
//   pair.create('type', 'checkbox'),
//   pair.create('name', 'yjs-live-tracking'),
//   pair.create('value', 'Live Tracking '),
// ]);

// const updateLiveTrackingState = (editorstate) => {
//   setTimeout(() => {
//     const syncState = ySyncPluginKey.getState(editorstate.state);
//     liveTracking.checked =
//       syncState.prevSnapshot != null && syncState.snapshot == null;
//   }, 500);
// };

// const renderVersion = (
//   editorview,
//   version: Version,
//   prevSnapshot: Uint8Array | null
// ) => {
//   editorview.dispatch(
//     editorview.state.tr.setMeta(ySyncPluginKey, {
//       snapshot: Y.decodeSnapshot(version.snapshot),
//       prevSnapshot:
//         prevSnapshot == null ? Y.emptySnapshot : Y.decodeSnapshot(prevSnapshot),
//     })
//   );
//   updateLiveTrackingState(editorview);
// };

// const unrenderVersion = (editorview) => {
//   const binding = ySyncPluginKey.getState(editorview.state).binding;
//   if (binding != null) {
//     binding.unrenderSnapshot();
//   }
//   updateLiveTrackingState(editorview);
// };

// /**
//  * @param {EditorView} editorview
//  * @param {Version} version
//  * @param {Version|null} prevSnapshot
//  */
// const versionTemplate = (
//   editorview,
//   version: Version,
//   prevSnapshot: Uint8Array | null
// ) =>
//   html`<div
//     class="version-list"
//     @click=${(e) => renderVersion(editorview, version, prevSnapshot)}
//   >
//     ${new Date(version.date).toLocaleString()}
//   </div>`;

// const versionList = (editorview, versionsHistory: Versions) => {
//   const versions = versionsHistory.versions;
//   return html`<div>
//     ${versions.length > 0
//       ? versions.map((version, i) =>
//           versionTemplate(
//             editorview,
//             version,
//             i > 0 ? versions.get(i - 1).snapshot : null
//           )
//         )
//       : html`<div>No snapshots..</div>`}
//   </div>`;
// };

// /**
//  * @param {HTMLElement} parent
//  * @param {Y.Doc} doc
//  * @param {EditorView} editorview
//  */
// export const attachVersion = (
//   parent: HTMLElement,
//   doc: Y.Doc,
//   editorview: EditorView
// ) => {
//   let open = false;
//   const versionsHistory = new Versions(doc);
//   const rerender = () => {
//     render(
//       html`<div class="version-modal" ?hidden=${open}>
//         <button @click=${() => versionsHistory.addVersion()}>Snapshot</button>
//         ${versionList(editorview, doc)}
//       </div>`,
//       vContainer
//     );
//   };
//   updateLiveTrackingState(editorview);
//   liveTracking.addEventListener('click', (e) => {
//     if (liveTracking.checked) {
//       const versions = doc.getArray('versions');
//       const lastVersion =
//         versions.length > 0
//           ? Y.decodeSnapshot(versions.get(versions.length - 1).snapshot)
//           : Y.emptySnapshot;
//       editorview.dispatch(
//         editorview.state.tr.setMeta(ySyncPluginKey, {
//           snapshot: null,
//           prevSnapshot: lastVersion,
//         })
//       );
//     } else {
//       unrenderVersion(editorview);
//     }
//   });
//   parent.insertBefore(liveTracking, null);
//   parent.insertBefore(
//     dom.element(
//       'label',
//       [pair.create('for', 'yjs-live-tracking')],
//       [dom.text('Live Tracking ')]
//     ),
//     null
//   );
//   const btn = document.createElement('button');
//   btn.setAttribute('type', 'button');
//   btn.textContent = 'Versions';
//   btn.addEventListener('click', () => {
//     open = !open;
//     unrenderVersion(editorview);
//     rerender();
//   });
//   const vContainer = document.createElement('div');
//   parent.insertBefore(btn, null);
//   parent.insertBefore(vContainer, null);
//   doc.getArray('versions').observe(rerender);
//   rerender();
// };

// const testUsers = [
//   { username: 'Alice', color: '#ecd444', lightColor: '#ecd44433' },
//   { username: 'Bob', color: '#ee6352', lightColor: '#ee635233' },
//   { username: 'Max', color: '#6eeb83', lightColor: '#6eeb8333' },
// ];

// const user = random.oneOf(testUsers);

// window.addEventListener('load', () => {
//   const ydoc = new Y.Doc();
//   const permanentUserData = new Y.PermanentUserData(ydoc);
//   permanentUserData.setUserMapping(ydoc, ydoc.clientID, user.username);
//   /**
//    * enable history
//    */
//   ydoc.gc = false;

//   attachVersion(document.getElementById('y-version'), ydoc, prosemirrorView);

//   // @ts-expect-error dsfs d
//   window.example = { provider, ydoc, yXmlFragment, prosemirrorView };
// });
