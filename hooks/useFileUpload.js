import { useState, useMemo } from "react";

export function useFileUpload() {
  let callback = () => {};
  const [files, setFiles] = useState(null);

  function onChange({ target }) {
    const file = target.files[0];

    const fileObj = {
      source: window.URL.createObjectURL(file),
      name: file.name,
      size: file.size,
      file,
    };

    setFiles(fileObj);
    callback(fileObj);

    target.removeEventListener("change", onChange);
    target.remove();
  }

  function uploadFile(accept = "*", cb = () => {}) {
    callback = cb;
    const inputFileElement = window.document.createElement("input");
    inputFileElement.type = "file";
    inputFileElement.accept = accept;
    inputFileElement.addEventListener("change", onChange);
    inputFileElement.click();
  }

  function clearFile() {
    setFiles(null);
  }

  return useMemo(() => [files, uploadFile, clearFile], [files]);
}
