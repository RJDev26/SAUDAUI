import { DomSanitizer } from "@angular/platform-browser";

export const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data.split(",")[1]);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    const blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  export const setUploadedFiles = (file: { name: string; type: string; base64: string }) => {
    if (!file.base64 || !file.base64.length) {
      return;
    }
    const blob = b64toBlob(file.base64, file.type);
    const url = URL.createObjectURL(blob);
    return {
      name: file.name,
      type: file.type,
      url:url,
      base64: file.base64,
    };
  }

  export const downloadFileByURL = (url, name)=>{
    const a = document.createElement('a')
    a.href = url;
    a.download = name;
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }