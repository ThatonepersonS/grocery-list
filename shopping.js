console.log("🍋", "🫑", "🍞", "🥩", "🥛", "🥣", "🦞", "🥪");

const AddBtn = document.querySelector("#add-btn")

const updateList = (event) => {
    console.log(event);
    const icon = event.target;
    icon.classList.toggle("bi-bag");
    icon.classList.toggle("bi-bag-check")
    icon.classList.toggle("in-cart");
};


const removeItem = (event) => {
const icon = event.target;
icon.parentElement.remove();

};


AddBtn.addEventListener("click", () => {
    const itemInput = document.querySelector("#item");
    const emojiselect = document.querySelector("#department");

    const item = itemInput.value.trim()
    const emoji = emojiselect.value
    console.log(itemInput.value, emojiselect.value);

    const itemDiv = bulidItem(emoji, item);
document.querySelector(".right").append(itemDiv);

if(item){
     const itemDiv = bulidItem(emoji, item);

}

});




function bulidItem(emoji, item){
    const itemDiv = document.createElement("div")
    const emojispan = document.createElement("span")
    const itemspan = document.createElement("span")
    const bagicon = document.createElement("i")
    const trashicon = document.createElement("i")


    itemDiv.className = "item";
    emojispan.className = "emoji";
    emojispan.innerText = emoji;
    itemspan.className = "item-description";
    itemspan.innerText = item;
    bagicon.className = "bi bi-bag add-icon"
    bagicon.addEventListener("click", updateList);
    trashicon.className = "bi bi-trash delete-icon";
    trashicon.addEventListener("click", removeItem);

    itemDiv.append(emojispan, itemspan, bagicon, trashicon)
    return(itemDiv)
}