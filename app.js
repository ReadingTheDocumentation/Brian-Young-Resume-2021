

let print = document.querySelector('.print-resume')

print.addEventListener('click', () => {
    console.log('click happened')
    CreatePDFfromHTML()
})




function CreatePDFfromHTML() {
    let printArea = document.querySelector('.wrapper')
    let HTML_Width = document.querySelector('.wrapper').clientWidth;
    let HTML_Height = document.querySelector('.wrapper').clientHeight;
    console.log(HTML_Height, HTML_Width)
    let top_left_margin = 15;
    let PDF_Width = HTML_Width + (top_left_margin * 2);
    let PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    let canvas_image_width = HTML_Width;
    let canvas_image_height = HTML_Height;

    let totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;

    html2canvas(printArea).then(function (canvas) {
        let imgData = canvas.toDataURL("image/png", 1.0);
        let pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);

        pdf.save("Brian Young Resume");
        // $(".html-content").hide();
    });
}