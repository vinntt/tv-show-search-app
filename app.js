const form = document.querySelector("#searchForm");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    // console.log("SUBMITTED!")
    // console.dir(form.elements.query.value)
    const searchTerm = form.elements.query.value;
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
    // console.log(res.data[0].show.image.medium)
    makeImgs(res.data)
    form.elements.query.value = "";

})

// result refers to each element in the array
const makeImgs = (shows) => {
    for (let result of shows) {
        // console.log(result)
        if (result.show.image) {
            const img = document.createElement("img")
            img.src = result.show.image.medium
            document.body.append(img)
        }
    }
}
