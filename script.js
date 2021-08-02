let fileInput = document.getElementById('fileinput')
let spanError = document.getElementById('errorspan')

fileInput.addEventListener('change', () => {
    chkFileSize()
})

// check the size of the file 
function chkFileSize() {
    let filess = fileInput.files;
    console.log(filess)
    if (filess.length > 0) {
        if (filess[0].size > 550 * 1000) {
            spanError.innerText = "the uploaded file likely exceeded the maximum file size (5 MB), please try another file";
            return false
        } else {
            spanError.innerText = ''
            return true
        }
    }
}

ChannelMergerNode
// check the return of chkFileSize result