import * as firebase from 'firebase';
import 'firebase/storage';

// upload to firebase storage
export async function uploadImage(uri: string, folderName: string, fileName: string) {
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
    .child(`${folderName}/${fileName}`);

  let snapshot = await ref.put(blob);

  return await snapshot.ref.getDownloadURL();
}

