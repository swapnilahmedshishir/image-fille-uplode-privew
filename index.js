
const inputFile = document.getElementById("inputFile");
const privewConterner = document.getElementById("imageprivew");
const privewImage = privewConterner.querySelector(".image-privew-image");
const privewText = privewConterner.querySelector(".image-privew-text");

/*==== pixel document === */
const imgWidthPX = document.getElementById('width_px');
const imgHeightPX = document.getElementById('height_px');
const imgSize = document.getElementById('size');

/*==== mm document === */
const imgWidthMM = document.getElementById('width_mm');
const imgHeightMM = document.getElementById('height_mm');

/*==== cm document === */
const imgWidthCM = document.getElementById('width_cm');
const imgHeightCM = document.getElementById('height_cm');

/*==== inch document === */
const imgWidthIN = document.getElementById('width_in');
const imgHeightIN = document.getElementById('height_in');

inputFile.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();

    privewImage.style.display = "block";
    privewText.style.display = "none";

    reader.addEventListener("load", function () {
      privewImage.setAttribute("src", this.result);

      const img = new Image();
      img.src = this.result;
      img.addEventListener('load', function () {
        const height = this.naturalHeight;
        const width = this.naturalWidth;
        const sizeInBytes = (file.size / 1024).toFixed(1);
        /*==== pixel  ==== */
        imgWidthPX.innerText = `${width} px`
        imgHeightPX.innerText = `${height} px`
        imgSize.innerText = `${sizeInBytes} kb`

        /*==== Millimeter  ==== */
        imgWidthMM.innerText = `${(width * 0.2645833333).toFixed(3)} mm`
        imgHeightMM.innerText = `${(height * 0.2645833333).toFixed(3)} mm`

        /*==== centimeter  ==== */
        imgWidthCM.innerText = `${(width * 0.0264583333).toFixed(3)} cm`
        imgHeightCM.innerText = `${(height * 0.0264583333).toFixed(3)} cm`

        /*==== inche  ==== */
        imgWidthIN.innerText = `${(width * 0.0104166667).toFixed(3)} in`
        imgHeightIN.innerText = `${(height * 0.0104166667).toFixed(3)} in`
      });
    });

    reader.readAsDataURL(file);
  } else {
    privewImage.style.display = null;
    privewText.style.display = null;
    privewImage.setAttribute("src", "");
  }
});
