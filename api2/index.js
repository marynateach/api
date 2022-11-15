async function getVersesforpage(number) { //to get verses for a certain pagetry
    try {
      const url = `https://jsonplaceholder.typicode.com/posts/`;
      const response = await fetch(url);
      const data = await response.json();
      const ayahs = data.data.ayahs;
      const verses = ayahs.map(ayah => ayah.text);
      return verses;
    } catch (e) {
      console.log("Error:", e.message)
    }
  }
  
  const form = document.getElementById("form");
  form.addEventListener("submit", async(event) => {
    event.preventDefault();
    const {
      number
    } = event.target.elements;
    const value = number.value;
    const verses = await getVersesforpage(value);
    console.log(verses);
  });