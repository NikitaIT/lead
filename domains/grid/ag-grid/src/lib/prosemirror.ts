import * as Y from 'yjs';
// import {
//   ySyncPlugin,
//   ySyncPluginKey,
//   yCursorPlugin,
//   yUndoPlugin,
//   undo,
//   redo,
// } from 'y-prosemirror';
// import { EditorState } from 'prosemirror-state';
// import { EditorView } from 'prosemirror-view';
// import { exampleSetup } from 'prosemirror-example-setup';
// import { keymap } from 'prosemirror-keymap';
// import { schema } from './schema.js';

export function useProsemirror({
  ydoc,
  permanentUserData,
  awareness,
}: {
  /** define doc editted by actor */
  ydoc: Y.Doc;
  /** define actor/editor */
  permanentUserData: Y.PermanentUserData;
  /** define event bus between providers, =provider.awareness */
  awareness: unknown;
}) {
  /**
   * editors works with XmlFragment
   */
  const yXmlFragment = ydoc.get('prosemirror', Y.XmlFragment);

  /**
   * create dom for editor
   */
  const editor = document.createElement('div');
  editor.setAttribute('id', 'editor');
  const editorContainer = document.createElement('div');
  editorContainer.insertBefore(editor, null);
  document.body.insertBefore(editorContainer, null);

  /**
   * append editor for this dom
   */

  const colors = [
    { light: '#ecd44433', dark: '#ecd444' },
    { light: '#ee635233', dark: '#ee6352' },
    { light: '#6eeb8333', dark: '#6eeb83' },
  ];
  // const prosemirrorView = new EditorView(editor, {
  //   state: EditorState.create({
  //     schema,
  //     plugins: [
  //       ySyncPlugin(yXmlFragment, { permanentUserData, colors }),
  //       yCursorPlugin(awareness),
  //       yUndoPlugin(),
  //       keymap({
  //         'Mod-z': undo,
  //         'Mod-y': redo,
  //         'Mod-Shift-z': redo,
  //       }),
  //     ].concat(exampleSetup({ schema })),
  //   }),
  // });
  //return prosemirrorView;
}
