

let base64String = "";

async function uploadImage() {
    const file = document.querySelector("#imageUpload").files[0];

    base64String = await toBase64(file);
    showImg.src = base64String;
}
