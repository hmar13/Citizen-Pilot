import * as firebase from 'firebase';
import 'firebase/storage';

// upload to firebase storage
export async function uploadImage(uri: string, folderName: string) {
  const blob = await new Promise((resolve) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      resolve(xhr.response);
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const ref = firebase
    .storage()
    .ref()
    .child(`${folderName}`);

  let snapshot = await ref.put(blob);

  return await snapshot.ref.getDownloadURL();
}

// export async function uploadAudio (uri: string, folderName:string) {
//   const blob = await new Promise((resolve) => {
//     const xhr = new XMLHttpRequest();
//     xhr.onload = () => {
//       resolve(xhr.response);
//     };
//     xhr.responseType = 'blob';
//     xhr.open('GET', uri, true);
//     xhr.send(null);
//   });

//   const ref = firebase
//     .storage()
//     .ref()
//     .child(`${folderName}/${}.m4a`);

//   let snapshot = await ref.put(blob, {
//     contentType: 'audio/m4a',
//   });

//   return await snapshot.ref.getDownloadURL();
// }

