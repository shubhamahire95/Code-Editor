function saveCode() {
    const code = window.editor.getValue();
    console.log("Saved Code:", code);
    alert("Code saved! (Check console for output)");
}


function saveCode() {
    const code = window.editor.getValue();
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "code.js";  // फाईलचं नाव जे हवं आहे ते द्या
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}
