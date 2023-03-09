import { useEffect, useState } from 'react';
import * as Y from 'yjs';
import { IndexeddbPersistence } from 'y-indexeddb';
import { WebrtcProvider } from 'y-webrtc';

export function Playground() {
  const [text, setText] = useState<{ value: Y.Text | '' }>({ value: '' });
  const [undoManager, setUndoManager] = useState<Y.UndoManager | null>(null);

  useEffect(() => {
    const ydoc = new Y.Doc();
    const permanentUserData = new Y.PermanentUserData(ydoc);
    const username = 'me';
    const client = 'me' + Math.random();
    permanentUserData.setUserMapping(ydoc, ydoc.clientID, username);
    const indexeddbProvider = new IndexeddbPersistence('count-demo', ydoc);
    indexeddbProvider.whenSynced.then(() => {
      console.log('loaded data from indexed db');
    });
    // const webrtcProvider = new WebrtcProvider('count-demo', ydoc);
    // webrtcProvider.connect();
    const bc = new BroadcastChannel('yjs');

    ydoc.on('update', (update: Uint8Array) => {
      bc.postMessage({ client, update });
      console.log('BroadcastChannel send update', update);
    });

    bc.addEventListener('message', (msg) => {
      const { data } = msg;
      console.log('BroadcastChannel update recived', msg);
      if (data.client !== client) {
        Y.applyUpdate(ydoc, data.update);
        console.log('BroadcastChannel update', data.update);
        setText({ value: yText });
      }
    });

    const yText = ydoc.getText('codemirror');

    const yUndoManager = new Y.UndoManager(yText);
    setUndoManager(yUndoManager);
    (window as any).xxx = yUndoManager;
    setText({ value: yText });

    yText.observe((x) => {
      setText({ value: yText });
      console.log('observe update', x);
    });
    ydoc.on('update', (update) => {
      Y.applyUpdate(ydoc, update);
      console.log('doc update', update);
      setText({ value: yText });
    });

    return () => {
      ydoc.destroy();
      // webrtcProvider.disconnect();
      // webrtcProvider.destroy();
    };
  }, []);
  function onChange(e: React.FormEvent<HTMLInputElement>) {
    if (text.value !== '') {
      text.value.doc?.transact((x) => {
        if (text.value !== '') {
          text.value.delete(0, text.value.length);
          text.value.insert(0, e.currentTarget.value);
          console.log('transact update', x);
        }
      });
    }
  }
  return (
    <div>
      <input onChange={onChange} value={text.value.toString()}></input>
      <button
        disabled={!undoManager?.canUndo()}
        onClick={() => undoManager?.undo()}
      >
        undo
      </button>
      <button
        disabled={!undoManager?.canRedo()}
        onClick={() => undoManager?.redo()}
      >
        redo
      </button>
      <h2>undo</h2>
      <ol>
        {undoManager?.undoStack.map((x) => (
          <li>{JSON.stringify(x.meta.entries(), null, 2)}</li>
        ))}
      </ol>
      <h2>redo</h2>
      <ol>
        {undoManager?.redoStack.map((x) => {
          console.log(x);
          return <li>{JSON.stringify(x.meta.entries(), null, 2)}</li>;
        })}
      </ol>
    </div>
  );
}
