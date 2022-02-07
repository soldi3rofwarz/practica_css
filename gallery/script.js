const items = document.querySelectorAll(".item")
const observer = new IntersectionObserver(entries =>{
    entries.forEach(entry =>{
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
},
{
    threshold: 0.3,
}
)

items.forEach(item =>{
    observer.observe(item)
})