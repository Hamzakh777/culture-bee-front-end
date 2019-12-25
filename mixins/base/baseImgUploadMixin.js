const baseImgUploadMixin = {
    data() {
        return {
            files: []
        }
    },

    inputFile(newFile, oldFile) {
        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
            newFile.url = ''
            const URL = window.URL || window.webkitURL;
            if (URL && URL.createObjectURL) {
                newFile.url = URL.createObjectURL(newFile.file);
            }
            this.files.push(newFile);
        }
    }
}

export default baseImgUploadMixin;